import React from 'react';
import { YStack } from 'tamagui';
import { useDrawer } from './DrawerContext';

/**
 * Semi-transparent backdrop overlay.
 * Clicking it closes the drawer.
 *
 * In `preserved` mode this component renders nothing — the drawer
 * is a persistent sidebar with no overlay.
 *
 * @example
 * <Drawer.Overlay />
 */
export function DrawerOverlay() {
  const { open, setOpen, keepMounted, preserved } = useDrawer();

  // Preserved mode = persistent sidebar, no overlay needed
  if (preserved) return null;

  // Don't render if not open and not keepMounted
  if (!open && !keepMounted) return null;

  return (
    <YStack
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={99}
      backgroundColor="rgba(0, 0, 0, 0.5)"
      opacity={open ? 1 : 0}
      pointerEvents={open ? 'auto' : 'none'}
      onPress={() => setOpen(false)}
      animation="quick"
      enterStyle={{ opacity: 0 }}
      exitStyle={{ opacity: 0 }}
      aria-hidden={!open}
      {...(!open && keepMounted && { display: 'none' })}
      style={{
        position: 'fixed',
        inset: 0,
      }}
    />
  );
}
