# Changelog (`@567f/ui` docs / contracts)

## 2026-11-06

### Removed

- Data shims: `Footer.Columns` / `Socials` / `BottomData`, `Footer.Provider` / `Content`, `renderSocialIcon`, `Footer.Subtitle` `text` prop, `ImageLinkCard` (`card=`)

### Changed

- DEBT-002 → **resolved**
- Footer denser spacing below `$lg` (Root / Main / Brand / Bottom)
- `Footer.Nav collapseTrigger`: `chevron` (default) | `plus` | `caret`

## 2026-11-05

### Added

- [REFERENCES.md](./REFERENCES.md) + `docs/references/` real-site screenshot gallery (Footer / Sections)
- Footer composition API: `Root` / `Top` / `Main` / `Brand` / `Nav` (`collapseOnMobile`) / `Column` / `Item` / `Aside` / `Bottom` / `Copyright` / `Legal` / `Meta`
- Sections composition: `CTA`, `Faq`, `FeatureCards`, `ImageLinkCards`, `Subscribe` (Hero-style slots)

### Changed

- DEBT-002 → open rewrite (composition + mobile + references); BEST_PRACTICES documents both families until shims removed
- Deprecated data shims: `Footer.Columns` / `Socials` / `BottomData`, `ImageLinkCard` `card=` prop
- Storybook staticDirs serves `/references/*`; Footer + Section recipe stories
- Document local consume as `file:` + `dependenciesMeta.injected` (not `link:`); forbid Vite alias to sibling `src/`
- Canonical consumer: `../cms-starter` (R-006); AGENTS / CONSTITUTION / README synced with template ADR-0006
- Moved `Navbar/TODO.md` into [DEBT.md](./DEBT.md) (DEBT-004…007); BEST_PRACTICES no longer suggests per-component TODO files


## 2026-11-01

### Added

- [CONSTITUTION.md](./CONSTITUTION.md) — Rules + ADR log
- [DEBT.md](./DEBT.md) — single debt register
- Portable `AGENTS.md` / README handoff
- Defaults + primitives migration (template DEBT-012)

### Changed

- Consolidated multi-file `docs/adr/` and `docs/debt/` into CONSTITUTION + DEBT (ADR-0003)
- Slimmed `AGENTS.md` to an index
- Storybook uses package `UiProvider`; Mermaid in BEST_PRACTICES
- Removed unused subpath `exports` (single `"."` only)
