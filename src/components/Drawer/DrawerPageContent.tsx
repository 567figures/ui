import React from 'react';
import { YStack } from 'tamagui';
import { useDrawer } from './DrawerContext';
import type { DrawerSize } from './types';

// ── Size map ──────────────────────────────────────────────────────────

const SIZE_MAP: Record<DrawerSize, number | string> = {
  sm: 280,
  md: 380,
  lg: 520,
  xl: 700,
  full: '100%',
};

/**
 * Wrapper for the main page content that sits alongside the drawer.
 * In `preserved` mode, this component shrinks/shifts to make room for the drawer.
 * In default/keepMounted mode, this renders children as-is (drawer overlays on top).
 *
 * @example
 * <Drawer.Root placement="left" preserved>
 *   <Drawer.Content>
 *     <Drawer.Header>Navigation</Drawer.Header>
 *     <Drawer.Body>...</Drawer.Body>
 *   </Drawer.Content>
 *   <Drawer.PageContent>
 *     <YStack padding="$4">
 *       <Text>Main page content — shifts when drawer opens</Text>
 *     </YStack>
 *   </Drawer.PageContent>
 * </Drawer.Root>
 */
export function DrawerPageContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open, preserved, placement, size } = useDrawer();

  // In non-preserved mode, just render children — drawer is an overlay
  if (!preserved) {
    return <>{children}</>;
  }

  // In preserved mode, apply margin to push content away from drawer
  const dimension = SIZE_MAP[size];
  const isHorizontal = placement === 'left' || placement === 'right';

  const marginStyle: Record<string, any> = {};

  if (open && isHorizontal) {
    if (placement === 'left') {
      marginStyle.marginLeft = dimension;
    } else {
      marginStyle.marginRight = dimension;
    }
  } else if (open && !isHorizontal) {
    if (placement === 'top') {
      marginStyle.marginTop = dimension;
    } else {
      marginStyle.marginBottom = dimension;
    }
  }

  return (
    <YStack
      flex={1}
      overflow="hidden"
      style={{
        ...marginStyle,
        transition: 'margin 0.3s cubic-bezier(0.32, 0.72, 0, 1)',
      }}
    >
      {children}
    </YStack>
  );
}
