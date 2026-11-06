import React, { useEffect, useId, useMemo } from 'react';
import { styled, XStack } from 'tamagui';
import { useNavbar } from './NavbarContext';
import { NAV_LABEL, withNavTypography } from './navTypography';

// ── Density tokens (runtime props — styled variants alone do not emit CSS) ─

type Density = 'compact' | 'default' | 'spacious';

const PADDING_X: Record<Density, '$1' | '$2' | '$3'> = {
  compact: '$1',
  default: '$2',
  spacious: '$3',
};

// ── Styled Frame ──────────────────────────────────────────────────────

export const ItemFrame = styled(XStack, {
  name: 'NavbarItemFrame',
  alignItems: 'center',
  paddingHorizontal: '$2',
  fontFamily: NAV_LABEL.fontFamily,
  fontSize: NAV_LABEL.fontSize,
  fontWeight: NAV_LABEL.fontWeight,

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

/**
 * A generic item slot. Adds spacing between items.
 * Automatically registers children for the mobile menu.
 * Defaults children to `$body` / `$4` / `400` (overridable per child).
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
  const resolved = density ?? 'default';
  const labeled = useMemo(() => withNavTypography(children), [children]);

  // Capture order during first render to preserve DOM order
  const orderRef = React.useRef<number | null>(null);
  if (orderRef.current === null) {
    orderRef.current = getOrderNumber(id);
  }

  useEffect(() => {
    const unregister = registerNavItem({ id, node: labeled });
    return unregister;
  }, [id, labeled, registerNavItem]);

  return (
    <ItemFrame
      density={resolved}
      paddingHorizontal={PADDING_X[resolved]}
      fontFamily={NAV_LABEL.fontFamily}
      fontSize={NAV_LABEL.fontSize}
      fontWeight={NAV_LABEL.fontWeight}
    >
      {labeled}
    </ItemFrame>
  );
}
