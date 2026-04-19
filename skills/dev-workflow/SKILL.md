---
name: dev-workflow
description: Branches, prepack, CI, PR and release workflow for contentstack-cli-tsgen.
---

# Development workflow – contentstack-cli-tsgen

## When to use

- Running the canonical build before pack or publish
- Understanding which branches run CI and how releases work

## Branches and CI

- **Node.js workflow** (`.github/workflows/node.js.yml`) runs on **push** and **pull_request** for **`master`**, **`development`**, and **`staging`**.
- **Release** (`.github/workflows/release.yml`) runs on **push** to **`master`** (Node **22.x**), publishes npm artifact from **`lib`**, creates GitHub release.

Other Contentstack repos may use **`main`** instead of **`master`**; align with team branch protection when contributing.

## Build

- **`npm run prepack`**: removes **`lib/`**, runs **`tsc -b`**, **`oclif manifest`**, **`oclif readme`**. This is the canonical compile before pack/publish.
- CI runs **`prepack`** after global **`csdx`** setup and **`plugins:link`** where applicable.

## Tests and lint

- **`npm test`**: Jest with `--testPathPattern=tests`.
- **`posttest`** (after `npm test`): ESLint with `.eslintrc.js` and `--fix`.

## Pull requests

- Run **`npm run prepack`** and **`npm test`** (which runs **`posttest`**) when changing source or tests.

## Releases

- Version in **`package.json`** drives publishing; release workflow builds with **`prepack`** from **`master`**.
