# Tech debt register — `@567f/ui`

Edit status in this file (table + section). Agents: do not fix `open` / `accepted` / `skipped` unless asked (CONSTITUTION R-003).

| ID | Status | Impact | Title |
|----|--------|--------|-------|
| DEBT-001 | open | high | Migrate `@567f/ui` to Tamagui 3 |
| DEBT-002 | accepted | medium | Composition guide vs data-driven Footer/Sections |
| DEBT-003 | open | low | Partial consumer adoption (Astro vs Next) |

Cross-repo: template Turborepo = template DEBT-001. Tamagui 3 must move with template DEBT-002. UI consolidation into this package = template DEBT-012 (resolved).

---

## DEBT-001: Migrate `@567f/ui` to Tamagui 3

- Status: open
- Impact: high
- Related: template DEBT-002

Built on Tamagui **1.132.x**. Upgrade in lockstep with template apps. Defaults live here (ADR-0002); keep `$maxSm` coherent.

**Agents:** do not bump majors without coordinating template DEBT-002; keep composition APIs stable.

**Done when:** peers/Storybook on v3; stories reviewed; template consumers on same major.

## DEBT-002: Composition guide vs data-driven Footer/Sections

- Status: accepted
- Impact: medium

BEST_PRACTICES push pure composition; Footer/Sections remain more CMS/data-driven. Accepted for now.

**Agents:** do not rewrite Footer/Sections to pure composition without an explicit redesign; match neighboring patterns; document which family new components belong to.

**Done when:** BEST_PRACTICES describe both patterns, or APIs migrated with consumers.

## DEBT-003: Partial consumer adoption (Astro vs Next)

- Status: open
- Impact: low
- Related: template DEBT-011

Primary consumer is **Astro** (`webAppAstro`). Deprecated Next may still have TODOs pointing here.

**Agents:** default examples/fixes to Astro; Next adoption is not required for library completeness unless asked.

**Done when:** docs state Astro as primary; stale Next TODOs cleaned or redirected.
