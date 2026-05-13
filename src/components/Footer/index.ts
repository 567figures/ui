// Types
export type {
  FooterLink,
  FooterColumn,
  FooterSocialLink,
  FooterSocialLinks,
  FooterLegalLink,
} from './types';

// Context
export { useFooter } from './FooterContext';

// ── Compound component ────────────────────────────────────────────────

import { FooterProvider } from './FooterContext';
import { FooterRoot, FooterContent, FooterBrand } from './FooterLayout';
import { FooterLogo, FooterSubtitle } from './FooterLogo';
import { FooterSocials } from './FooterSocials';
import { FooterColumns } from './FooterColumns';
import { FooterBottom } from './FooterBottom';

export const Footer = {
  Provider: FooterProvider,
  Root: FooterRoot,
  Content: FooterContent,
  Brand: FooterBrand,
  Logo: FooterLogo,
  Subtitle: FooterSubtitle,
  Socials: FooterSocials,
  Columns: FooterColumns,
  Bottom: FooterBottom,
} as const;
