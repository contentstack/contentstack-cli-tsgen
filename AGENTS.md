# `contentstack-cli-tsgen`

**Purpose:** Contentstack CLI (**OCLIF**) plugin that adds **`csdx tsgen`** to generate TypeScript typings from a stack. Generation is delegated to the **`@contentstack/types-generator`** npm package (`generateTS` / `graphqlTS`); this repo owns the command surface (flags, auth alias, file output, CLI error formatting).

- **Repository:** [github.com/Contentstack-Solutions/contentstack-cli-tsgen](https://github.com/Contentstack-Solutions/contentstack-cli-tsgen)
- **Homepage:** [https://github.com/Contentstack-Solutions/contentstack-cli-tsgen](https://github.com/Contentstack-Solutions/contentstack-cli-tsgen)

**Library dependency (separate repo):** [`@contentstack/types-generator`](https://www.npmjs.com/package/@contentstack/types-generator) (see version in [package.json](package.json)). Source for the generator itself: [github.com/contentstack/types-generator](https://github.com/contentstack/types-generator). Do not assume a local sibling folder; treat it as an npm dependency only.

## Tech stack

| Area | Details |
| --- | --- |
| Language | TypeScript **5.9** (`strict` in [tsconfig.json](tsconfig.json)) |
| Runtime | Node (CI **18.x** / **20.x**; release **22.x**) |
| Build | **`tsc -b`** → **`lib/`**; **`npm run prepack`** runs `tsc -b`, **`oclif manifest`**, **`oclif readme`** |
| CLI | **OCLIF** — commands compiled to **`lib/commands`** (see `oclif.commands` in [package.json](package.json)) |
| Tests | **Jest** + **ts-jest** ([jest.config.js](jest.config.js)) |
| Lint | **ESLint** runs in **`posttest`** after tests ([package.json](package.json) scripts) |

**Main dependencies:** `@contentstack/cli-command`, `@contentstack/cli-utilities`, `@contentstack/types-generator`, `dotenv`.

## Source layout

- **Commands:** [src/commands/](src/commands/) (e.g. `tsgen.ts`)
- **Helpers / errors:** [src/lib/](src/lib/)
- **Types:** [src/types/](src/types/)
- **Build output:** **`lib/`** (not committed as source of truth; produced by `prepack`)

## Common commands

| Command | Purpose |
| --- | --- |
| `npm run prepack` | Clean `lib/`, compile TypeScript, generate OCLIF manifest and README |
| `npm test` | Jest (`--testPathPattern=tests`); then **`posttest`** runs ESLint with fix |
| `npm run test:integration` | Jest for `tests/integration` only |

There is no dedicated `build` script; **`prepack`** is the canonical compile path. CI may run `npm run build --if-present` (no-op here if no `build` script).

## Credentials and integration tests

Integration tests spawn **`csdx tsgen`** and require a configured **delivery token alias**. Set **`TOKEN_ALIAS`** (e.g. in **`.env`** at the package root; see [tests/integration/tsgen.integration.test.ts](tests/integration/tsgen.integration.test.ts)).

CI uses GitHub secrets such as **`REGION`**, **`TOKEN_ALIAS`**, **`APIKEY`**, **`DELIVERYKEY`**, **`ENVIRONMENT`** (see [.github/workflows/node.js.yml](.github/workflows/node.js.yml)).

---

## AI guidance index

- [Cursor rules (overview)](.cursor/rules/README.md)
- [Skills index](skills/README.md)
