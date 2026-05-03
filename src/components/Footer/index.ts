// Types
export type {
  FooterLink,
  FooterColumn,
  FooterSocialLink,
  FooterSocialLinks,
  FooterLegalLink,
} from './types';

// Context — wrap your footer to provide custom Link component and social icon renderer
export { FooterProvider, useFooter } from './FooterContext';

// Layout — structural pieces
export { FooterRoot, FooterContent, FooterBrand } from './FooterLayout';

// Brand — logo and subtitle
export { FooterLogo, FooterSubtitle } from './FooterLogo';

// Social — social media icons
export { FooterSocials } from './FooterSocials';

// Content — navigation columns
export { FooterColumns } from './FooterColumns';

// Bottom — copyright and legal links
export { FooterBottom } from './FooterBottom';
