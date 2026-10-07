# Implementation provenance

Asterweft is an independently authored project maintained by Digidai. The project aims to reproduce the observable functionality of a fixed Agent Foundation version on a different infrastructure stack.

## What was inspected

- Public Agent Foundation source, documentation, specifications, provider registries and generated interface descriptions at the [fixed baseline](../parity/baseline.json).
- Public SDK documentation and contract provenance at the [four pinned SDK revisions](../parity/sdk-baselines.json).
- Official Cloudflare documentation and public package metadata listed in [sources](sources.md).

Because the reference source was inspected, this is not described as a formal clean-room process. The commitment is independent implementation and independent test authorship.

## What this repository contains

- Newly written research, architecture, requirements and implementation planning.
- Public interface identifiers, method/path pairs, provider identifiers, source links, counts and hashes used as interoperability facts.
- Original catalogue validation and test code.
- The standard Apache-2.0 license text, obtained from the Apache Software Foundation.

It does not contain the reference implementation, copied tests, generated OpenAPI/schema bundles, proprietary assets, upstream binary releases, reference-source archives, private credentials or user computer data.

## Rules for implementation

Describe the required behavior before writing an adapter. Author schemas, code and fixtures independently. Do not mechanically translate Python to TypeScript or Rust. New generated clients must be generated from Asterweft's independently maintained schema sources.

General-purpose dependencies such as Cloudflare SDKs, Pydantic AI, Monty, React, Yjs or a language's HTTP libraries can be selected under their own licenses. Using such dependencies does not authorize copying Agent Foundation wrappers or its test cases. Record actual installed versions, licenses and any required notices when they become dependencies; this research repository has no runtime dependency installation.

The reference project's Apache-2.0 license does not change the owner's stricter instruction to rewrite. Asterweft's new branding and original files do not claim authorship of the reference project's inventions, history or community. Attribution links explain the functional target without implying endorsement.

## Publication boundaries

Publishing this repository releases specifications and catalogue tooling. It does not publish a working Cloudflare agent service, SDK package, desktop binary, hosted demo or 1.0-compatible distribution. Future release notes must state which of those artifacts actually exist and how they were verified.
