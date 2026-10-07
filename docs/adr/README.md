# Architecture decisions

The deployment scope is owner-selected. These implementation decisions are **proposed**, pending the listed validation. They are not claims that any integration already works.

| ID | Proposed decision | Reason | Validation before acceptance |
|---|---|---|---|
| 001 | Own the state machine on Agents SDK; keep Think behind an adapter | full parity requires precise input/run/attempt and waiting semantics | queued input, fork, active steering, recovery and cancellation tests against both engines |
| 002 | One authoritative ThreadAgent; D1 holds catalog and run projections | avoid translating PostgreSQL leasing into two conflicting SQLite owners | delayed projections, replica lag, revoke races, old-attempt fencing |
| 003 | Own the external-call journal and transactional outbox | no transaction covers a model, tool, R2, Queue and DO | failures on both sides of every external call and durable commit |
| 004 | Target Sandbox 1.0 native container APIs | current package no longer has the old SDK lifecycle abstraction | argv/shell, file commit, terminal, deploy reconnect and restore in an actual CF account |
| 005 | Ship an independent local companion | Cloudflare Linux and headless browsing cannot operate the user's native desktop | signed identity, dropped connection, duplicate command and desktop test on all three OS families |
| 006 | Preserve a real Python in-process runtime | remote client SDK cannot reproduce native Python tools and callbacks | Python tool/plugin interoperability without a13n dependencies |
| 007 | Default memory uses public Cloudflare storage; Agent Memory optional | private-beta eligibility must not block installation | CRUD, CAS, restore, retrieval, delete propagation and index rebuild |
| 008 | Preserve native provider protocols and all baseline integrations | a single OpenAI-compatible gateway route loses some provider behavior | live continuation, cancellation, OAuth, media and usage tests per supported capability |
| 009 | Keep Python CodeAct and TypeScript Code Mode distinct | different languages and execution boundaries have different observable semantics | tool-call pause/resume, state, limits and replay behavior for each engine |
| 010 | Independent contracts, original tests, fixed reference baseline | a reproducible compatibility target without copying implementation | schema review, package scan, baseline delta process and external behavior evidence |
| 011 | Independent durable ChildRun authority; optional co-located Facets helpers | Facets' shared alarm and transitive deletion do not by themselves reproduce run history and cancellation | parent archive, child cancellation, orphan recovery, retained results and runtime upgrade tests |

## Alternatives considered

**Rebrand the upstream and replace PostgreSQL with D1.** Rejected by the independent-rewrite requirement. D1 is not a drop-in PostgreSQL runtime; the original scheduling and transaction assumptions would also need redesign.

**Extend Think and let its session store define every public concept.** Attractive for a chat application, but it makes an evolving harness's storage and admission semantics the product contract. Keep it as a tested integration until the complete baseline can be expressed without loss.

**One Workflow per run, with the complete loop in a retried step.** This mixes orchestration retry with model/tool effect retry. Workflows instead own separate resource and batch lifecycles; an Agent owns each conversation run.

**Pure Workers with no execution process.** Cannot meet native shell, arbitrary required Python dependencies, local filesystem, desktop and in-process embedding requirements. A Cloudflare Sandbox and the authorized local companion cover different execution locations.

**A single shared D1 database for every message, attachment and live update.** Simple initially but creates size, query and transaction pressure. Keep authority close to each thread and move large immutable content to R2. Begin with a manageable number of catalog shards and document how they are provisioned.

**Agent Memory as the only memory backend.** Excluded from the required deployment path while it needs private-beta access. It also does not collapse versioned file memory and semantic record memory into one equivalent API.

**Only support Cloudflare's built-in model and environment.** Conflicts with full functionality. Default infrastructure can be Cloudflare while provider integrations remain available as optional user choices.

**One shared Rust/WASM execution core for Workers, Python and every desktop target.** Potentially reduces duplicate semantics, but introduces embedding, callback, language-runtime and toolchain complexity before compatibility has been measured. Prefer an explicit portable contract and two independently authored runtime implementations initially; reconsider shared internals only with measured benefit and no lost behavior.

## Acceptance process

Record the relevant experiment, versions, environment, failure cases and unresolved differences next to each decision before changing its status to accepted. Prototype success is necessary evidence for an API choice, not proof of complete functional parity.
