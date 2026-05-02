import React from 'react';
import { XStack, YStack } from 'tamagui';

/**
 * Root navbar container. Provides the header layout with responsive padding.
 * Compose NavbarLogo, NavbarItems, NavbarActions, NavbarMobileMenu inside.
 *
 * @example
 * <NavbarRoot>
 *   <NavbarLogo><img src="/logo.svg" /></NavbarLogo>
 *   <NavbarDesktop>
 *     <NavbarItems items={columns} />
 *   </NavbarDesktop>
 *   <NavbarDesktop align="end">
 *     <NavbarActions actions={buttons} />
 *   </NavbarDesktop>
 *   <NavbarMobileMenu>
 *     <NavbarMobileItems items={columns} />
 *     <NavbarActions actions={buttons} />
 *   </NavbarMobileMenu>
 * </NavbarRoot>
 */
export function NavbarRoot({ children }: { children: React.ReactNode }) {
  return (
    <YStack
      alignItems="center"
      tag="header"
      $md={{ borderBottomWidth: 1, borderColor: '$color6' }}
    >
      <YStack width="100%" paddingVertical="$3" backgroundColor="$background">
        <YStack
          alignSelf="center"
          width="100%"
          paddingHorizontal="$4"
          $md={{ paddingHorizontal: '$6' }}
        >
          <XStack alignItems="center" gap="$4" flexDirection="row" flex={1}>
            <XStack alignItems="center" gap="$4" $md={{ gap: '$8' }} width="100%">
              {children}
            </XStack>
          </XStack>
        </YStack>
      </YStack>
    </YStack>
  );
}

/**
 * Desktop-only section — hidden on mobile, visible at $md+.
 * Use align="end" for right-aligned content (actions, extras).
 *
 * @example
 * <NavbarDesktop>
 *   <NavbarItems items={columns} />
 * </NavbarDesktop>
 *
 * <NavbarDesktop align="end">
 *   <ModeToggle />
 *   <NavbarActions actions={buttons} />
 * </NavbarDesktop>
 */
export function NavbarDesktop({
  children,
  align = 'start',
}: {
  children: React.ReactNode;
  align?: 'start' | 'end';
}) {
  return (
    <XStack
      alignItems="center"
      gap="$2"
      flex={align === 'start' ? 1 : undefined}
      alignSelf={align === 'end' ? 'flex-end' : undefined}
      display="none"
      $md={{ display: 'flex', gap: '$4' }}
    >
      {children}
    </XStack>
  );
}
