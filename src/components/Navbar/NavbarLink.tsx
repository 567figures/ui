import React from 'react';
import { Text } from 'tamagui';
import { useNavbar } from './NavbarContext';
import type { NavbarLinkItem } from './types';

/**
 * A single top-level navigation link (no dropdown).
 *
 * @example
 * <NavbarLink item={linkData} />
 */
export function NavbarLink({ item }: { item: NavbarLinkItem }) {
  const { LinkComponent } = useNavbar();

  return (
    <LinkComponent href={item.href ?? ''} style={{ textDecoration: 'none' }}>
      <Text fontSize="$4" color="$accent10">
        {item.name}
      </Text>
    </LinkComponent>
  );
}
