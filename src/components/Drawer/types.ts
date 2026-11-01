import type React from 'react';

// ── Drawer placement ──────────────────────────────────────────────────

export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';

// ── Drawer size ───────────────────────────────────────────────────────

export type DrawerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

// ── Drawer context value ──────────────────────────────────────────────

export interface DrawerContextValue {
  /** Whether the drawer is currently open */
  open: boolean;
  /** Toggle open state */
  setOpen: (open: boolean) => void;
  /** Placement of the drawer */
  placement: DrawerPlacement;
  /** Size preset */
  size: DrawerSize;
  /**
   * Keep the drawer content mounted in the DOM when closed (overlay mode).
   * Useful for preserving scroll position, form state, etc.
   * The content will be hidden via visibility when closed.
   */
  keepMounted: boolean;
  /**
   * Persistent sidebar mode.
   * When true, the drawer and page content are visible simultaneously.
   * The page content shifts to make room for the drawer.
   * The drawer's React tree stays mounted at all times — preserving
   * all internal state (React state, refs, scroll position, form inputs).
   *
   * Use `<Drawer.PageContent>` to wrap your main content.
   */
  preserved: boolean;
}
