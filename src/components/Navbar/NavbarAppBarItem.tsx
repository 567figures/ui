import React from 'react';
import { styled, XStack } from 'tamagui';

// ── Styled Frame ──────────────────────────────────────────────────────

export const AppBarItemFrame = styled(XStack, {
  name: 'NavbarAppBarItemFrame',
  alignItems: 'center',

  variants: {
    density: {
      compact: { gap: '$1.5' },
      default: { gap: '$2' },
      spacious: { gap: '$3' },
    },
  } as const,

  defaultVariants: {
    density: 'default',
  },
});

// ── Component ─────────────────────────────────────────────────────────

type Justify = 'start' | 'center' | 'end';
type Density = 'compact' | 'default' | 'spacious';

/**
 * A layout slot inside AppBar. Controls positioning and mobile visibility.
 *
 * @example
 * <Navbar.AppBarItem flex={1} justify="center" hideOnMobile>
 *   <Navbar.Item>...</Navbar.Item>
 * </Navbar.AppBarItem>
 */
export function NavbarAppBarItem({
  children,
  flex,
  justify = 'start',
  hideOnMobile,
  density,
}: {
  children: React.ReactNode;
  flex?: number;
  justify?: Justify;
  hideOnMobile?: boolean;
  /** Override density for this slot. */
  density?: Density;
}) {
  const justifyMap: Record<Justify, string> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
  };

  return (
    <AppBarItemFrame
      density={density}
      flex={flex}
      justifyContent={justifyMap[justify] as any}
      {...(hideOnMobile && {
        display: 'none',
        $md: { display: 'flex' },
      })}
    >
      {children}
    </AppBarItemFrame>
  );
}
