import React, { useEffect, useId } from 'react';
import { styled, XStack } from 'tamagui';
import { useNavbar } from './NavbarContext';

// ── Styled Frame ──────────────────────────────────────────────────────

export const ItemFrame = styled(XStack, {
  name: 'NavbarItemFrame',
  alignItems: 'center',

  variants: {
    density: {
      compact: { paddingHorizontal: '$1' },
      default: { paddingHorizontal: '$2' },
      spacious: { paddingHorizontal: '$3' },
    },
  } as const,

  defaultVariants: {
    density: 'default',
  },
});

// ── Component ─────────────────────────────────────────────────────────

type Density = 'compact' | 'default' | 'spacious';

/**
 * A generic item slot. Adds spacing between items.
 * Automatically registers children for the mobile menu.
 *
 * @example
 * <Navbar.Item><Anchor href="/pricing">Pricing</Anchor></Navbar.Item>
 * <Navbar.Item density="compact"><ThemeSwitcher /></Navbar.Item>
 */
export function NavbarItem({
  children,
  density,
}: {
  children: React.ReactNode;
  /** Override density for this item. */
  density?: Density;
}) {
  const id = useId();
  const { registerNavItem, getOrderNumber } = useNavbar();

  // Capture order during first render to preserve DOM order
  const orderRef = React.useRef<number | null>(null);
  if (orderRef.current === null) {
    orderRef.current = getOrderNumber(id);
  }

  useEffect(() => {
    const unregister = registerNavItem({ id, node: children });
    return unregister;
  }, [id, children, registerNavItem]);

  return (
    <ItemFrame density={density}>
      {children}
    </ItemFrame>
  );
}
