# Contributing

Asterweft is currently specifying a complete independent implementation. Start with the [parity contract](docs/parity/README.md) and [architecture](docs/architecture/README.md).

For a functional change, identify the relevant requirement IDs, explain observable behavior, add independently authored tests, and record the evidence level. Keep failure, cancellation, recovery, and tenant boundaries in the same review as the happy path. New integrations must preserve native provider semantics; an HTTP 200 response alone is not an integration test.

Do not submit upstream Agent Foundation implementation, copied tests, generated schema bundles, or assets. Contributions are licensed under Apache-2.0. List any separately licensed dependencies or incorporated material in the change description.

Use small reviewable commits. Run `npm test` for inventory changes. Product checks will be added with their implementations. The release gate is expected to fail during development; never weaken it just to obtain a green badge.
