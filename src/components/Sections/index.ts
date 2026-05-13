// Types
export type {
  SectionButton,
  SectionImage,
  SectionIcon,
  SectionFaqItem,
  SectionLink,
  SectionCard,
  SectionFeatureCard,
} from './types';

// Context — wrap sections to provide renderers for rich text, images, buttons, icons
export { SectionsProvider, useSections } from './SectionsContext';
export type { SectionsContextValue } from './SectionsContext';

// Sections
export { Hero, HeroRoot, HeroContent, HeroBadge, HeroTitle, HeroDescription, HeroActions, HeroMedia } from './Hero';
export type { HeroRootProps, HeroContentProps, HeroBadgeProps, HeroTitleProps, HeroDescriptionProps, HeroActionsProps, HeroMediaProps } from './Hero';

export { CTA } from './CTA';
export type { CTAProps } from './CTA';

export { FaqAccordionSection } from './FaqAccordion';
export type { FaqAccordionProps } from './FaqAccordion';

export { FeatureCardsIcon } from './FeatureCardsIcon';
export type { FeatureCardsIconProps } from './FeatureCardsIcon';

export { ImageLinkCards } from './ImageLinkCards';
export type { ImageLinkCardsProps } from './ImageLinkCards';

export { ImageLinkCard } from './ImageLinkCard';
export type { ImageLinkCardProps } from './ImageLinkCard';

export { SubscribeNewsletter } from './SubscribeNewsletter';
export type { SubscribeNewsletterProps } from './SubscribeNewsletter';
