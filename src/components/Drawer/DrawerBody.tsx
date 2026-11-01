import React from 'react';
import { ScrollView, YStack } from 'tamagui';

/**
 * Scrollable body area of the drawer.
 * Takes up remaining vertical space between Header and Footer.
 *
 * @example
 * <Drawer.Body>
 *   <YStack gap="$3">
 *     <Text>Scrollable content here...</Text>
 *   </YStack>
 * </Drawer.Body>
 */
export function DrawerBody({
  children,
  scrollable = true,
  padding = '$4',
}: {
  children: React.ReactNode;
  /** Enable scrolling. Default: true */
  scrollable?: boolean;
  /** Padding inside the body. Default: '$4' */
  padding?: string;
}) {
  if (scrollable) {
    return (
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding }}
      >
        {children}
      </ScrollView>
    );
  }

  return (
    <YStack flex={1} padding={padding as any}>
      {children}
    </YStack>
  );
}
