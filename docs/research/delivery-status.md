# Delivery status

Observed on 2026-10-07. This file distinguishes research and source control from runtime delivery.

| Layer | Current result | Evidence or boundary |
|---|---|---|
| Owner scope | fixed | full independent rewrite; Cloudflare cloud plus new local companion |
| Brand | Asterweft | GitHub name and npm queries found no exact-name match before repository creation |
| Reference audit | recorded | 87 specs; 235 HTTP operations; 50 environment methods; 45 providers; four SDK source pins |
| Cloudflare research | recorded | 53 successfully retrieved official pages plus public package metadata |
| Architecture | proposed | ownership, recovery, local-device, Python, provider and memory decisions documented |
| Acceptance groups | recorded | 85 groups linked to the specification inventory |
| Inventory validator | locally tested | 9 Node.js tests passed; inventory consistency passed |
| Product parity release gate | expected failure | 415 required tracked items remain unverified |
| Reference runtime execution | not run | source analysis is not a behavioral comparison |
| Product runtime implementation | not started | no Agent service, native client, frontend application or SDK implementation |
| Cloudflare deployment | not performed | no account resources provisioned and no live scenario verified |
| Model/provider integration tests | not run | registry entries and documentation are not live provider results |
| Desktop platform tests | not run | no macOS, Windows or Linux native implementation verified |
| Public Git repository | pending publication | update after remote creation and push are confirmed |
| GitHub CI | not observed yet | specification workflow configured; no CI claim until a run is observed |
| npm/PyPI/crates/Go release | not published | root package is private and version 0.0.0 |

The local validator checks inventory integrity and evidence requirements. Its tests deliberately exercise deletion, duplicate interfaces, dropped scope, missing evidence and mocked provider results. They do not execute or validate the target product.

The next engineering milestone is the reference-behavior and Cloudflare feasibility work in [M0](../plans/full-rewrite.md#m0--behavioral-reference-and-feasibility). Full functionality remains required throughout subsequent milestones.
