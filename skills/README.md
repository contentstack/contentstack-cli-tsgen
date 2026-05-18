# Skills – contentstack-cli-tsgen

Source of truth for detailed guidance. Read [AGENTS.md](../AGENTS.md) first, then open the skill that matches your task.

## When to use which skill

| Skill folder | Use when |
| --- | --- |
| [dev-workflow](dev-workflow/SKILL.md) | Branches, CI, prepack, PR and release process |
| [typescript-cli-tsgen](typescript-cli-tsgen/SKILL.md) | OCLIF `tsgen` command, flags, helpers vs library behavior |
| [testing](testing/SKILL.md) | Jest, posttest ESLint, integration tests, `TOKEN_ALIAS`, CI secrets |
| [code-review](code-review/SKILL.md) | PR checklist: CLI UX, errors, Delivery vs CMA wording, types-generator dependency |

HTTP and generation internals live in **`@contentstack/types-generator`** ([npm](https://www.npmjs.com/package/@contentstack/types-generator)); do not assume a sibling checkout.

Each folder contains `SKILL.md` with YAML frontmatter (`name`, `description`).
