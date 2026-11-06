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

// Context — optional CMS glue (rich text / images / buttons / icons / Link)
export { SectionsProvider, useSections } from './SectionsContext';
export type { SectionsContextValue } from './SectionsContext';

// Hero (composition)
export {
  Hero,
  HeroRoot,
  HeroContent,
  HeroBadge,
  HeroTitle,
  HeroDescription,
  HeroActions,
  HeroMedia,
} from './Hero';
export type {
  HeroRootProps,
  HeroContentProps,
  HeroBadgeProps,
  HeroTitleProps,
  HeroDescriptionProps,
  HeroActionsProps,
  HeroMediaProps,
} from './Hero';

// CTA (composition)
export { CTA, CTARoot, CTAEyebrow, CTATitle, CTABody, CTAActions } from './CTA';
export type { CTARootProps } from './CTA';

// Faq (composition)
export {
  Faq,
  FaqAccordion,
  FaqRoot,
  FaqHeader,
  FaqEyebrow,
  FaqTitle,
  FaqSubtitle,
  FaqGroup,
  FaqGroupTitle,
  FaqList,
  FaqItem,
  FaqTrigger,
  FaqContent,
  FaqLink,
} from './FaqAccordion';
export type { FaqRootProps } from './FaqAccordion';

/** @deprecated Use `Faq` */
export { Faq as FaqAccordionSection } from './FaqAccordion';

// Feature cards (composition)
export {
  FeatureCards,
  FeatureCardsIcon,
  FeatureCardsRoot,
  FeatureCardsHeader,
  FeatureCardsEyebrow,
  FeatureCardsTitle,
  FeatureCardsBody,
  FeatureCardsGrid,
  FeatureCardsCard,
  FeatureCardsIconSlot,
  FeatureCardsAction,
} from './FeatureCardsIcon';
export type { FeatureCardsRootProps } from './FeatureCardsIcon';

// Image link cards (composition)
export {
  ImageLinkCards,
  ImageLinkCardsRoot,
  ImageLinkCardsHeader,
  ImageLinkCardsEyebrow,
  ImageLinkCardsTitle,
  ImageLinkCardsBody,
  ImageLinkCardsGrid,
  ImageLinkCardsCard,
  ImageLinkCardsMedia,
} from './ImageLinkCards';
export type { ImageLinkCardsRootProps } from './ImageLinkCards';

// Subscribe (composition)
export {
  Subscribe,
  SubscribeNewsletter,
  SubscribeRoot,
  SubscribeTitle,
  SubscribeBody,
  SubscribeForm,
  SubscribeHelper,
} from './SubscribeNewsletter';
export type { SubscribeRootProps } from './SubscribeNewsletter';
