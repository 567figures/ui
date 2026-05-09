import React from 'react';
import { YStack, XStack, View, H1 } from 'tamagui';
import { useSections } from './SectionsContext';
import type { SectionButton, SectionImage } from './types';

export interface HeroProps {
  title?: string | null;
  badge?: string | null;
  richText?: any[] | null;
  image?: SectionImage | null;
  buttons?: SectionButton[] | null;
  /** Override the default Chip/badge renderer */
  renderBadge?: (badge: string) => React.ReactNode;
}

export function Hero({
  title,
  badge,
  richText,
  image,
  buttons,
  renderBadge,
}: HeroProps) {
  const { renderRichText, renderImage, renderButtons } = useSections();
  const width = image ? '50%' : '100%';

  return (
    <View
      id="hero"
      marginTop="$4"
      $md={{ marginVertical: '$6', paddingHorizontal: '$6' }}
      paddingHorizontal="$4"
      maxWidth={1200}
      tag="section"
    >
      <XStack
        id="hero-content"
        alignItems="center"
        gap="$8"
        flexDirection="column"
        $lg={{ flexDirection: 'row' }}
      >
        <YStack
          gap="$4"
          alignItems="center"
          justifyContent="center"
          flex={1}
          flexShrink={1}
          $lg={{ alignItems: 'flex-start', justifyContent: 'flex-start', width }}
          minWidth={0}
        >
          {badge && (
            renderBadge ? renderBadge(badge) : (
              <View
                backgroundColor="$color4"
                borderRadius={999}
                paddingHorizontal="$3"
                paddingVertical="$1"
              >
                <span style={{ color: 'var(--color9, #666)', fontSize: 12 }}>{badge}</span>
              </View>
            )
          )}

          <YStack gap="$4" alignItems="center" $lg={{ alignItems: 'flex-start' }}>
            <H1
              textAlign="center"
              $lg={{ textAlign: 'left' }}
            >
              {title}
            </H1>
            {renderRichText && richText && renderRichText(richText, 'text-base md:text-lg font-normal')}
          </YStack>
          {renderButtons && renderButtons(buttons ?? null)}
        </YStack>

        <YStack
          flex={1}
          flexShrink={1}
          $lg={{ width }}
          minWidth={0}
          height="$20"
          width="100%"
          borderRadius="$4"
          overflow="hidden"
        >
          {image && renderImage && renderImage({
            asset: image,
            loading: 'eager',
            width: 800,
            height: 800,
            priority: true,
            quality: 80,
            className: 'max-h-96 w-full rounded-3xl object-cover',
          })}
        </YStack>
      </XStack>
    </View>
  );
}
