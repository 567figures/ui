import type { ReactNode } from 'react';

// ── Data types (CMS-shaped helpers; kit UI is composition-only) ───────

export interface FooterLink {
  _key: string;
  name?: string | null;
  href?: string | null;
  openInNewTab?: boolean | null;
}

export interface FooterColumn {
  _key: string;
  title?: string | null;
  links?: FooterLink[] | null;
}

export interface FooterSocialLink {
  url?: string | null;
  label: string;
  icon?: ReactNode;
}

export interface FooterSocialLinks {
  facebook?: string | null;
  twitter?: string | null;
  instagram?: string | null;
  youtube?: string | null;
  linkedin?: string | null;
}

export interface FooterLegalLink {
  name: string;
  href: string;
}
