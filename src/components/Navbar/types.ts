import type React from 'react';

// ── Mobile registration types ─────────────────────────────────────────

export interface RegisteredNavItem {
  id: string;
  node: React.ReactNode;
}

export interface RegisteredDropdown {
  id: string;
  trigger: React.ReactNode;
  items: React.ReactNode[];
}

/** Union type for ordered mobile entries */
export type RegisteredMobileEntry =
  | { type: 'item'; data: RegisteredNavItem; order: number }
  | { type: 'dropdown'; data: RegisteredDropdown; order: number };
