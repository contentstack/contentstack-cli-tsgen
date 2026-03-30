# Skills for `contentstack-cli-tsgen`

Use with [AGENTS.md](../AGENTS.md) and [`.cursor/rules/`](../.cursor/rules/README.md).

| Skill | When to use |
| --- | --- |
| [code-review](code-review/SKILL.md) | PR checklist: CLI UX, errors, Delivery vs CMA wording, dependency on `@contentstack/types-generator` |
| [testing](testing/SKILL.md) | Jest, `posttest` ESLint, integration tests, `TOKEN_ALIAS`, CI secrets |
| [typescript-cli-tsgen](typescript-cli-tsgen/SKILL.md) | OCLIF command flow, helpers, where to change flags vs library behavior |

There is no separate **framework** skill: HTTP and generation details belong in **`@contentstack/types-generator`** (see npm / [github.com/contentstack/types-generator](https://github.com/contentstack/types-generator)), not relative paths to another checkout.
