# Cursor rules for `contentstack-cli-tsgen`

This folder contains project-specific rules. Each `.mdc` file uses YAML frontmatter (`description`, `globs`, `alwaysApply`).

| Rule file | `alwaysApply` | Globs | When it applies | Related skill |
| --- | --- | --- | --- | --- |
| [dev-workflow.mdc](dev-workflow.mdc) | No | `package.json`, `package-lock.json`, `.github/workflows/**/*`, `tsconfig.json`, `jest.config.js`, `.eslintrc.js`, `AGENTS.md` | Workflow, CI, release, package scripts | [testing](../../skills/testing/SKILL.md), [code-review](../../skills/code-review/SKILL.md) |
| [typescript.mdc](typescript.mdc) | No | `src/**/*.ts`, `tests/**/*.ts` | TypeScript and ESLint conventions | [typescript-cli-tsgen](../../skills/typescript-cli-tsgen/SKILL.md) |
| [oclif-tsgen.mdc](oclif-tsgen.mdc) | No | `src/commands/**`, `src/lib/**` | OCLIF command, flags, delegation to `@contentstack/types-generator` | [typescript-cli-tsgen](../../skills/typescript-cli-tsgen/SKILL.md) |
| [testing.mdc](testing.mdc) | No | `tests/**`, `jest.config.js` | Jest and integration tests with `csdx` | [testing](../../skills/testing/SKILL.md) |
| [code-review.mdc](code-review.mdc) | **Yes** | — | Every change | [code-review](../../skills/code-review/SKILL.md) |

## Referencing rules in Cursor

- Use **@** in chat (e.g. `@oclif-tsgen`, `@dev-workflow`) to pull in rule context.
- `code-review.mdc` applies automatically (`alwaysApply: true`); others match globs or manual @-mentions.
