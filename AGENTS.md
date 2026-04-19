# contentstack-cli-tsgen – Agent guide

**Universal entry point** for contributors and AI agents. Detailed conventions live in **`skills/*/SKILL.md`**.

## What this repo is

| Field | Detail |
| --- | --- |
| **Name:** | [Contentstack-Solutions/contentstack-cli-tsgen](https://github.com/Contentstack-Solutions/contentstack-cli-tsgen) |
| **Purpose:** | OCLIF plugin that adds **`csdx tsgen`** to generate TypeScript typings from a stack. Generation is delegated to **`@contentstack/types-generator`** (`generateTS` / `graphqlTS`); this repo owns flags, auth alias, file output, and CLI error formatting. |
| **Out of scope (if any):** | Core type-generation logic belongs in **`@contentstack/types-generator`** ([npm](https://www.npmjs.com/package/@contentstack/types-generator)), not reimplemented here. |

## Tech stack (at a glance)

| Area | Details |
| --- | --- |
| **Language** | TypeScript **5.9** (`strict` in [tsconfig.json](tsconfig.json)) |
| **Build** | **`tsc -b`** → **`lib/`**; **`npm run prepack`** runs compile, **`oclif manifest`**, **`oclif readme`** |
| **Tests** | **Jest** + **ts-jest** ([jest.config.js](jest.config.js)); integration tests under `tests/integration/` |
| **Lint / coverage** | ESLint in **`posttest`** after **`npm test`** ([package.json](package.json)) |
| **Other** | OCLIF, Node (CI **18.x** / **20.x**; release **22.x**) |

**Main dependencies:** `@contentstack/cli-command`, `@contentstack/cli-utilities`, `@contentstack/types-generator`, `dotenv`.

## Commands (quick reference)

| Command type | Command |
| --- | --- |
| **Build** | `npm run prepack` (canonical compile; no separate `build` script) |
| **Test** | `npm test` (then **`posttest`** → ESLint) |
| **Lint** | via **`posttest`** after tests |

**Integration tests:** `npm run test:integration` — Jest for `tests/integration` only.

CI: [.github/workflows/node.js.yml](.github/workflows/node.js.yml); release: [.github/workflows/release.yml](.github/workflows/release.yml); SCA: [.github/workflows/sca-scan.yml](.github/workflows/sca-scan.yml).

## Credentials and integration tests

Integration tests spawn **`csdx tsgen`** and require a **delivery token alias**. Set **`TOKEN_ALIAS`** (e.g. **`.env`** at package root; see [tests/integration/tsgen.integration.test.ts](tests/integration/tsgen.integration.test.ts)). CI uses secrets such as **`REGION`**, **`TOKEN_ALIAS`**, **`APIKEY`**, **`DELIVERYKEY`**, **`ENVIRONMENT`**.

## Where the documentation lives: skills

| Skill | Path | What it covers |
| --- | --- | --- |
| Development workflow | [skills/dev-workflow/SKILL.md](skills/dev-workflow/SKILL.md) | Branches, CI, prepack, PRs, releases |
| TypeScript CLI tsgen | [skills/typescript-cli-tsgen/SKILL.md](skills/typescript-cli-tsgen/SKILL.md) | OCLIF command, flags, delegation to the library |
| Testing | [skills/testing/SKILL.md](skills/testing/SKILL.md) | Jest, ESLint posttest, integration env |
| Code review | [skills/code-review/SKILL.md](skills/code-review/SKILL.md) | PR checklist, terminology, semver |

An index with “when to use” hints is in [skills/README.md](skills/README.md).

## Using Cursor (optional)

If you use **Cursor**, [.cursor/rules/README.md](.cursor/rules/README.md) only points to **`AGENTS.md`**—same docs as everyone else.
