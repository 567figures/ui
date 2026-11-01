import React from 'react';
import { Button } from 'tamagui';
import { useDrawer } from './DrawerContext';

/**
 * Trigger button that opens the drawer.
 * Renders children as the trigger content.
 * If children is a single element, it will be cloned with onPress handler.
 * Otherwise wraps in a transparent Button.
 *
 * @example
 * <Drawer.Trigger>
 *   <Button>Open Drawer</Button>
 * </Drawer.Trigger>
 */
export function DrawerTrigger({
  children,
  asChild = false,
}: {
  children: React.ReactNode;
  /** Clone the child element instead of wrapping. Default: false */
  asChild?: boolean;
}) {
  const { setOpen } = useDrawer();

  const handlePress = () => setOpen(true);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onPress: handlePress,
      onClick: handlePress,
    });
  }

  return (
    <Button
      unstyled
      onPress={handlePress}
      aria-haspopup="dialog"
      cursor="pointer"
    >
      {children}
    </Button>
  );
}
