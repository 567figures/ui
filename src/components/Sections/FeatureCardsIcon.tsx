import React from 'react';
import { View, YStack, XStack, Card, H2, H3 } from 'tamagui';
import { useSections } from './SectionsContext';
import type { SectionFeatureCard } from './types';

export interface FeatureCardsIconProps {
  title?: string | null;
  eyebrow?: string | null;
  richText?: any[] | null;
  cards?: SectionFeatureCard[] | null;
  /** Override the default Chip/eyebrow renderer */
  renderEyebrow?: (eyebrow: string) => React.ReactNode;
}

function FeatureCard({ card }: { card: SectionFeatureCard }) {
  const { renderRichText, renderIcon } = useSections();
  const { icon, title, richText } = card ?? {};

  return (
    <Card elevate size="$4" bordered width="100%" $md={{ width: '30%' }}>
      <Card.Header padded>
        {renderIcon && icon && renderIcon(icon)}
        <H3>{title}</H3>
      </Card.Header>
      <Card.Footer paddingHorizontal="$4">
        {renderRichText && renderRichText(
          richText,
          'font-normal text-sm md:text-[16px] text-black/90 leading-7 text-balance dark:text-neutral-300'
        )}
      </Card.Footer>
    </Card>
  );
}

export function FeatureCardsIcon({
  title,
  eyebrow,
  richText,
  cards,
  renderEyebrow,
}: FeatureCardsIconProps) {
  const { renderRichText } = useSections();

  return (
    <YStack
      id="features"
      marginTop="$4"
      $md={{ marginVertical: '$6', paddingHorizontal: '$6' }}
      paddingHorizontal="$4"
      maxWidth={1200}
      tag="section"
    >
      <YStack alignSelf="center" id="feature-content">
        <YStack width="100%" alignItems="center">
          <YStack alignItems="center" gap="$4" $sm={{ gap: '$6' }}>
            {eyebrow && (
              renderEyebrow ? renderEyebrow(eyebrow) : (
                <View
                  backgroundColor="$color4"
                  borderRadius={999}
                  paddingHorizontal="$3"
                  paddingVertical="$1"
                >
                  <span style={{ color: 'var(--color9, #666)', fontSize: 12 }}>{eyebrow}</span>
                </View>
              )
            )}
            <H2 textAlign="center" $lg={{ textAlign: 'left' }}>{title}</H2>
            {renderRichText && richText && renderRichText(richText, 'text-base md:text-lg text-balance max-w-3xl')}
          </YStack>
        </YStack>
        <XStack
          marginTop="$10"
          gap="$8"
          flexWrap="wrap"
          justifyContent="center"
          $lg={{ justifyContent: 'flex-start' }}
        >
          {cards?.map((card, index) => (
            <FeatureCard card={card} key={card._key ?? index} />
          ))}
        </XStack>
      </YStack>
    </YStack>
  );
}
