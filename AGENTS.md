# AGENTS.md — `@567f/ui`

Portable agent entry ([AGENTS.md](https://agents.md/)). **English only.**

## How to use

1. Read this file.
2. Follow [docs/CONSTITUTION.md](docs/CONSTITUTION.md) (rules + ADRs).
3. Check [docs/DEBT.md](docs/DEBT.md) — do not fix open/accepted debt unless asked.
4. Skim [src/components/BEST_PRACTICES.md](src/components/BEST_PRACTICES.md) before compound API changes.

**Handoff:** attach `AGENTS.md`, `docs/CONSTITUTION.md`, `docs/DEBT.md` as needed.

## What this package is

Source-consumed Tamagui UI kit. Consumers use `file:../ui` + `dependenciesMeta["@567f/ui"].injected: true` (not `link:`).

- Defaults: `tamaguiConfig`, themes, `UiProvider` (override via `config`)
- Primitives: Chip, DropdownMenu, toast helpers
- Compounds: Drawer, Navbar, Footer, Sections
- Single export: `@567f/ui` → `src/index.ts`
- `react` / `react-dom` are **peers only**

## Consumers

Import **only** `@567f/ui` (CONSTITUTION R-001). Do not Vite-alias this package to a sibling `src/` path.

- **Canonical consumer:** `../cms-starter` (public Astro + Sanity reference app)
- Also: `../once`, template `webAppAstro`
- Template `libs/ui` is a deprecated shim

## Docs

- [docs/CONSTITUTION.md](docs/CONSTITUTION.md)
- [docs/DEBT.md](docs/DEBT.md)
- [docs/REFERENCES.md](docs/REFERENCES.md) — reference gallery notes (screenshots supplied in chat)
- [docs/PATTERN_GAPS.md](docs/PATTERN_GAPS.md) — pattern → kit gap backlog
- [docs/COMMANDS.md](docs/COMMANDS.md) · [docs/UPGRADE.md](docs/UPGRADE.md) · [docs/CHANGELOG.md](docs/CHANGELOG.md)
- [BEST_PRACTICES.md](src/components/BEST_PRACTICES.md) · [NAVBAR_BEST_PRACTICES.md](src/components/Navbar/NAVBAR_BEST_PRACTICES.md)

## Traceability

- Last reviewed: 2026-11-05
