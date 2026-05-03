import React from 'react';
import { XStack, Text } from 'tamagui';
import { useFooter } from './FooterContext';
import type { FooterSocialLinks } from './types';

const SOCIAL_PLATFORMS = [
  'instagram',
  'facebook',
  'twitter',
  'linkedin',
  'youtube',
] as const;

/**
 * Social media icons row. Uses context's renderSocialIcon to render platform icons.
 *
 * @example
 * <FooterSocials socialLinks={{ instagram: "https://...", facebook: "https://..." }} />
 */
export function FooterSocials({ socialLinks }: { socialLinks?: FooterSocialLinks | null }) {
  const { LinkComponent, renderSocialIcon } = useFooter();

  if (!socialLinks) return null;

  const links = SOCIAL_PLATFORMS
    .map((platform) => ({
      platform,
      url: socialLinks[platform],
      label: platform.charAt(0).toUpperCase() + platform.slice(1),
    }))
    .filter((link) => link.url);

  if (links.length === 0) return null;

  return (
    <XStack alignItems="center" gap="$6">
      {links.map(({ platform, url, label }, idx) => (
        <LinkComponent
          key={`social-link-${platform}-${idx}`}
          href={url ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          style={{ display: 'flex' }}
        >
          <Text color="$accent10">
            {renderSocialIcon ? renderSocialIcon(platform) : platform}
          </Text>
        </LinkComponent>
      ))}
    </XStack>
  );
}
