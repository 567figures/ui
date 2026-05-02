// ── Data types (no framework dependency) ──────────────────────────────

export interface NavbarLink {
  _key: string;
  name?: string | null;
  description?: string | null;
  href?: string | null;
  icon?: React.ReactNode;
}

export interface NavbarColumnItem {
  _key: string;
  type: 'column';
  title?: string | null;
  links?: NavbarLink[] | null;
}

export interface NavbarLinkItem {
  _key: string;
  type: 'link';
  name?: string | null;
  href?: string | null;
}

export type NavbarItem = NavbarColumnItem | NavbarLinkItem;

export interface NavbarAction {
  _key: string;
  type?: string | null;
  text?: string | null;
  href?: string | null;
  variant?: string | null;
  theme?: string | null;
}
