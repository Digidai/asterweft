import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadCatalogue, validateCatalogue, releaseBlockers, statusOf } from '../scripts/parity.mjs';

const fresh = () => structuredClone(loadCatalogue());

test('current scope is consistent but cannot claim a parity release', () => {
  const scope = fresh();
  assert.deepEqual(validateCatalogue(scope), []);
  assert.equal(statusOf(scope).verified, 0);
  assert.ok(releaseBlockers(scope).some(message => message.includes('required items')));
});

test('removing an API operation fails the pinned baseline count', () => {
  const scope = fresh();
  scope.http.pop();
  assert.ok(validateCatalogue(scope).some(message => message.startsWith('http_operations:')));
});

test('duplicate interface keys fail even when item count is unchanged', () => {
  const scope = fresh();
  scope.http[1].path = scope.http[0].path;
  scope.http[1].method = scope.http[0].method;
  assert.ok(validateCatalogue(scope).includes('duplicate HTTP operation'));
});

test('a difficult feature cannot be silently excluded from full scope', () => {
  const scope = fresh();
  scope.features.find(row => row.id === 'H14').required = false;
  assert.ok(validateCatalogue(scope).some(message => message.includes('cannot be silently made optional')));
});

test('unmapped specifications and broken requirement references fail', () => {
  const scope = fresh();
  scope.specifications[0].requirements = [];
  scope.rpc[0].requirement = 'missing';
  const errors = validateCatalogue(scope);
  assert.ok(errors.some(message => message.includes('mapping is stale')));
  assert.ok(errors.some(message => message.includes('unknown requirement')));
});

test('verified is rejected when there is no implementation or evidence', () => {
  const scope = fresh();
  scope.features[0].status = 'verified';
  const errors = validateCatalogue(scope);
  assert.ok(errors.some(message => message.includes('requires implementation paths')));
  assert.ok(errors.some(message => message.includes('verified requires evidence')));
});

test('evidence cannot escape the repository', () => {
  const scope = fresh();
  scope.features[0].evidence = ['../../private.json'];
  assert.ok(validateCatalogue(scope).some(message => message.includes('unsafe evidence')));
});

test('mocked, mismatched or non-live provider evidence cannot pass', () => {
  const scope = fresh();
  const row = scope.providers[0];
  row.status = 'verified';
  row.implementation = ['packages/providers/openai.ts'];
  row.evidence = ['conformance/provider.json'];
  const errors = validateCatalogue(scope, {
    fileExists: () => true,
    readEvidence: () => ({
      item: 'wrong', result: 'pass', reference_commit: '0'.repeat(40),
      implementation_commit: '1'.repeat(40), scenario: 'Text followed by tool continuation',
      environment: 'isolated test environment', executed_at: '2026-10-07T00:00:00Z',
      mock_only: true, kind: 'unit', artifacts: ['conformance/result.json'],
    }),
  });
  for (const text of ['different item', 'another baseline', 'mock-only', 'live-provider']) {
    assert.ok(errors.some(message => message.includes(text)), text);
  }
});

test('structured evidence is accepted by bookkeeping without asserting its scientific validity', () => {
  const scope = fresh();
  const row = scope.features[0];
  row.status = 'verified';
  row.implementation = ['packages/runtime/build.ts'];
  row.evidence = ['conformance/build.json'];
  assert.deepEqual(validateCatalogue(scope, {
    fileExists: () => true,
    readEvidence: () => ({
      item: row.id, result: 'pass', reference_commit: scope.baseline.commit,
      implementation_commit: '1'.repeat(40), scenario: 'Immutable configuration across revision change',
      environment: 'reference and independent runner', executed_at: '2026-10-07T00:00:00Z',
      mock_only: false, kind: 'contract', artifacts: ['conformance/result.json'],
    }),
  }), []);
  assert.ok(releaseBlockers(scope).length > 0);
});
