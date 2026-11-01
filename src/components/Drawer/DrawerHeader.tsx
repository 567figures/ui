import React from 'react';
import { X } from '@tamagui/lucide-icons';
import { Button, Text, XStack } from 'tamagui';
import { useDrawer } from './DrawerContext';

/**
 * Drawer header with title and close button.
 * Renders a horizontal bar at the top of the drawer content.
 *
 * @example
 * <Drawer.Header>Settings</Drawer.Header>
 *
 * @example
 * <Drawer.Header showClose={false}>
 *   <XStack alignItems="center" gap="$2">
 *     <Settings size={18} />
 *     <Text>Settings</Text>
 *   </XStack>
 * </Drawer.Header>
 */
export function DrawerHeader({
  children,
  showClose = true,
}: {
  children: React.ReactNode;
  /** Show close button. Default: true */
  showClose?: boolean;
}) {
  const { setOpen } = useDrawer();

  return (
    <XStack
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="$4"
      paddingVertical="$3"
      borderBottomWidth={1}
      borderColor="$borderColor"
      flexShrink={0}
    >
      {typeof children === 'string' ? (
        <Text fontSize="$5" fontWeight="600" color="$color12">
          {children}
        </Text>
      ) : (
        children
      )}

      {showClose && (
        <Button
          circular
          chromeless
          size="$3"
          onPress={() => setOpen(false)}
          aria-label="Close drawer"
          focusVisibleStyle={{
            outlineWidth: 2,
            outlineColor: '$color8',
            outlineStyle: 'solid',
            outlineOffset: 2,
          }}
        >
          <Button.Icon>
            <X size={18} />
          </Button.Icon>
        </Button>
      )}
    </XStack>
  );
}
