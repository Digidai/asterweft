# Asterweft

**An independently implemented agent platform for Cloudflare and your own computer.**

[中文](README.zh-CN.md) · [Research](docs/research/cloudflare-rewrite.zh-CN.md) · [Architecture](docs/architecture/README.md) · [Parity contract](docs/parity/README.md) · [Roadmap](docs/plans/full-rewrite.md)

Asterweft's goal is full functional parity with a pinned version of [Agent Foundation](https://github.com/converge-ai-labs/agent-foundation), using a new implementation and identity. Its cloud control plane will run on Cloudflare. A separately implemented local companion will provide local files, processes, terminals, model connections, and desktop interaction.

**Status: research and specification. The agent platform is not implemented or released yet.** This repository publishes the architecture, a traceable scope inventory, and executable checks for that inventory. Passing those checks does not mean that product features work. See the [delivery record](docs/research/delivery-status.md) for exactly what has been verified.

## Scope

- An embeddable runtime, including a real in-process Python execution surface.
- Durable threads, runs, attempts, queued input, steering, checkpoints, recovery, and child agents.
- Models, tools, MCP, skills, files, semantic memory, browser access, and execution environments.
- A service console, collaborative workbench, interactive terminal UI, HTTP API, four language clients, and remote CLI.
- A local companion for macOS, Windows, and Linux, alongside Cloudflare-hosted Linux execution.

The initial baseline contains **87 specification documents, 235 HTTP operations across 160 paths, 50 environment RPC methods, 21 model providers, 11 environment providers, 10 web providers, 2 record-memory providers, and 1 connector provider**. These are inventory counts, not implemented-feature counts. Independent SDK repositories have their own pinned baselines.

Milestones sequence the work; they do not reduce the final scope. Cloudflare integrations add new deployment choices without removing the original integration requirements.

## Proposed platform

Cloudflare Workers and Agents SDK provide request routing and durable actors. Agent Fibers support execution recovery. Durable Object SQLite stores thread authority; D1 stores identity, configuration, and query projections; R2 stores immutable artifacts and long-lived checkpoints. Queues and Workflows handle delivery and independent lifecycle jobs. Sandbox SDK 1.0 and Containers provide Linux execution. Browser Run handles browser workloads. AI Gateway and Workers AI are supported model paths.

Think, Code Mode, AI Search, and Agent Memory have explicit roles and compatibility boundaries in the architecture. In particular, private-beta Agent Memory is not required for the default installation.

## Inspect the specification

Requires Node.js 22 or newer. No package installation, credentials, or cloud account is needed for these checks.

```sh
npm test
npm run parity:status
```

`npm run parity:release` is a deliberately strict release gate. It fails until every required inventory item has reviewable implementation and verification evidence. There is no working application installation command yet.

## Original implementation

This is not a fork. No Agent Foundation runtime, test suite, generated schema bundle, frontend asset, or Envd binary is included. Public interfaces and observed behavior inform the requirements; new code and tests must be independently authored. Public interface identifiers in the parity inventory are interoperability facts, not a vendored implementation.

The upstream source was inspected during research. We therefore describe this as an **independent rewrite**, not a formal clean-room process. See [provenance](docs/research/provenance.md).

Apache-2.0. Maintained by [Digidai](https://github.com/Digidai). See [contributing](CONTRIBUTING.md).
