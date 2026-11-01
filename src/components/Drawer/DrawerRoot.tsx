import React from 'react';
import { DrawerProvider } from './DrawerContext';
import type { DrawerPlacement, DrawerSize } from './types';

/**
 * Root drawer container.
 * Provides context for all child drawer components.
 * Supports both controlled and uncontrolled open state.
 *
 * @example
 * // Overlay mode (default) — drawer on top of content
 * <Drawer.Root placement="right" size="md">
 *   <Drawer.Trigger><Button>Open</Button></Drawer.Trigger>
 *   <Drawer.Overlay />
 *   <Drawer.Content>...</Drawer.Content>
 * </Drawer.Root>
 *
 * @example
 * // Preserved mode — drawer + page content side by side
 * <Drawer.Root placement="left" size="sm" preserved>
 *   <Drawer.Content>
 *     <Drawer.Header>Sidebar</Drawer.Header>
 *     <Drawer.Body>Nav links</Drawer.Body>
 *   </Drawer.Content>
 *   <Drawer.PageContent>
 *     <Drawer.Trigger><Button icon={Menu} /></Drawer.Trigger>
 *     <main>Page content shifts over</main>
 *   </Drawer.PageContent>
 * </Drawer.Root>
 */
export function DrawerRoot({
  children,
  open,
  onOpenChange,
  defaultOpen,
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
  /** Initial open state (uncontrolled). Default: false */
  defaultOpen?: boolean;
  /** Drawer slide-in direction. Default: 'right' */
  placement?: DrawerPlacement;
  /** Width/height preset. Default: 'md' */
  size?: DrawerSize;
  /**
   * Keep the drawer content in the DOM when closed (overlay mode only).
   * Content is hidden via visibility but not unmounted.
   * Useful for preserving scroll position. Default: false
   */
  keepMounted?: boolean;
  /**
   * Persistent sidebar mode.
   * Drawer and page content are visible simultaneously.
   * Page content shifts to make room. All React state is preserved.
   * Use `<Drawer.PageContent>` to wrap your main content.
   * Default: false
   */
  preserved?: boolean;
}) {
  return (
    <DrawerProvider
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
      placement={placement}
      size={size}
      keepMounted={keepMounted}
      preserved={preserved}
    >
      {children}
    </DrawerProvider>
  );
}
