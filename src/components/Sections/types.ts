import React from 'react';

// ── Data types (no framework dependency) ──────────────────────────────

export interface SectionButton {
  _key: string;
  text?: string | null;
  href?: string | null;
  type?: 'button' | 'anchor' | null;
  variant?: string | null;
  theme?: string | null;
  openInNewTab?: boolean | null;
}

export interface SectionImage {
  asset?: { _ref: string; [key: string]: any } | null;
  alt?: string | null;
  blurData?: string | null;
  dominantColor?: string | null;
  [key: string]: any;
}

export interface SectionIcon {
  svg?: string | null;
  name?: string | null;
}

export interface SectionFaqItem {
  _id: string;
  title: string;
  richText?: any[] | null;
}

export interface SectionLink {
  title?: string | null;
  description?: string | null;
  href?: string | null;
  openInNewTab?: boolean | null;
}

export interface SectionCard {
  _key: string;
  title: string;
  description?: string | null;
  image?: SectionImage | null;
  href?: string | null;
  openInNewTab?: boolean | null;
}

export interface SectionFeatureCard {
  _key: string;
  icon?: SectionIcon | null;
  title?: string | null;
  richText?: any[] | null;
}
