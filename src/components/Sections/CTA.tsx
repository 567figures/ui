import React from 'react';
import { View, YStack, XStack, H2 } from 'tamagui';
import { useSections } from './SectionsContext';
import type { SectionButton } from './types';

export interface CTAProps {
  title?: string | null;
  eyebrow?: string | null;
  richText?: any[] | null;
  buttons?: SectionButton[] | null;
  /** Override the default Chip/eyebrow renderer */
  renderEyebrow?: (eyebrow: string) => React.ReactNode;
}

export function CTA({
  title,
  eyebrow,
  richText,
  buttons,
  renderEyebrow,
}: CTAProps) {
  const { renderRichText, renderButtons } = useSections();

  return (
    <View
      id="features"
      marginTop="$4"
      $md={{ marginVertical: '$6', paddingHorizontal: '$6' }}
      paddingHorizontal="$4"
      tag="section"
    >
      <YStack
        id="cta-content"
        backgroundColor="$accentBackground"
        paddingVertical="$10"
        borderRadius={24}
        paddingHorizontal="$4"
      >
        <YStack
          alignItems="center"
          marginHorizontal="auto"
          gap="$8"
        >
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
          <H2 textAlign="center">
            {title}
          </H2>
          {renderRichText && richText && renderRichText(richText, 'text-balance')}
          <XStack justifyContent="center">
            {renderButtons && renderButtons(buttons ?? null)}
          </XStack>
        </YStack>
      </YStack>
    </View>
  );
}
