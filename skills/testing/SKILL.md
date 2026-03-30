---
name: testing
description: How to run tests and use env for contentstack-cli-tsgen (Jest, ESLint posttest, integration).
---

# Testing skill (`contentstack-cli-tsgen`)

## Commands

| Command | What it does |
| --- | --- |
| `npm test` | Jest with `--testPathPattern=tests`; then **`posttest`** runs ESLint ([package.json](../../package.json)) |
| `npm run test:integration` | Jest only for `tests/integration` |
| `npm run prepack` | Build `lib/` (required before local `csdx plugins:link` style workflows) |

## Config

- [`jest.config.js`](../../jest.config.js): **ts-jest**, **`testEnvironment: node`**.

## Integration tests

- **[tests/integration/tsgen.integration.test.ts](../../tests/integration/tsgen.integration.test.ts)** spawns **`csdx tsgen`** with **`TOKEN_ALIAS`**.
- Loads **`.env`** from package root via **`dotenv`** (`path` relative to test file). **`TOKEN_ALIAS`** must be defined or the suite throws at load time.

## CI

- [.github/workflows/node.js.yml](../../.github/workflows/node.js.yml): `npm ci`, optional `npm run build --if-present`, global **`@contentstack/cli`**, **`csdx config:set:region`**, **`csdx auth:tokens:add`** (delivery), **`npm run prepack`**, **`csdx plugins:link`**, **`npm test`** with **`TOKEN_ALIAS`** secret.
