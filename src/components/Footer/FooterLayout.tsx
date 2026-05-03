import React from 'react';
import { XStack, YStack } from 'tamagui';

/**
 * Root footer container. Provides the footer layout with responsive padding.
 * Compose FooterLogo, FooterSocials, FooterColumns, FooterBottom inside.
 *
 * @example
 * <FooterRoot>
 *   <FooterContent>
 *     <FooterBrand>
 *       <FooterLogo>...</FooterLogo>
 *       <FooterSocials ... />
 *     </FooterBrand>
 *     <FooterColumns columns={columns} />
 *   </FooterContent>
 *   <FooterBottom siteTitle="My App" />
 * </FooterRoot>
 */
export function FooterRoot({ children }: { children: React.ReactNode }) {
  return (
    <YStack tag="footer" marginTop="$12" paddingBottom="$8" backgroundColor="$background">
      <YStack tag="section" alignSelf="center" width="100%" paddingHorizontal="$4">
        <YStack minHeight={500} $lg={{ minHeight: 'auto' }}>
          {children}
        </YStack>
      </YStack>
    </YStack>
  );
}

/**
 * Main content area of the footer — holds brand section and columns side by side.
 * Stacks vertically on mobile, horizontally on desktop.
 *
 * @example
 * <FooterContent>
 *   <FooterBrand>...</FooterBrand>
 *   <FooterColumns columns={columns} />
 * </FooterContent>
 */
export function FooterContent({ children }: { children: React.ReactNode }) {
  return (
    <XStack
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      gap="$10"
      $lg={{ flexDirection: 'row' }}
    >
      {children}
    </XStack>
  );
}

/**
 * Brand section — holds logo, subtitle, and social icons.
 * Centered on mobile, left-aligned on desktop.
 *
 * @example
 * <FooterBrand>
 *   <FooterLogo><img src="/logo.svg" /></FooterLogo>
 *   <FooterSubtitle text="Building the future" />
 *   <FooterSocials socialLinks={socialLinks} />
 * </FooterBrand>
 */
export function FooterBrand({ children }: { children: React.ReactNode }) {
  return (
    <YStack
      width="100%"
      maxWidth={384}
      flexShrink={1}
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      gap="$6"
      $md={{ gap: '$8' }}
      $lg={{ alignItems: 'flex-start' }}
    >
      {children}
    </YStack>
  );
}
