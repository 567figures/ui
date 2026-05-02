import React, { useState } from 'react';
import { Menu } from '@tamagui/lucide-icons';
import { Button, Sheet, XStack, YStack } from 'tamagui';

/**
 * Mobile hamburger menu with a bottom sheet.
 * Compose any content inside — typically NavbarMobileItems + NavbarActions.
 *
 * @example
 * <NavbarMobileMenu>
 *   <NavbarMobileItems items={columns} />
 *   <NavbarActions actions={buttons} />
 * </NavbarMobileMenu>
 */
export function NavbarMobileMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <XStack
      alignItems="center"
      gap="$2"
      alignSelf="flex-end"
      display="flex"
      $md={{ display: 'none' }}
    >
      <Button circular chromeless onPress={() => setOpen(true)}>
        <Button.Icon>
          <Menu size="$1" />
        </Button.Icon>
      </Button>
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[75]}
        position={0}
        dismissOnSnapToBottom
        animation="medium"
      >
        <Sheet.Overlay
          animation="lazy"
          backgroundColor="$shadow6"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Frame padding="$4">
          <YStack gap="$4" paddingTop="$4">
            {children}
          </YStack>
        </Sheet.Frame>
      </Sheet>
    </XStack>
  );
}
