# Tech debt register — `@567f/ui`

Edit status in this file (table + section). Agents: do not fix `open` / `accepted` / `skipped` unless asked (CONSTITUTION R-003).

Component-local `TODO.md` files are retired — track unfinished work here.

| ID | Status | Impact | Title |
|----|--------|--------|-------|
| DEBT-001 | open | high | Migrate `@567f/ui` to Tamagui 3 |
| DEBT-002 | resolved | medium | Footer + Sections → composition (mobile + references) |
| DEBT-003 | open | low | Partial consumer adoption (Astro vs Next) |
| DEBT-004 | open | medium | Navbar density / spacing variants |
| DEBT-005 | open | medium | Migrate template apps to current Navbar API |
| DEBT-006 | open | medium | Navbar mobile overlay improvements |
| DEBT-007 | open | low | Navbar enhancement backlog (redesign candidates) |

Cross-repo: template Turborepo = template DEBT-001. Tamagui 3 must move with template DEBT-002. UI consolidation into this package = template DEBT-012 (resolved).

---

## DEBT-001: Migrate `@567f/ui` to Tamagui 3

- Status: open
- Impact: high
- Related: template DEBT-002

Built on Tamagui **1.132.x**. Upgrade in lockstep with template apps. Defaults live here (ADR-0002); keep `$maxSm` coherent.

**Agents:** do not bump majors without coordinating template DEBT-002; keep composition APIs stable.

**Done when:** peers/Storybook on v3; stories reviewed; template consumers on same major.

## DEBT-002: Footer + Sections → composition (mobile + references)

- Status: **resolved** (2026-11-06)
- Impact: medium
- Area: `Footer`, `Sections` (CTA, Faq, FeatureCards, ImageLinkCards, Subscribe)

**Shipped:** DOM-order Footer slots + `collapseOnMobile` accordion; Sections composition like Hero; `@567f/astro-sanity` / cms-starter / once map CMS → slots; removed `Footer.Columns` / `Socials` / `BottomData`, `ImageLinkCard` `card=`, `Footer.Provider` / `Content` / `renderSocialIcon`; Footer denser spacing below `$lg`; `Footer.Nav collapseTrigger` = `chevron` | `plus` | `caret`.

**Follow-ons (not blocking):** [PATTERN_GAPS.md](./PATTERN_GAPS.md) P1+ (AnnouncementBar, LogoCloud, Testimonials, Carousel, etc.).

**Agents:** composition only; do not reintroduce data-array props on these compounds.

## DEBT-003: Partial consumer adoption (Astro vs Next)

- Status: open
- Impact: low
- Related: template DEBT-011; ui DEBT-005

Primary consumer is **Astro** (`webAppAstro`). Deprecated Next may still have TODOs pointing here.

**Agents:** default examples/fixes to Astro; Next adoption is not required for library completeness unless asked.

**Done when:** docs state Astro as primary; stale Next TODOs cleaned or redirected.

## DEBT-004: Navbar density / spacing variants

- Status: open
- Impact: medium
- Area: `Navbar` (AppBar, AppBarItem, Item)
- Source: former `src/components/Navbar/TODO.md`

Use `styled()` with `variants` for density: `'compact' | 'default' | 'spacious'`. Keep Tamagui prop spread for fine-tuning.

**Agents:** do not invent a second spacing API; fold into existing composition props.

**Done when:** density variants shipped + Storybook coverage.

## DEBT-005: Migrate template apps to current Navbar API

- Status: open
- Impact: medium
- Related: DEBT-003
- Area: template consumers
- Source: former `src/components/Navbar/TODO.md`

- `apps/webAppAstro/src/components/Navbar.tsx` — migrate to current `@567f/ui` Navbar API
- `apps/webAppNext/src/components/Navbar.tsx` — migrate or drop with Next deprecation (prefer Astro)

**Done when:** Astro consumer uses current API; Next either migrated or explicitly skipped under DEBT-003.

## DEBT-006: Navbar mobile overlay improvements

- Status: open
- Impact: medium
- Area: `Navbar` mobile overlay / accordion
- Source: former `src/components/Navbar/TODO.md`

- Animate accordion open/close
- Support nested dropdowns on mobile
- Close overlay on route change

**Done when:** all three behaviors work in Storybook + Astro smoke check.

## DEBT-007: Navbar enhancement backlog (redesign candidates)

- Status: open
- Impact: low
- Area: `Navbar`
- Source: former `src/components/Navbar/TODO.md` “Future Considerations”

Redesign / polish candidates (pick explicitly; do not batch-implement):

- Search slot in AppBar
- Notification badge support
- User avatar / profile dropdown pattern
- Breadcrumb integration below AppBar
- A11y audit (keyboard nav, screen reader)
- RTL support
- Container queries when Tamagui supports them

**Agents:** wait for an explicit item from this list before implementing.

**Done when:** chosen items shipped or explicitly `skipped` / `accepted` with rationale.
