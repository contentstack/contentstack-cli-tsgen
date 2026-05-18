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

### Command shape (`tsgen`)

- Extends **`Command`** from **`@contentstack/cli-command`** ([`src/commands/tsgen.ts`](../../src/commands/tsgen.ts)).
- **Flags** include **`token-alias`** (`-a`, required), **`output`** (`-o`), **`prefix`**, **`doc`**, **`branch`**, **`include-system-fields`**, **`include-editable-tags`**, **`include-referenced-entry`**, **`api-type`** (`rest` \| `graphql`), **`namespace`** (GraphQL).
- Resolve token via **`this.getToken(flags["token-alias"])`**; warn if **`token.type !== "delivery"`** (management token can break Delivery/GraphQL flows).
- Build **`StackConnectionConfig`**: **`apiKey`**, **`token`**, **`region`**, **`environment`**, **`branch`**, **`host`** as in existing code.
- **`api-type === "graphql"`** → **`graphqlTS(...)`** with delivery token; **REST** → **`generateTS`** with **`tokenType: "delivery"`**; write output with **`fs.writeFileSync`** to the resolved path.
- Use **`printFormattedError`** from [`src/lib/helper.ts`](../../src/lib/helper.ts) for consistent CLI messaging.
