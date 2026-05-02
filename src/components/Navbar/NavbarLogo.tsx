import React from 'react';
import { XStack } from 'tamagui';
import { useNavbar } from './NavbarContext';

/**
 * Navbar logo area. Wrap any logo component.
 *
 * @example
 * <NavbarLogo>
 *   <img src="/logo.svg" alt="My App" />
 * </NavbarLogo>
 */
export function NavbarLogo({ children }: { children: React.ReactNode }) {
  return (
    <XStack alignItems="center" gap="$2" $md={{ gap: '$4' }} flex={1}>
      {children}
    </XStack>
  );
}
