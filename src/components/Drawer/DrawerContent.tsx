import React, { useRef } from 'react';
import { YStack } from 'tamagui';
import { useDrawer } from './DrawerContext';
import type { DrawerPlacement, DrawerSize } from './types';

// ── Size map ──────────────────────────────────────────────────────────

const SIZE_MAP: Record<DrawerSize, number | string> = {
  sm: 280,
  md: 380,
  lg: 520,
  xl: 700,
  full: '100%',
};

// ── Placement styles for overlay mode ─────────────────────────────────

function getOverlayPlacementStyles(placement: DrawerPlacement, size: DrawerSize, open: boolean) {
  const dimension = SIZE_MAP[size];
  const isHorizontal = placement === 'left' || placement === 'right';

  const base: Record<string, any> = {
    position: 'fixed',
    zIndex: 100,
    top: 0,
    bottom: 0,
  };

  if (isHorizontal) {
    base.width = dimension;
    base.maxWidth = '100vw';
    base.height = '100%';

    if (placement === 'left') {
      base.left = 0;
      base.transform = open ? 'translateX(0)' : `translateX(-100%)`;
    } else {
      base.right = 0;
      base.transform = open ? 'translateX(0)' : `translateX(100%)`;
    }
  } else {
    base.left = 0;
    base.right = 0;
    base.height = dimension;
    base.maxHeight = '100vh';
    base.width = '100%';

    if (placement === 'top') {
      base.top = 0;
      base.bottom = 'auto';
      base.transform = open ? 'translateY(0)' : `translateY(-100%)`;
    } else {
      base.top = 'auto';
      base.bottom = 0;
      base.transform = open ? 'translateY(0)' : `translateY(100%)`;
    }
  }

  base.transition = 'transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)';

  return base;
}

// ── Placement styles for preserved (inline) mode ──────────────────────

function getPreservedPlacementStyles(placement: DrawerPlacement, size: DrawerSize, open: boolean) {
  const dimension = SIZE_MAP[size];
  const isHorizontal = placement === 'left' || placement === 'right';

  const base: Record<string, any> = {
    position: 'fixed',
    zIndex: 100,
    top: 0,
    transition: 'transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)',
  };

  if (isHorizontal) {
    base.width = dimension;
    base.maxWidth = '100vw';
    base.height = '100%';
    base.bottom = 0;

    if (placement === 'left') {
      base.left = 0;
      base.transform = open ? 'translateX(0)' : `translateX(-100%)`;
    } else {
      base.right = 0;
      base.transform = open ? 'translateX(0)' : `translateX(100%)`;
    }
  } else {
    base.left = 0;
    base.right = 0;
    base.width = '100%';
    base.height = dimension;
    base.maxHeight = '100vh';

    if (placement === 'top') {
      base.top = 0;
      base.bottom = 'auto';
      base.transform = open ? 'translateY(0)' : `translateY(-100%)`;
    } else {
      base.top = 'auto';
      base.bottom = 0;
      base.transform = open ? 'translateY(0)' : `translateY(100%)`;
    }
  }

  return base;
}

// ── Component ─────────────────────────────────────────────────────────

/**
 * The drawer panel that slides in from the specified placement.
 *
 * ## Mount Behavior
 *
 * - **Default**: Unmounts content when closed (fresh state on reopen).
 *   Drawer overlays on top of page content with a backdrop.
 *
 * - **keepMounted**: Keeps DOM in place, hides with visibility.
 *   Drawer still overlays on top. Preserves scroll position and lightweight state.
 *
 * - **preserved**: Drawer is a persistent sidebar. Page content shifts to make room.
 *   Both drawer AND page content are visible simultaneously.
 *   Full React tree stays mounted — preserves all state (forms, counters, refs).
 *   Use with `<Drawer.PageContent>` to wrap your main content.
 *
 * @example
 * // Overlay mode (default)
 * <Drawer.Content>
 *   <Drawer.Header>Title</Drawer.Header>
 *   <Drawer.Body>Content here</Drawer.Body>
 * </Drawer.Content>
 *
 * @example
 * // Preserved mode — drawer + page content side by side
 * <Drawer.Root preserved placement="left">
 *   <Drawer.Content>
 *     <Drawer.Header>Sidebar</Drawer.Header>
 *     <Drawer.Body>Nav links</Drawer.Body>
 *   </Drawer.Content>
 *   <Drawer.PageContent>
 *     <main>Page content shifts over</main>
 *   </Drawer.PageContent>
 * </Drawer.Root>
 */
export function DrawerContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open, placement, size, keepMounted, preserved } = useDrawer();
  const hasBeenOpenedRef = useRef(false);

  // Track if drawer has ever been opened (for keepMounted initial render)
  if (open) {
    hasBeenOpenedRef.current = true;
  }

  // ── Preserved mode: always mounted, slides in/out alongside content ──
  if (preserved) {
    const placementStyles = getPreservedPlacementStyles(placement, size, open);

    return (
      <YStack
        backgroundColor="$background"
        borderColor="$borderColor"
        borderWidth={1}
        elevation={4}
        style={placementStyles}
        role="complementary"
        aria-hidden={!open}
      >
        <YStack flex={1} overflow="hidden">
          {children}
        </YStack>
      </YStack>
    );
  }

  // ── Overlay mode (default / keepMounted) ────────────────────────────
  const shouldRender = open || (keepMounted && hasBeenOpenedRef.current);

  if (!shouldRender) return null;

  const placementStyles = getOverlayPlacementStyles(placement, size, open);

  // For keepMounted: keep tree mounted but visually hidden when closed
  const hiddenStyles = !open && keepMounted
    ? { visibility: 'hidden' as const, pointerEvents: 'none' as const }
    : {};

  return (
    <YStack
      backgroundColor="$background"
      borderColor="$borderColor"
      borderWidth={1}
      elevation={8}
      style={{
        ...placementStyles,
        ...hiddenStyles,
      }}
      role="dialog"
      aria-modal={true}
      aria-hidden={!open}
    >
      <YStack flex={1} overflow="hidden">
        {children}
      </YStack>
    </YStack>
  );
}
