import React, { useEffect, useMemo } from 'react';
import { ChevronDown } from '@tamagui/lucide-icons';
import { Popover, Square, XStack } from 'tamagui';
import { useDropdownContext } from './NavbarDropdown';
import { NAV_LABEL, withNavTypography } from './navTypography';

/**
 * Trigger button for the dropdown.
 * Renders children + animated chevron icon that rotates on open.
 * Defaults children to `$body` / `$4` / `400` (overridable per child).
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
  const labeled = useMemo(() => withNavTypography(children), [children]);

  useEffect(() => {
    setTriggerLabel(labeled);
  }, [labeled, setTriggerLabel]);

  return (
    <Popover.Trigger asChild>
      <XStack
        alignItems="center"
        gap="$1"
        cursor="pointer"
        aria-expanded={open}
        aria-haspopup="true"
        fontFamily={NAV_LABEL.fontFamily}
        fontSize={NAV_LABEL.fontSize}
        fontWeight={NAV_LABEL.fontWeight}
      >
        {labeled}
        <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
          <ChevronDown size={14} />
        </Square>
      </XStack>
    </Popover.Trigger>
  );
}
