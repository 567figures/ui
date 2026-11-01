import React, { useEffect } from 'react';
import { ChevronDown } from '@tamagui/lucide-icons';
import { Popover, Square, XStack } from 'tamagui';
import { useDropdownContext } from './NavbarDropdown';

/**
 * Trigger button for the dropdown.
 * Renders children + animated chevron icon that rotates on open.
 *
 * @example
 * <Navbar.DropdownTrigger>
 *   <Button chromeless>Products</Button>
 * </Navbar.DropdownTrigger>
 */
export function NavbarDropdownTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open, setTriggerLabel } = useDropdownContext();

  useEffect(() => {
    setTriggerLabel(children);
  }, [children, setTriggerLabel]);

  return (
    <Popover.Trigger asChild>
      <XStack
        alignItems="center"
        gap="$1"
        cursor="pointer"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {children}
        <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
          <ChevronDown size={14} />
        </Square>
      </XStack>
    </Popover.Trigger>
  );
}
