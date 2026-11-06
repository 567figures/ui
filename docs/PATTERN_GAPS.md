# Pattern → kit gap matrix

Fair-use audit of Calm, Headspace, HubSpot, Coursera, Herman Miller, Headway (mobile / tablet / desktop). Screenshot folder removed — backlog below still applies until replaced by user-provided shots.

**Pass goal:** gallery + matrix + backlog. No new compounds in this pass.

**Kit baseline:** Navbar, Drawer, DropdownMenu, Footer (composition slots), Sections (Hero, CTA, Faq, FeatureCards, ImageLinkCards, Subscribe), Chip, toast, Tamagui primitives.

---

## Capture notes / blockers

| Site | Home | Secondary | Tertiary | Cookies | Notes |
|------|------|-----------|----------|---------|-------|
| Coursera | ok ×3 | `/business` ok | `/degrees` ok | none / delayed modal on tablet | Cookie modal sometimes after load |
| Headspace | ok ×3 | `/subscriptions` ok | `/meditation` ok | OneTrust Accept | Accordion uses `+` |
| HubSpot | ok ×3 | `/products` ok | `blog.hubspot.com` ok | `Accept all` | Dark footer accordion |
| Herman Miller | ok ×3 | `/products/` ok | `/about/` ok | OneTrust | Locale + newsletter Aside |
| Headway | ok ×3 | `/library/` ok | `/faq/` (replaced 404 `/pricing/`) | none / exit-intent modal | Dense footer columns; modal overlays mid/footer shots |
| Calm | desktop browser ok; tablet/mobile automation **403** | `/sleep` **403** | `/blog` ok ×3 | none visible | Reused prior `footer/calm-mobile.png` for mobile footer |

---

## Pattern catalog (observed)

### Chrome / nav

| Pattern | Seen on | Kit today | Verdict |
|---------|---------|-----------|---------|
| GlobalBar (utility row) | HubSpot, Herman Miller, Coursera persona bar | `Navbar.GlobalBar` | **covered** |
| AppBar + primary CTA | All | `Navbar.AppBar` + `Item` | **covered** |
| Mega-menu / multi-panel dropdown | HubSpot Products/Solutions, Coursera Explore | `Navbar.Dropdown*` (flat) | **extend** — depth / multi-column dropdown content |
| Mobile drawer / hamburger overlay | All @ ≤768 | `Navbar.MobileToggle` + Drawer | **extend** — DEBT-006 overlay UX |
| Announcement / promo strip above nav | Headspace yellow HSA bar | — | **missing** → `AnnouncementBar` |
| Locale / region switcher | HubSpot, Herman Miller, Headspace footer | Consumer content in slots | **extend** — documented `LocaleSwitcher` slot recipe (not a data widget) |
| Search in AppBar | Coursera, Herman Miller | Consumer `Item` | **covered** (compose) |
| Sticky header | Most | Navbar sticky props | **covered** |

### Hero / media

| Pattern | Seen on | Kit today | Verdict |
|---------|---------|-----------|---------|
| Centered text hero + dual CTAs | HubSpot, Calm | `Hero` | **covered** |
| Split / media hero | Calm landscape, Headspace feature cards | `Hero.Content` + `Media` | **covered** |
| Full-bleed carousel hero | Herman Miller, Coursera dual cards | — | **missing** → `HeroCarousel` / extend Hero with carousel slot |
| App phone mock + floating cards | Headspace | Consumer media | **covered** (compose) |
| App Store badge cluster | Headspace, Coursera footer | — | **missing** → `AppStoreBadges` (or Footer.Aside recipe) |

### Content grids / social proof

| Pattern | Seen on | Kit today | Verdict |
|---------|---------|-----------|---------|
| Feature icon / text cards | Calm, Headway | `FeatureCards` | **covered** |
| Image link / category cards | Headspace, Calm mid | `ImageLinkCards` | **covered** (Calm ImageLink gallery still thin) |
| Logo cloud / partner strip | Coursera, HubSpot | — | **missing** → `LogoCloud` |
| Stats / metrics row | Common marketing | — | **missing** → `StatsRow` |
| Testimonials / quote carousel | Calm reviews | — | **missing** → `Testimonials` |
| Horizontal card rail / carousel | Coursera “New and popular”, Headway books | — | **missing** → `CardCarousel` |
| Blog / article teaser grid | HubSpot blog, Calm blog, Headway blog | `ImageLinkCards` | **extend** — meta row (date/author) recipe |
| Course/list media+meta cards | Coursera | — | **extend** ImageLinkCards or P2 `MediaListCard` |

### Interactive

| Pattern | Seen on | Kit today | Verdict |
|---------|---------|-----------|---------|
| FAQ accordion (`+` or chevron) | Calm, Coursera, Headway FAQ | `Faq` (`+`) | **extend** — chevron trigger variant |
| Footer nav accordion | Headspace (`+`), HubSpot (`>`), Herman Miller | `Footer.Nav collapseOnMobile` (chevron) | **extend** — trigger icon variant (`+` / `>` / chevron) |
| Pricing / plan picker cards | Headspace subscriptions | — | **missing** → `PricingTable` / `PlanPicker` |
| Tabs | Product hubs | — | **missing** (P2) → `Tabs` compound or document Tamagui Tabs |
| Newsletter / email form | Herman Miller | `Subscribe` + Footer.Aside | **covered** |
| Cookie / consent | All | — | **out of kit** (explicit non-goal) |
| Exit-intent / promo modal | Headway | Drawer ≈ sheet; no centered dialog | **missing** (P2) → `Dialog` / modal compound |

### CTA bands

| Pattern | Seen on | Kit today | Verdict |
|---------|---------|-----------|---------|
| Mid-page / centered band | HubSpot, Headspace | `CTA` | **covered** |
| Pre-footer promo | Headway, Coursera AI band | `CTA` / `Footer.Top` | **covered** |
| Full-bleed dark band with arrow | Coursera | `CTA` | **extend** — fullBleed / edge-to-edge variant |

### Footer

| Pattern | Seen on | Kit today | Verdict |
|---------|---------|-----------|---------|
| Top promo / CTA | Several | `Footer.Top` | **covered** |
| Brand + subtitle | Most | `Footer.Brand` | **covered** |
| Mega nav columns | HubSpot, Coursera, Headway | `Footer.Nav` + `Column` | **covered** |
| Aside apps / newsletter | Headspace, Herman Miller, Coursera | `Footer.Aside` | **covered** |
| Bottom copyright / legal / social | All | `Bottom` / `Copyright` / `Legal` / `Meta` | **covered** |
| Mobile accordion density | Headspace, Herman, HubSpot | `collapseOnMobile` | **extend** — spacing density (tablet/mobile gaps too large today) |
| Locale in bottom | Herman, Headspace | compose in Bottom | **covered** |
| Dark inverted footer | HubSpot, Calm | theme/`$background` | **covered** (theme) |
| Multi-band footer (link grid + corporate + apps) | Coursera | DOM-order slots | **covered** (compose multiple Nav/Aside blocks) |

### Spacing / density

| Pattern | Seen on | Kit today | Verdict |
|---------|---------|-----------|---------|
| Tighter stack below `$lg` | All reference footers denser than kit Default | Fixed `$8`/`$10` gaps | **extend** — Footer (and Section) responsive density / `density` prop like Navbar |

---

## Prioritized backlog

### P0 — done (2026-11-06)

1. ~~Footer responsive spacing / density~~
2. ~~Footer accordion trigger variants (`chevron` | `plus` | `caret`)~~
3. ~~DEBT-002 shims removed~~
4. Calm gallery — deferred (user-supplied screenshots workflow)

### P1 — ≥3 sites, high homepage frequency

1. **`AnnouncementBar`** — thin strip above Navbar (Headspace).
2. **`LogoCloud`** — partner/logo strip (Coursera, HubSpot).
3. **`Testimonials`** — quote cards / carousel (Calm).
4. **`StatsRow`** — metric strip.
5. **`AppStoreBadges`** — Aside/Footer recipe + optional compound (Headspace, Coursera).
6. **Navbar mega-menu depth** — multi-column `DropdownContent` layout helpers.
7. **Hero carousel / multi-panel hero** — Herman Miller, Coursera.
8. **Faq / Footer icon trigger parity** — chevron vs `+` documented variants.
9. **Storybook recipes** from audit PNGs (no new API) for HubSpot/Coursera/Herman footers at tablet.

### P2 — deeper / site-specific

1. **`CardCarousel` / horizontal rails** — Coursera, Headway.
2. **`PricingTable` / plan picker** — Headspace subscriptions.
3. **`Dialog` / centered modal** — Headway exit-intent (Drawer covers sheets only).
4. **Tabs** compound or Tamagui Tabs recipe — product hubs.
5. **MediaListCard** — Coursera course row cards.
6. **LocaleSwitcher** documented slot (flag + label) for GlobalBar / Footer.Bottom.

---

## Consumer-owned vs kit-owned

| Kit-owned (structure/behavior) | Consumer-owned |
|--------------------------------|----------------|
| Slots, accordion collapse, density, sticky, drawer | Brand art, copy, real forms, search backends |
| Trigger icon variants, carousel chrome | Cookie consent vendors |
| Composition recipes in Storybook | Pricing SKUs, auth, checkout |

---

## Suggested next implement slice (after approval)

Ship **P0.1 Footer density** + **P0.2 accordion trigger variant** first; then **P1 AnnouncementBar + LogoCloud + Testimonials** as new composition Sections.
