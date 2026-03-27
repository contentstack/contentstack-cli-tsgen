---
name: typescript-cli-tsgen
description: Mental model for the contentstack-cli-tsgen OCLIF plugin and tsgen command.
---

# TypeScript CLI tsgen skill

## Role of this repo

- **Plugin** for **`csdx`**: implements **`TypeScriptCodeGeneratorCommand`** in [`src/commands/tsgen.ts`](../../src/commands/tsgen.ts).
- **Generation** is delegated to **`@contentstack/types-generator`** ([npm](https://www.npmjs.com/package/@contentstack/types-generator), [GitHub](https://github.com/contentstack/types-generator))—version **^3.9.3** in [package.json](../../package.json). Do not assume a local clone; use npm and published source only.

## Change here vs change in the library

| Concern | Where |
| --- | --- |
| New flags, output path, `csdx` UX, **`printFormattedError`** | This repo (`src/commands/`, `src/lib/`) |
| Schema mapping, Delivery SDK calls, GraphQL introspection | **`@contentstack/types-generator`** |

## Helpers

- [`src/lib/helper.ts`](../../src/lib/helper.ts): **`sanitizePath`**, **`printFormattedError`** (`FormattedError`, **`error_code`** switch).
- [`src/types/index.ts`](../../src/types/index.ts): **`StackConnectionConfig`** and related CLI types.

## OCLIF

- Commands compile to **`lib/commands`**; **`prepack`** refreshes **`oclif.manifest.json`** and README.
