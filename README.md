# `@567f/ui`

Tamagui UI kit (defaults + compounds) for 567figures apps.

## Humans

- **Storybook:** `pnpm start` → http://localhost:6006 (Node 22+; or `./node_modules/.bin/storybook dev -p 6006`)
- **Composition:** [src/components/BEST_PRACTICES.md](src/components/BEST_PRACTICES.md)
- **Commands:** [docs/COMMANDS.md](docs/COMMANDS.md)

## AI / contributor handoff

1. [AGENTS.md](./AGENTS.md)
2. [docs/CONSTITUTION.md](./docs/CONSTITUTION.md) — rules + ADRs
3. [docs/DEBT.md](./docs/DEBT.md)

## Consumption

```json
"@567f/ui": "link:../ui"
```

```ts
import { UiProvider, Navbar } from '@567f/ui';
```

Never relative paths into this repo’s `src/` from consumers (CONSTITUTION R-001).
