# Full rewrite implementation plan

This is a complete-scope sequence, not an MVP scope reduction. Every required item in the [parity catalogue](../parity/README.md) remains part of the release target. Milestones may overlap once interfaces are fixed. Do not defer the hard feasibility questions until after building the UI.

## M0 — Behavioral reference and feasibility

**Deliver:** pinned reference runner, independently authored scenarios, API field-level expectations, SDK contract provenance, and Cloudflare feasibility results.

1. Run the fixed upstream in an isolated reference environment. Keep its checkout and artifacts outside this repository. Record exact versions, optional dependencies, enabled capabilities and runtime limitations.
2. Expand the 85 acceptance groups into concrete scenarios. Record success, error, waiting, cancellation, duplicate, retry and recovery outcomes; never copy the upstream tests.
3. Expand the recorded SDK delta: all four clients pin Service `b174685e81012acccdd639463d90ec7ece7d6064` with 233 operations; the main baseline adds GET/POST run answers for 235 operations. Verify their existing semantics and implement the new answer-collection surface independently. Repository presence does not imply a published client package.
4. Verify Agents 0.26 Fibers: durable accept, duplicate submission, eviction, recovery, cancellation and wake reconciliation. Compare application journal and Fiber status at every cut point.
5. Verify Sandbox 1.0 in a real Cloudflare account: image start, shell/argv, file transactions, terminal, network policy, background lifetime, Worker deployment, snapshot restore and stale process handles.
6. Prototype a Python in-process custom tool, an async callback and Pydantic AI interoperability. Separately test cloud Python extensions through a Sandbox process.
7. Prototype local companion identity and reconnect, then one screenshot and input action on macOS, Windows and Linux. Test failure when desktop permission or session access is unavailable.
8. Test Monty in a supported process and evaluate workerd/WASM only if useful. Demonstrate why its restrictions and state survive the chosen hosting adapter.

**Exit:** documented feasibility for all hard execution boundaries; explicit unresolved gaps. Package metadata or a typecheck alone is insufficient. This milestone has not yet run.

## M1 — Contracts, workspace and storage primitives

**Deliver:** new schema sources, generated Asterweft types, schema migration rules, independent conformance fixtures, local development tools and CI.

- Define stable IDs, timestamps, references, conditional writes, bounded payloads, structured errors and migration compatibility.
- Write API contracts independently from behavior, including all 235 operation obligations. Track every operation's request, response, error, pagination, concurrency and streaming semantics.
- Define all 50 environment RPC obligations and transport framing. Add explicit process/terminal incarnation and byte-offset rules.
- Build tenant-scoped storage keys, immutable artifact references, envelope-encrypted credential records, version checks and outbox persistence.
- Establish original-code provenance, license checks and secret scanning for releases.

**Exit:** schema drift checks and independently authored serialization/contract tests pass; inventories still label missing behavior as missing.

## M2 — Runtime and recovery

**Deliver:** ThreadAgent, portable transition core, Fiber adapter, input queue, runs/attempts, model/tool loop, checkpoints, observation streams and child-run coordination.

- Implement finite Interaction semantics: receipt first, binding to consuming run, terminal/wait outcomes, observer disconnect independent of execution cancellation.
- Add steering, interrupt, answers, resume, fork, lineage and immutable configuration binding.
- Implement invocation identity, bounded retries, uncertain side-effect outcomes and old-attempt fencing.
- Commit facts, checkpoint pointers, usage and outbox in one authoritative boundary; add wake and outbox reconciliation.
- Implement parent/child requests and deduplicated result delivery. Exercise cancel/completion races and nested waits.

**Exit:** fault-injection suite passes at the cut points in [architecture](../architecture/README.md). Compare the same scenarios with the reference. Test actual persistence across process/actor restarts, not only a simulated reducer.

## M3 — Service and administration APIs

**Deliver:** identity, workspace/grants, accounts, API keys, resource CRUD/revisions, API compatibility layer and query projections.

- Implement all route families in the HTTP inventory, including uploads, revisions, invites, account updates, archived resources and conditional changes.
- Maintain authority separation for identity/configuration versus thread state. Test stale projections and credential revocation around dispatch.
- Implement pagination, error envelopes, binary content and SSE reconnection with explicit replay gaps.
- Verify the default bootstrap behavior. Do not quietly add a mandatory payment, SaaS signup or business approval system to the scope.

**Exit:** independently authored contract tests cover each operation and cross-tenant negative cases; no stub endpoint counts as implemented parity.

## M4 — Environments and memory

**Deliver:** Cloudflare environment adapter, environment lifecycle jobs, files/process/output/PTY, file memory, record memory, artifacts and garbage collection.

- Implement required environment method behavior independently; separate resource lifetime from OS process lifetime.
- Preserve snapshots, handles, output offsets, limits and cancellation semantics through reconnects and environment replacement.
- Implement memory conditional writes, rename/delete, revision history, restore, mounts, namespaces, record CRUD and search.
- Keep Vectorize indexing versioned and rebuildable. Test deletion visibility and source-authority filtering during index delay.
- Add allocation and teardown sagas with idempotent provider receipts and orphan reconciliation.

**Exit:** real sandbox and persistence tests, including deploy/restart and resource cleanup. A local Docker test does not prove the Cloudflare container adapter works.

## M5 — All providers, MCP, skills and code execution

**Deliver:** every baseline provider, model authentication, connectors, web data, media capabilities, CodeAct, MCP/MCP Apps transport support, subscriptions and observability.

- Cover 21 model, 11 environment, 10 web, 2 memory and 1 connector definitions. Cloudflare-native providers are additions, not substitutions for missing entries.
- Run native continuation/tool tests across applicable models, including opaque provider fields. Check gateway and direct paths separately.
- Implement Skills sources, version binding, MCP remote transports, local stdio execution, OAuth refresh/revoke and connection diagnostics.
- Add restricted Python CodeAct, optional Code Mode, media acquisition/understanding and native image output persistence.
- Add webhook signatures, retry records, redelivery, trace retrieval and unknown-cost reporting.

**Exit:** per-provider evidence with explicit capabilities and unavailable-account gaps. Mock-only tests do not qualify a live integration as verified.

## M6 — Python, four SDKs, CLI and local devices

**Deliver:** in-process Python harness, Python/TypeScript/Go/Rust remote clients, remote CLI, interactive TUI and three-platform local companion.

- Independently implement the Python runtime's native tool/plugin and lifecycle behavior; test it without importing a13n or connecting to the cloud Service.
- Generate clients from new schema sources; hand-write language-native Interaction, stream, cancellation, error and resource helpers.
- Preserve high-level client behavior: queued submissions, finite waits, observation cleanup, file/memory access and recovery.
- Complete device pairing, authenticated outbound transport, local command receipts, PTY, process trees, filesystem boundaries and desktop adapters.
- Package platform binaries and test permissions, offline recovery, upgrades and failed installation diagnostics.

**Exit:** native tests on macOS, Windows and Linux; four-language client scenarios against the Service; user-code Python embedding tests. A cross-compile alone does not pass a platform.

## M7 — Console and collaborative workbench

**Deliver:** independently designed branded applications with complete behavior coverage.

- Console: resources, credentials/configuration, teams, sessions, runs, usage, traces, composer and configuration transfer.
- Workbench: projects, thread navigation, configuration sources, extensions, editor/files/diffs, terminal, child agents, model accounts, device readiness, host desktop, memory and output comments.
- Add Yjs or equivalent collaborative draft/presence behavior and a server-authoritative submission boundary.
- Implement MCP Apps hosting, safe resource routing, deep links, large-output virtualization and reconnect states.
- Verify keyboard/focus behavior, narrow screens, themes, Chinese/English and reduced motion against tasks rather than screenshots alone.

**Exit:** every required user flow works with real backing resources; simultaneous-client and interrupted-connection scenarios pass. No copied upstream asset or component implementation.

## M8 — Full parity and open-source release

**Deliver:** versioned release, operator documentation, migrations, recovery procedures, downloadable artifacts and full evidence report.

- Re-run all contract, behavior, live-provider, platform and recovery scenarios against the pinned versions.
- Review all required inventory entries and their evidence. Expand any group that hid an uncovered behavior; inventory completeness is not proof of semantic completeness.
- Exercise Cloudflare provisioning, fresh installation, upgrades, backup/restore and environment cleanup on a separate test deployment.
- Verify downloads, checksums, installers, SDK package imports, CLI commands, API readiness and actual agent tasks.
- Publish release notes that distinguish implemented, local tested, CI tested, deployed and live verified results. Do not call an alpha build full parity.

**Exit:** all required evidence is available and reviewed. `npm run parity:release` is a necessary bookkeeping gate, not the sole release authority.

## Critical dependencies and re-estimation

Cloudflare Sandbox availability and limits, Windows/Linux test machines, native model/OAuth credentials, SDK baseline compatibility, and Python extension semantics affect the critical path. Record real missing access when encountered; do not mark a provider verified without it.

A provisional complete-program planning range is 4–6 experienced engineers over 6–12 months, with substantial uncertainty. Re-estimate after M0 and M2 from measured scope and failure cases. This is not a quote, staffing commitment, or promise that any current agent session will finish the entire platform.
