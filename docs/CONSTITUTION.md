# Constitution — `@567f/ui`

Normative **rules** (living) and **architecture decisions** (append-only ADR log).

This is **not** Spec Kit’s `.specify/memory/constitution.md`. Cross-repo product decisions also live in the template monorepo’s `docs/CONSTITUTION.md` (e.g. ADR-0004).

Agents: start at [AGENTS.md](../AGENTS.md), then this file and [DEBT.md](./DEBT.md).

---

## Rules

### R-001 Scoped `@567f/*` imports (consumers)

Consumers and docs/examples must import via the scoped package name from the **package root**:

```ts
import { UiProvider, Navbar } from '@567f/ui';
```

Never relative/filesystem imports into this repo from outside (`../../../ui/src/...`).  
Inside this package, relative `./` / `../` among local files is fine.

Consumers must **not** Vite-alias `@567f/ui` → this checkout’s `src/`. Use `file:../ui` + `dependenciesMeta.injected` so peers resolve from the consumer (one React). Tamagui plugin `config:` may point at the injected copy under the consumer’s `node_modules/@567f/ui/...`.

### R-002 English-only agent docs

AGENTS, CONSTITUTION, DEBT, and related agent docs are English-only.

### R-003 Do not fix open/accepted debt unless asked

See [DEBT.md](./DEBT.md). Do not resolve items unless the user explicitly asks.

### R-004 Composition defaults

Follow [src/components/BEST_PRACTICES.md](../src/components/BEST_PRACTICES.md) for new compound components. Footer/Sections are composition (DEBT-002 resolved): slot APIs only.

### R-005 Defaults + override

Ship default `tamaguiConfig` / themes / `UiProvider`. Consumers may pass a custom `config` to `UiProvider` for another brand (ADR-0002).

### R-006 Canonical consumer

The **canonical consumer** for verifying this kit is sibling `../cms-starter`. Prefer it for integration checks and examples. Other consumers: `../once`, template `webAppAstro`.

---

## Architecture decisions

### ADR-0001: Headless composition library (source package)

- Status: accepted (config ownership partially superseded by ADR-0002)
- Date: 2026-11-01
- Supersedes: (none)
- Superseded by: ADR-0002 for config/themes/provider ownership; composition stance still stands
- Affected: entire package; template consumers

**Context:** Marketing/layout UI needed reuse outside a single app / monorepo.

**Decision:** Source-consumed compound components; composition rules in BEST_PRACTICES; local consume via `file:` + `injected`. ~~No owned Tamagui config~~ → superseded by ADR-0002.

**Consequences:** Composition API guidance remains. Defaults: ADR-0002. Tamagui majors with consumers (DEBT-001). Footer/Sections composition migration: DEBT-002.

### ADR-0002: Ship default Tamagui config / themes / UiProvider

- Status: accepted
- Date: 2026-11-01
- Supersedes: “no owned config” part of ADR-0001
- Superseded by: (none)
- Related: template ADR-0004, template DEBT-012 (resolved)

**Context:** Forcing config into `template/libs/ui` caused dual-package confusion.

**Decision:** Export defaults from this package; keep composition API style; allow consumer override via `UiProvider` `config`.

**Consequences:** Complete default UI kit; Storybook uses package `UiProvider`; template `libs/ui` is a shim; `$maxSm` etc. live in shipped config.

### ADR-0003: Constitution + single DEBT register

- Status: accepted
- Date: 2026-11-01
- Supersedes: multi-file `docs/adr/*` and `docs/debt/DEBT-*.status.md`
- Superseded by: (none)

**Decision:** One CONSTITUTION.md + one DEBT.md; AGENTS.md is a thin index.
