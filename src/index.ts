// ── Defaults (ADR-0002 / template ADR-0004) ───────────────────────────

export { default as tamaguiConfig } from './tamagui.config';
export * from './themes';
export { UiProvider, UIProvider, type UiProviderProps } from './UiProvider';
export { useToastController } from '@tamagui/toast';
export { Chip } from './components/Chip';
export { CurrentToast } from './components/CurrentToast';
export * from './components/DropdownMenu';

// Parity with former `@/ui` barrel (web-oriented re-exports)
export {
  Button,
  XStack,
  YStack,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Text,
  Paragraph,
} from 'tamagui/web';

// ── Drawer ────────────────────────────────────────────────────────────

export { Drawer, useDrawer } from './components/Drawer';

export type {
  DrawerContextValue,
  DrawerPlacement,
  DrawerSize,
} from './components/Drawer';

// ── Navbar ─────────────────────────────────────────────────────────────

export { Navbar, useNavbar } from './components/Navbar';

export type {
  RegisteredNavItem,
  RegisteredDropdown,
} from './components/Navbar';

// ── Footer ────────────────────────────────────────────────────────────

export { Footer } from './components/Footer';

export type {
  FooterLink,
  FooterColumn,
  FooterSocialLink,
  FooterSocialLinks,
  FooterLegalLink,
} from './components/Footer';

// ── Sections ──────────────────────────────────────────────────────────

export {
  type SectionButton,
  type SectionImage,
  type SectionIcon,
  type SectionFaqItem,
  type SectionLink,
  type SectionCard,
  type SectionFeatureCard,
  type SectionsContextValue,
  type HeroRootProps,
  type HeroContentProps,
  type HeroBadgeProps,
  type HeroTitleProps,
  type HeroDescriptionProps,
  type HeroActionsProps,
  type HeroMediaProps,
  type CTAProps,
  type FaqAccordionProps,
  type FeatureCardsIconProps,
  type ImageLinkCardsProps,
  type ImageLinkCardProps,
  type SubscribeNewsletterProps,
  SectionsProvider,
  useSections,
  Hero,
  CTA,
  FaqAccordionSection,
  FeatureCardsIcon,
  ImageLinkCards,
  ImageLinkCard,
  SubscribeNewsletter,
} from './components/Sections';
