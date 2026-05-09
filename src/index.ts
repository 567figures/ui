// Navbar — composable pieces
export {
  // Types
  type NavbarLink as NavbarLinkData,
  type NavbarColumnItem,
  type NavbarLinkItem,
  type NavbarItem,
  type NavbarAction,
  // Context
  NavbarProvider,
  useNavbar,
  // Layout
  NavbarRoot,
  NavbarDesktop,
  NavbarLogo,
  // Content
  NavbarItems,
  NavbarDropdown,
  NavbarLink,
  NavbarActions,
  // Mobile
  NavbarMobileMenu,
  NavbarMobileItems,
} from './components/Navbar';

// Legacy aliases for backward compatibility
export type { NavbarItem as NavbarColumnOrLink } from './components/Navbar';
export type { NavbarAction as NavbarButton } from './components/Navbar';

// Footer — composable pieces
export {
  // Types
  type FooterLink,
  type FooterColumn,
  type FooterSocialLink,
  type FooterSocialLinks,
  type FooterLegalLink,
  // Context
  FooterProvider,
  useFooter,
  // Layout
  FooterRoot,
  FooterContent,
  FooterBrand,
  // Brand
  FooterLogo,
  FooterSubtitle,
  // Social
  FooterSocials,
  // Content
  FooterColumns,
  // Bottom
  FooterBottom,
} from './components/Footer';

// Sections — page builder blocks
export {
  // Types
  type SectionButton,
  type SectionImage,
  type SectionIcon,
  type SectionFaqItem,
  type SectionLink,
  type SectionCard,
  type SectionFeatureCard,
  type SectionsContextValue,
  type HeroProps,
  type CTAProps,
  type FaqAccordionProps,
  type FeatureCardsIconProps,
  type ImageLinkCardsProps,
  type ImageLinkCardProps,
  type SubscribeNewsletterProps,
  // Context
  SectionsProvider,
  useSections,
  // Components
  Hero,
  CTA,
  FaqAccordionSection,
  FeatureCardsIcon,
  ImageLinkCards,
  ImageLinkCard,
  SubscribeNewsletter,
} from './components/Sections';
