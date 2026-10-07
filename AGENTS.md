# Asterweft implementation rules

The project owner requires an independent, complete functional rewrite of the pinned Agent Foundation baseline, using Cloudflare for cloud infrastructure and a newly written local companion. This is the accepted deployment scope.

1. Do not fork, vendor, copy, mechanically translate, or rename upstream implementation, tests, generated contracts, assets, or binaries. Reusing separately licensed general-purpose dependencies is allowed. Keep public interface facts and source links in the research inventory.
2. Do not replace the final scope with an MVP. Phases are execution order. The parity catalogue remains required in full.
3. Preserve Python in-process embedding, local and remote environment behavior, desktop support, all provider integrations, the two distinct web surfaces, TUI, SDKs, and CLI. A remote Python API client is not the embedded Python runtime.
4. Pin Cloudflare package versions, verify current APIs from installed declarations and official documentation, and record beta/private-beta limitations. Sandbox 1.0 is not the old Sandbox class API. Experimental adapters cannot silently become core persistence formats.
5. Each mutable aggregate has one authoritative owner. Cross-DO, D1, R2, Queues, and external side effects are not one transaction. Specify fencing, outbox reconciliation, and uncertain external outcomes.
6. No secret-bearing continuation state, cross-tenant storage keys, unscoped device commands, or unauthenticated production Agent RPC routes. A local command journal must distinguish replayable reads, idempotent writes, and unknown outcomes.
7. Update parity status only with actual implementation paths and reviewable evidence. A passing typecheck, mocked test, browser screenshot, deployment receipt, and live provider test prove different things.
8. Keep the reference baseline fixed. New upstream commits require a recorded delta and updated requirements, not silent target movement.
9. Keep private credentials, downloaded reference source, machine paths, and local recordings out of the public repository.
10. Use the owner's existing authorization. Do not create extra business approval workflows. Do not delegate to agents unless explicitly requested by the owner or a higher-priority instruction.

Before changes, inspect `docs/research/delivery-status.md`, `docs/parity/README.md`, and the relevant architecture decision. After changes, run meaningful checks for the affected behavior and update the delivery record without broadening its claims.
