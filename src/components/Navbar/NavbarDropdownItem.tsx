import React, { useEffect, useId } from 'react';
import { useDropdownContext } from './NavbarDropdown';

/**
 * A wrapper for items inside a dropdown.
 * Registers children for the mobile accordion menu.
 * Renders children as-is on desktop — compose any layout inside.
 *
 * @example
 * <Navbar.DropdownItem>
 *   <ListItem icon={BarChart3} title="Analytics" subTitle="Track metrics" />
 * </Navbar.DropdownItem>
 */
export function NavbarDropdownItem({
  children,
}: {
  children: React.ReactNode;
}) {
  const itemId = useId();
  const { registerItem } = useDropdownContext();

  useEffect(() => {
    const unregister = registerItem({ id: itemId, node: children });
    return unregister;
  }, [itemId, children, registerItem]);

  return <>{children}</>;
}
