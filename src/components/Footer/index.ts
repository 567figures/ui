// Types
export type {
  FooterLink,
  FooterColumn,
  FooterSocialLink,
  FooterSocialLinks,
  FooterLegalLink,
} from './types';

export type { FooterCollapseTrigger } from './FooterContext';

// Context
export { useFooter, useFooterNav } from './FooterContext';
export type { FooterContextValue, FooterNavContextValue, FooterLinkComponentProps } from './FooterContext';

// ── Compound component ────────────────────────────────────────────────

import {
  FooterRoot,
  FooterTop,
  FooterMain,
  FooterBrand,
  FooterNav,
  FooterAside,
} from './FooterLayout';
import {
  FooterLogo,
  FooterSubtitle,
  FooterColumn,
  FooterColumnTitle,
  FooterItem,
  FooterBottomBar,
  FooterCopyright,
  FooterLegal,
  FooterMeta,
} from './FooterSlots';

export const Footer = {
  Root: FooterRoot,
  Top: FooterTop,
  Main: FooterMain,
  Brand: FooterBrand,
  Logo: FooterLogo,
  Subtitle: FooterSubtitle,
  Nav: FooterNav,
  Column: FooterColumn,
  ColumnTitle: FooterColumnTitle,
  Item: FooterItem,
  Aside: FooterAside,
  Bottom: FooterBottomBar,
  Copyright: FooterCopyright,
  Legal: FooterLegal,
  Meta: FooterMeta,
} as const;
