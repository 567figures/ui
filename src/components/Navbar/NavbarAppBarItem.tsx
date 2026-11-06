import React from 'react';
import { styled, XStack } from 'tamagui';
import { NAV_LABEL } from './navTypography';

// ── Density tokens (runtime props — styled variants alone do not emit CSS) ─

type Density = 'compact' | 'default' | 'spacious';

const GAP: Record<Density, '$1.5' | '$2' | '$3'> = {
  compact: '$1.5',
  default: '$2',
  spacious: '$3',
};

// ── Styled Frame ──────────────────────────────────────────────────────

export const AppBarItemFrame = styled(XStack, {
  name: 'NavbarAppBarItemFrame',
  alignItems: 'center',
  gap: '$2',
  fontFamily: NAV_LABEL.fontFamily,
  fontSize: NAV_LABEL.fontSize,
  fontWeight: NAV_LABEL.fontWeight,

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

/**
 * A layout slot inside AppBar. Controls positioning and mobile visibility.
 * Baseline typography `$body` / `$4` / `400` for plain text / Dropdown siblings.
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
  const resolved = density ?? 'default';
  const justifyMap: Record<Justify, string> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
  };

  return (
    <AppBarItemFrame
      density={resolved}
      gap={GAP[resolved]}
      flex={flex}
      justifyContent={justifyMap[justify] as any}
      fontFamily={NAV_LABEL.fontFamily}
      fontSize={NAV_LABEL.fontSize}
      fontWeight={NAV_LABEL.fontWeight}
      {...(hideOnMobile && {
        display: 'none',
        $md: { display: 'flex' },
      })}
    >
      {children}
    </AppBarItemFrame>
  );
}
