import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { dirname, resolve, isAbsolute } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const json = (root, file) => JSON.parse(readFileSync(resolve(root, file), 'utf8'));

export function loadCatalogue(root = projectRoot) {
  return {
    baseline: json(root, 'docs/parity/baseline.json'),
    features: json(root, 'docs/parity/features.json'),
    specifications: json(root, 'docs/parity/specifications.json'),
    http: json(root, 'docs/parity/http-operations.json'),
    rpc: json(root, 'docs/parity/environment-methods.json'),
    providers: json(root, 'docs/parity/providers.json'),
    sdks: json(root, 'docs/parity/sdk-baselines.json'),
  };
}

export function allItems(catalogue) {
  return [...catalogue.features, ...catalogue.http, ...catalogue.rpc, ...catalogue.providers];
}

function safeRelativePath(path) {
  return typeof path === 'string' && path.length > 0 && !isAbsolute(path)
    && !path.split(/[\\/]/).includes('..') && !path.includes('://');
}

export function validateCatalogue(catalogue, {
  fileExists = path => existsSync(resolve(projectRoot, path)),
  readEvidence = path => json(projectRoot, path),
} = {}) {
  const errors = [];
  const require = (condition, message) => { if (!condition) errors.push(message); };
  const { baseline, features, specifications, http, rpc, providers, sdks } = catalogue;
  const items = allItems(catalogue);
  const counts = baseline.counts;
  const expected = {
    specifications: specifications.length,
    requirements: features.length,
    http_paths: new Set(http.map(row => row.path)).size,
    http_operations: http.length,
    environment_methods: rpc.length,
    providers: providers.length,
    sdk_repositories: sdks.length,
  };
  for (const [key, actual] of Object.entries(expected)) {
    require(counts[key] === actual, `${key}: expected ${counts[key]}, found ${actual}`);
  }
  require(/^[a-f0-9]{40}$/.test(baseline.commit), 'baseline commit must be a complete SHA');
  require(baseline.implementation_imported === false, 'upstream implementation must not be imported');

  const unique = (values, name) => require(new Set(values).size === values.length, `duplicate ${name}`);
  unique(items.map(row => row.id), 'item ID');
  unique(specifications.map(row => row.path), 'specification path');
  unique(http.map(row => `${row.method} ${row.path}`), 'HTTP operation');
  unique(rpc.map(row => row.method), 'environment method');
  unique(providers.map(row => `${row.kind}:${row.name}`), 'provider');
  unique(sdks.map(row => row.repository), 'SDK repository');

  const featureIds = new Set(features.map(row => row.id));
  const sourcePaths = new Set(specifications.map(row => row.path));
  sourcePaths.add('docs/a13n-service/sdks.md');
  for (const row of features) {
    require(/^M[0-8]$/.test(row.phase), `${row.id}: missing milestone`);
    require(Array.isArray(row.acceptance) && row.acceptance.length >= 2
      && row.acceptance.every(value => typeof value === 'string' && value.trim().length > 5),
    `${row.id}: acceptance scenarios need substantive assertions`);
    require(Array.isArray(row.specs) && row.specs.length > 0, `${row.id}: missing source specifications`);
    for (const source of row.specs ?? []) require(sourcePaths.has(source), `${row.id}: unknown source ${source}`);
  }
  for (const spec of specifications) {
    const mapped = features.filter(row => row.specs.includes(spec.path)).map(row => row.id).sort();
    require(mapped.length > 0, `${spec.path}: no requirement coverage`);
    require(JSON.stringify(mapped) === JSON.stringify([...spec.requirements].sort()),
      `${spec.path}: reverse requirement mapping is stale`);
    require(spec.url.includes(`/blob/${baseline.commit}/`), `${spec.path}: source is not pinned`);
  }
  for (const row of [...http, ...rpc, ...providers]) {
    require(featureIds.has(row.requirement), `${row.id}: unknown requirement ${row.requirement}`);
  }
  for (const row of http) {
    require(['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS', 'TRACE'].includes(row.method),
      `${row.id}: invalid HTTP verb`);
    require(row.path.startsWith('/'), `${row.id}: invalid HTTP path`);
  }
  for (const [kind, count] of Object.entries(baseline.provider_counts)) {
    require(providers.filter(row => row.kind === kind).length === count, `${kind}: provider count drift`);
  }
  for (const sdk of sdks) require(/^[a-f0-9]{40}$/.test(sdk.sha), `${sdk.repository}: unpinned SDK`);

  for (const row of items) {
    require(row.required === true, `${row.id}: full-parity items cannot be silently made optional`);
    require(['planned', 'implemented', 'verified'].includes(row.status), `${row.id}: invalid status`);
    require(Array.isArray(row.implementation), `${row.id}: implementation must be an array`);
    require(Array.isArray(row.evidence), `${row.id}: evidence must be an array`);
    for (const path of [...(row.implementation ?? []), ...(row.evidence ?? [])]) {
      require(safeRelativePath(path), `${row.id}: unsafe evidence or implementation path`);
      if (safeRelativePath(path)) require(fileExists(path), `${row.id}: missing file ${path}`);
    }
    if (row.status === 'implemented' || row.status === 'verified') {
      require(row.implementation?.length > 0, `${row.id}: status requires implementation paths`);
    }
    if (row.status !== 'verified') continue;
    require(row.evidence?.length > 0, `${row.id}: verified requires evidence`);
    for (const path of row.evidence ?? []) {
      if (!safeRelativePath(path) || !fileExists(path)) continue;
      try {
        const evidence = readEvidence(path);
        require(evidence.item === row.id, `${row.id}: evidence is for a different item`);
        require(evidence.result === 'pass', `${row.id}: evidence did not pass`);
        require(evidence.reference_commit === baseline.commit, `${row.id}: evidence uses another baseline`);
        require(/^[a-f0-9]{40}$/.test(evidence.implementation_commit), `${row.id}: evidence needs a code commit`);
        require(typeof evidence.scenario === 'string' && evidence.scenario.length > 5,
          `${row.id}: evidence needs a concrete scenario`);
        require(typeof evidence.environment === 'string' && evidence.environment.length > 2,
          `${row.id}: evidence needs an execution environment`);
        require(!Number.isNaN(Date.parse(evidence.executed_at)), `${row.id}: evidence needs an execution date`);
        require(evidence.mock_only === false, `${row.id}: mock-only results do not establish parity`);
        require(Array.isArray(evidence.artifacts) && evidence.artifacts.length > 0,
          `${row.id}: evidence needs reviewable artifacts`);
        for (const artifact of evidence.artifacts ?? []) {
          require(safeRelativePath(artifact) && fileExists(artifact), `${row.id}: missing evidence artifact`);
        }
        if (providers.some(provider => provider.id === row.id)) {
          require(evidence.kind === 'live-provider', `${row.id}: provider requires live-provider evidence`);
        }
      } catch (error) {
        errors.push(`${row.id}: unreadable evidence ${path}: ${error.message}`);
      }
    }
  }
  return errors;
}

export function statusOf(catalogue) {
  const items = allItems(catalogue);
  return {
    baseline: catalogue.baseline.commit,
    tracked_items: items.length,
    planned: items.filter(row => row.status === 'planned').length,
    implemented: items.filter(row => row.status === 'implemented').length,
    verified: items.filter(row => row.status === 'verified').length,
    note: 'Inventory status only. Group coverage does not prove behavioral equivalence.',
  };
}

export function releaseBlockers(catalogue, options) {
  const errors = validateCatalogue(catalogue, options);
  const missing = allItems(catalogue).filter(row => row.status !== 'verified');
  if (missing.length) errors.push(`${missing.length} required items lack verified parity evidence`);
  return errors;
}

export function renderFeatures(catalogue) {
  const { features, baseline } = catalogue;
  const lines = [
    '# Feature acceptance groups', '',
    `${features.length} requirement groups. Each group must be expanded into concrete success, failure, concurrency and recovery scenarios before claiming equivalence. The JSON is the editable source; render with \`node scripts/parity.mjs render\`.`, '',
    '| ID | Category | Requirement | Milestone | Status |', '|---|---|---|---|---|',
  ];
  for (const row of features) {
    lines.push(`| ${row.id} | ${row.category} | [${row.title}](#${row.id.toLowerCase()}) | ${row.phase} | ${row.status} |`);
  }
  for (const row of features) {
    lines.push('', `## ${row.id}`, '', `**${row.title}** · ${row.phase} · \`${row.status}\``, '',
      ...row.acceptance.map(value => `- ${value}`), '',
      'Sources: ' + row.specs.map(path => `[${path.split('/').at(-1)}](https://github.com/converge-ai-labs/agent-foundation/blob/${baseline.commit}/${path})`).join(', '));
  }
  return lines.join('\n') + '\n';
}

export function main(command = 'check') {
  if (!['check', 'status', 'release', 'render'].includes(command)) {
    console.error('Usage: node scripts/parity.mjs [check|status|release|render]');
    return 2;
  }
  const catalogue = loadCatalogue();
  const errors = command === 'release' ? releaseBlockers(catalogue) : validateCatalogue(catalogue);
  if (errors.length) {
    console.error(errors.map(error => `- ${error}`).join('\n'));
    return 1;
  }
  if (command === 'render') {
    writeFileSync(resolve(projectRoot, 'docs/parity/features.md'), renderFeatures(catalogue));
    console.log('Rendered feature acceptance groups.');
  } else if (command === 'check') {
    const actual = readFileSync(resolve(projectRoot, 'docs/parity/features.md'), 'utf8');
    if (actual !== renderFeatures(catalogue)) {
      console.error('features.md is stale; run node scripts/parity.mjs render');
      return 1;
    }
    console.log('Inventory is internally consistent. Product parity is not established.');
  } else {
    console.log(JSON.stringify(statusOf(catalogue), null, 2));
  }
  return 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try { process.exitCode = main(process.argv[2]); }
  catch (error) { console.error(`Invalid catalogue: ${error.message}`); process.exitCode = 1; }
}
