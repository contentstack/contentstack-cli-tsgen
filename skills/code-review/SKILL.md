---
name: code-review
description: PR review checklist for contentstack-cli-tsgen (CLI, errors, Delivery/GraphQL, types-generator dependency).
---

# Code review skill (`contentstack-cli-tsgen`)

Aligned with [`.cursor/rules/code-review.mdc`](../../.cursor/rules/code-review.mdc).

## CLI and docs

- Help text, **`static examples`**, and README/oclif-generated docs stay in sync when flags or behavior change.
- Short command name **`tsgen`** / **`TSGEN`** comes from **`csdxConfig`** in [package.json](../../package.json).

## Product language

- Prefer **Delivery** token flows; **GraphQL** requires delivery token in code paths—reviewers should catch **CMA**-centric wording that misleads users.

## Errors

- **`printFormattedError`** in [`src/lib/helper.ts`](../../src/lib/helper.ts) maps **`error_code`** to user-facing messages; extend switches carefully for backward compatibility.

## Dependency on the library

- Business logic for **`generateTS`** / **`graphqlTS`** belongs in **`@contentstack/types-generator`** ([npm](https://www.npmjs.com/package/@contentstack/types-generator), [GitHub](https://github.com/contentstack/types-generator)). CLI changes should orchestrate and format, not reimplement generation.

## Tests and CI

- Integration tests depend on **`csdx`** and **`TOKEN_ALIAS`**; document env needs when adding cases.

## Optional severity

- **Blocker:** Wrong token type handling, broken `csdx` contract, security issues.
- **Major:** Missing integration coverage for new flags, unclear errors.
- **Minor:** Copy, non-breaking refactors.
