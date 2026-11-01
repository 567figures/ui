import React from 'react';
import { Button } from 'tamagui';
import { useDrawer } from './DrawerContext';

/**
 * A convenience component that closes the drawer when pressed.
 * Useful inside drawer content for cancel/close actions.
 *
 * @example
 * <Drawer.Close>
 *   <Button>Cancel</Button>
 * </Drawer.Close>
 */
export function DrawerClose({
  children,
  asChild = false,
}: {
  children: React.ReactNode;
  /** Clone the child element instead of wrapping. Default: false */
  asChild?: boolean;
}) {
  const { setOpen } = useDrawer();

  const handlePress = () => setOpen(false);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onPress: handlePress,
      onClick: handlePress,
    });
  }

  return (
    <Button unstyled onPress={handlePress} cursor="pointer">
      {children}
    </Button>
  );
}
