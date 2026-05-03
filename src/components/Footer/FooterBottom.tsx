import React from 'react';
import { XStack, YStack, Text } from 'tamagui';
import { useFooter } from './FooterContext';
import type { FooterLegalLink } from './types';

const DEFAULT_LEGAL_LINKS: FooterLegalLink[] = [
  { name: 'Terms and Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
];

/**
 * Footer bottom bar with copyright and legal links.
 *
 * @example
 * <FooterBottom siteTitle="My App" />
 * <FooterBottom siteTitle="My App" legalLinks={[{ name: 'Terms', href: '/terms' }]} />
 */
export function FooterBottom({
  siteTitle,
  legalLinks = DEFAULT_LEGAL_LINKS,
  year,
}: {
  siteTitle?: string | null;
  legalLinks?: FooterLegalLink[];
  year?: number;
}) {
  const { LinkComponent } = useFooter();
  const displayYear = year ?? new Date().getFullYear();

  return (
    <YStack marginTop="$8" borderTopWidth={1} borderColor="$color6" paddingTop="$8">
      <XStack
        flexDirection="column"
        gap="$4"
        alignItems="center"
        $lg={{ flexDirection: 'row', alignItems: 'center' }}
      >
        <Text textAlign="center" $lg={{ textAlign: 'left' }} fontSize="$2" fontWeight="400">
          © {displayYear} {siteTitle}. All rights reserved.
        </Text>
        {legalLinks.length > 0 && (
          <XStack gap="$4" justifyContent="center" $lg={{ justifyContent: 'flex-start' }}>
            {legalLinks.map((link, idx) => (
              <Text
                key={`legal-${idx}`}
                hoverStyle={{ color: '$color10' }}
                fontSize="$2"
                fontWeight="400"
              >
                <LinkComponent
                  href={link.href}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {link.name}
                </LinkComponent>
              </Text>
            ))}
          </XStack>
        )}
      </XStack>
    </YStack>
  );
}
