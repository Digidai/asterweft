# Full-parity contract

The owner requires a complete independent rewrite of the fixed Agent Foundation baseline. Cloudflare cloud infrastructure and a new local companion are both in scope. This catalogue records obligations; it does not claim an implemented product.

## Inventory

| File | Contents |
|---|---|
| [baseline.json](baseline.json) | fixed repository SHA, observation date, expected counts and source artifact hashes |
| [features.md](features.md) / [features.json](features.json) | 85 independently written acceptance groups |
| [specifications.json](specifications.json) | all 87 specification documents mapped to requirement groups |
| [http-operations.json](http-operations.json) | 235 HTTP method/path obligations over 160 paths |
| [environment-methods.json](environment-methods.json) | 50 RPC methods and declared replay classes |
| [providers.json](providers.json) | 45 provider obligations: 21 model, 11 environment, 10 web, 2 memory, 1 connector |
| [sdk-baselines.json](sdk-baselines.json) | separate pinned source revisions for four SDK repositories |
| [SDK contract comparison](sdk-contract-delta.json) | relationship between client-pinned Service inputs and the main reference |

The 85 feature groups plus HTTP, RPC, and provider entries produce **415 tracked items**. This is an accounting structure, not a claim that exactly 415 tests would establish equivalence. Complex groups require multiple scenarios, and any discovered missing behavior must expand the catalogue.

Some index/overview specifications map to shared architectural requirements. Field-level API semantics, timing, errors and races still need independently authored scenario descriptions and execution evidence. An operation's presence in this list proves only that it has been counted.

## What is required

1. Equivalent observable capabilities, including success, error, waiting, cancellation, recovery, permission and resource-lifecycle behavior.
2. Separately implemented compatibility surfaces for HTTP, observation streams, environment RPC and all four remote SDKs. New branding is allowed; copied generated contracts are not.
3. A real in-process Python harness, complete local/remote environment choices, three OS desktop targets, Console, collaborative Workbench and TUI.
4. Independent test authorship. Reference runs use a separate pinned checkout as a behavioral oracle; this repository does not include it or import it into the product.
5. Explicit treatment of unsupported reference behavior and provider capability differences. Never pass a scenario by silently omitting the behavior from the new implementation.

New Cloudflare abilities are additions. A working Workers AI model, Browser Run integration or sandbox demo does not fulfill all baseline model, web, environment or desktop obligations.

The four reference clients pin an older Service contract with 233 operations. The main baseline adds GET/POST `/api/v1/runs/{run_id}/answers` and three related schema names. The stream schema is byte-identical in both references. Keep those two compatibility targets explicit; extend the newly written clients for the main baseline without pretending the older reference clients already contain those operations.

## Status and evidence

- `planned`: a requirement has been recorded. No implementation claim.
- `implemented`: real implementation paths are present. Behavioral equivalence is not yet established.
- `verified`: implementation plus reviewable evidence for the pinned baseline is recorded. Provider entries need live-provider evidence.

All current entries are `planned`. Do not convert a required item into an optional item to obtain a release. A scope change needs an explicit owner decision and a new baseline; it cannot be hidden in a test skip.

An evidence JSON record must identify `item`, `scenario`, `reference_commit`, `implementation_commit`, `executed_at`, `environment`, `result`, `kind`, `mock_only`, and relative `artifacts` paths. Sanitize credentials and personal data before publishing evidence. Store large or sensitive raw recordings outside the public repository and publish an appropriately reviewable, scoped result instead.

The validator checks that evidence is present and structurally consistent. It cannot determine that a recording is honest or that a test covers all semantics. Review of scenario completeness and actual results is still required.

## Commands

```sh
npm test
npm run parity:status
node scripts/parity.mjs render
npm run parity:release
```

The first command validates bookkeeping and the validator's own negative cases. It does not run an agent. The release command is expected to fail while any required item lacks parity evidence. CI intentionally runs specification checks; a green specification workflow must never be presented as a successful product compatibility suite.

## Reference updates

Keep the existing SHA until an explicit delta review updates it. Compare interface additions/removals, changed semantics, SDK contract versions, resource behavior and provider definitions. Record source hashes, new scenarios and migration consequences. Revalidate affected implementations rather than replacing the baseline with whatever `main` happens to contain.
