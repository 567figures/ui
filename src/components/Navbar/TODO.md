# Navbar — TODO

## Next Steps

### 1. Styled variants for spacing/density
- Use `styled()` with `variants` on AppBar, AppBarItem, Item
- Variants: `density: 'compact' | 'default' | 'spacious'`
- Allow spread of Tamagui props for fine-tuning

### 2. Update template apps
- `/apps/webAppAstro/src/components/Navbar.tsx` — migrate to new API
- `/apps/webAppNext/src/components/Navbar.tsx` — migrate to new API

### 3. Mobile overlay improvements
- Animate accordion open/close
- Support nested dropdowns in mobile
- Close on route change

---

## Future Considerations

- Search slot in AppBar
- Notification badge support
- User avatar / profile dropdown pattern
- Breadcrumb integration below AppBar
- A11y audit (keyboard nav, screen reader testing)
- RTL support
- Container queries when Tamagui supports them
