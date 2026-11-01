import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { DrawerContextValue, DrawerPlacement, DrawerSize } from './types';

// ── Context ───────────────────────────────────────────────────────────

const DrawerContext = createContext<DrawerContextValue | null>(null);

// ── Provider ──────────────────────────────────────────────────────────

export function DrawerProvider({
  children,
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
  placement = 'right',
  size = 'md',
  keepMounted = false,
  preserved = false,
}: {
  children: React.ReactNode;
  /** Controlled open state */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Initial open state (uncontrolled mode). Default: false */
  defaultOpen?: boolean;
  /** Drawer placement. Default: 'right' */
  placement?: DrawerPlacement;
  /** Size preset. Default: 'md' */
  size?: DrawerSize;
  /** Keep DOM mounted when closed. Default: false */
  keepMounted?: boolean;
  /** Preserve component state when closed (implies keepMounted). Default: false */
  preserved?: boolean;
}) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const setOpen = useCallback(
    (value: boolean) => {
      if (!isControlled) {
        setInternalOpen(value);
      }
      onOpenChange?.(value);
    },
    [isControlled, onOpenChange]
  );

  const value = useMemo<DrawerContextValue>(
    () => ({
      open,
      setOpen,
      placement,
      size,
      keepMounted: preserved || keepMounted,
      preserved,
    }),
    [open, setOpen, placement, size, keepMounted, preserved]
  );

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
}

// ── Hook ──────────────────────────────────────────────────────────────

export function useDrawer(): DrawerContextValue {
  const ctx = useContext(DrawerContext);
  if (!ctx) {
    throw new Error('useDrawer must be used within <Drawer.Root>');
  }
  return ctx;
}
