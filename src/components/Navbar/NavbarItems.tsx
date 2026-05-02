import React from 'react';
import type { NavbarItem } from './types';
import { NavbarDropdown } from './NavbarDropdown';
import { NavbarLink } from './NavbarLink';

/**
 * Renders a list of nav items — auto-selects dropdown or link based on item.type.
 * Use this for the desktop navigation row.
 *
 * @example
 * <NavbarItems items={columns} />
 */
export function NavbarItems({ items }: { items?: NavbarItem[] | null }) {
  if (!items?.length) return null;

  return (
    <>
      {items.map((item) =>
        item.type === 'column' ? (
          <NavbarDropdown key={item._key} column={item} />
        ) : (
          <NavbarLink key={item._key} item={item} />
        )
      )}
    </>
  );
}
