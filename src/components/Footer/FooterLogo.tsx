import React from 'react';
import { XStack, Text } from 'tamagui';
import { YStack } from 'tamagui';

/**
 * Footer logo area. Wrap any logo component (image, SVG, etc.).
 *
 * @example
 * <FooterLogo>
 *   <img src="/logo.svg" alt="My App" />
 * </FooterLogo>
 */
export function FooterLogo({ children }: { children: React.ReactNode }) {
  return (
    <XStack alignItems="center" justifyContent="center" gap="$4" $lg={{ justifyContent: 'flex-start' }}>
      {children}
    </XStack>
  );
}

/**
 * Footer subtitle text below the logo.
 *
 * @example
 * <FooterSubtitle text="Building the future of web" />
 */
export function FooterSubtitle({ text }: { text?: string | null }) {
  if (!text) return null;
  return (
    <Text marginTop="$6" fontSize="$2" color="$accent10">
      {text}
    </Text>
  );
}
