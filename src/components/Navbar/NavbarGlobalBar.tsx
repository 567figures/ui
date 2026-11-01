import React from 'react';
import { styled, XStack, YStack } from 'tamagui';

// ── Styled Frames ─────────────────────────────────────────────────────

export const GlobalBarFrame = styled(YStack, {
  name: 'NavbarGlobalBarFrame',
  width: '100%',
  backgroundColor: '$color2',
  borderBottomWidth: 1,
  borderColor: '$borderColor',
  display: 'none',
  $md: { display: 'flex' },
});

export const GlobalBarInner = styled(XStack, {
  name: 'NavbarGlobalBarInner',
  alignSelf: 'center',
  width: '100%',
  maxWidth: 1280,
  alignItems: 'center',
  justifyContent: 'space-between',

  variants: {
    density: {
      compact: {
        paddingHorizontal: '$3',
        paddingVertical: '$1',
        gap: '$1.5',
      },
      default: {
        paddingHorizontal: '$4',
        paddingVertical: '$1.5',
        gap: '$2',
      },
      spacious: {
        paddingHorizontal: '$6',
        paddingVertical: '$2',
        gap: '$3',
      },
    },
  } as const,

  defaultVariants: {
    density: 'default',
  },
});

// ── Component ───��─────────────────────────────────────────────────────

type Density = 'compact' | 'default' | 'spacious';

/**
 * Optional top utility bar above the main navigation.
 * Never sticky — scrolls away with the page.
 * Hidden on mobile, visible from $md breakpoint.
 *
 * @example
 * <Navbar.GlobalBar density="compact">
 *   <XStack gap="$2">
 *     <Navbar.Item><Anchor href="/shop">Shop</Anchor></Navbar.Item>
 *   </XStack>
 * </Navbar.GlobalBar>
 */
export function NavbarGlobalBar({
  children,
  density = 'default',
}: {
  children: React.ReactNode;
  /** Spacing preset. Default: 'default' */
  density?: Density;
}) {
  return (
    <GlobalBarFrame>
      <GlobalBarInner density={density}>
        {children}
      </GlobalBarInner>
    </GlobalBarFrame>
  );
}
