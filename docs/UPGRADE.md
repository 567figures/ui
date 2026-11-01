# Upgrade checklist

## Tamagui

- Keep `peerDependencies` and Storybook `devDependencies` on the **same major** as template apps.
- Tamagui **3** migration is tracked as [DEBT.md](./DEBT.md) DEBT-001 and template DEBT-002 — upgrade both repos together.
- Defaults live here (`tamaguiConfig`); verify `$maxSm` (and related) media after upgrades.

## Storybook / Vite

- Bump Storybook carefully with React 19 and `react-native-web` aliases in `.storybook/main.ts`.

## After upgrading

- Update [CHANGELOG.md](./CHANGELOG.md)
- Update status in [DEBT.md](./DEBT.md)
- Refresh `Last reviewed` in [AGENTS.md](../AGENTS.md)
- Note norms in [CONSTITUTION.md](./CONSTITUTION.md) if APIs/rules change
