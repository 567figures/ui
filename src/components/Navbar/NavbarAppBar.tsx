import React from 'react';
import { styled, XStack, YStack } from 'tamagui';
import type { GetProps } from 'tamagui';

// ── Styled Frames ─────────────────────────────────────────────────────

/** Outer wrapper — handles sticky, border, background */
export const AppBarFrame = styled(YStack, {
  name: 'NavbarAppBarFrame',
  width: '100%',
  zIndex: 50,
  borderBottomWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
});

/** Inner container — handles maxWidth, padding */
export const AppBarContainer = styled(YStack, {
  name: 'NavbarAppBarContainer',
  alignSelf: 'center',
  width: '100%',
  maxWidth: 1280,

  variants: {
    density: {
      compact: {
        paddingHorizontal: '$3',
        paddingVertical: '$2',
      },
      default: {
        paddingHorizontal: '$4',
        paddingVertical: '$3',
      },
      spacious: {
        paddingHorizontal: '$6',
        paddingVertical: '$4',
      },
    },
  } as const,

  defaultVariants: {
    density: 'default',
  },
});

/** Row inside AppBar — aligns children horizontally */
export const AppBarInner = styled(XStack, {
  name: 'NavbarAppBarInner',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',

  variants: {
    density: {
      compact: { gap: '$2' },
      default: { gap: '$4' },
      spacious: { gap: '$6' },
    },
  } as const,

  defaultVariants: {
    density: 'default',
  },
});

// ── Component ─────────────────────────────────────────────────────────

type Density = 'compact' | 'default' | 'spacious';

/**
 * Main navigation bar.
 * Supports sticky positioning with glassmorphism backdrop.
 * Uses `density` variant to control spacing.
 *
 * @example
 * <Navbar.AppBar isSticky density="spacious">
 *   <Navbar.AppBarItem>Logo</Navbar.AppBarItem>
 *   <Navbar.AppBarItem flex={1} justify="center" hideOnMobile>...</Navbar.AppBarItem>
 *   <Navbar.MobileToggle />
 * </Navbar.AppBar>
 */
export function NavbarAppBar({
  children,
  isSticky = false,
  density = 'default',
  maxWidth,
  ...rest
}: {
  children: React.ReactNode;
  /** Sticky positioning with glassmorphism. Default: false */
  isSticky?: boolean;
  /** Spacing preset. Default: 'default' */
  density?: Density;
  /** Override max content width. Default: 1280 */
  maxWidth?: number;
} & Omit<GetProps<typeof AppBarFrame>, 'children'>) {
  return (
    <AppBarFrame
      {...rest}
      style={{
        position: isSticky ? 'sticky' : 'relative',
        top: isSticky ? 0 : undefined,
        backdropFilter: isSticky ? 'blur(12px) saturate(180%)' : undefined,
        WebkitBackdropFilter: isSticky ? 'blur(12px) saturate(180%)' : undefined,
      }}
    >
      <AppBarContainer
        tag="nav"
        aria-label="Main navigation"
        density={density}
        {...(maxWidth != null && { maxWidth })}
      >
        <AppBarInner density={density}>
          {children}
        </AppBarInner>
      </AppBarContainer>
    </AppBarFrame>
  );
}
