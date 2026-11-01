import React from 'react';
import { Menu } from '@tamagui/lucide-icons';
import { Button, XStack } from 'tamagui';
import { useNavbar } from './NavbarContext';

/**
 * Hamburger toggle button. Visible only on mobile (below $md).
 * Automatically rendered by NavbarRoot — no need to use directly.
 */
export function NavbarMobileToggle() {
  const { setMobileOpen } = useNavbar();

  return (
    <XStack
      alignItems="center"
      display="flex"
      $md={{ display: 'none' }}
    >
      <Button
        circular
        chromeless
        size="$3"
        onPress={() => setMobileOpen(true)}
        aria-label="Open navigation menu"
        focusVisibleStyle={{
          outlineWidth: 2,
          outlineColor: '$color8',
          outlineStyle: 'solid',
          outlineOffset: 2,
        }}
      >
        <Button.Icon>
          <Menu size={20} />
        </Button.Icon>
      </Button>
    </XStack>
  );
}
