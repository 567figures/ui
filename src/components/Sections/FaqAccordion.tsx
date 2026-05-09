import React from 'react';
import { Accordion, YStack, XStack, H2, Text, View } from 'tamagui';
import { useSections } from './SectionsContext';
import type { SectionFaqItem, SectionLink } from './types';

export interface FaqAccordionProps {
  title?: string | null;
  eyebrow?: string | null;
  subtitle?: string | null;
  faqs?: SectionFaqItem[] | null;
  link?: SectionLink | null;
  /** Override the default Chip/eyebrow renderer */
  renderEyebrow?: (eyebrow: string) => React.ReactNode;
  /** Render a link arrow icon */
  renderArrowIcon?: () => React.ReactNode;
  /** Render structured data (JSON-LD) for FAQs */
  renderJsonLd?: (faqs: SectionFaqItem[]) => React.ReactNode;
}

export function FaqAccordionSection({
  title,
  eyebrow,
  subtitle,
  faqs,
  link,
  renderEyebrow,
  renderArrowIcon,
  renderJsonLd,
}: FaqAccordionProps) {
  const { renderRichText, LinkComponent } = useSections();
  const Link = LinkComponent ?? 'a';

  return (
    <View
      id="faq"
      marginTop="$4"
      $md={{ marginVertical: '$6', paddingHorizontal: '$6' }}
      paddingHorizontal="$4"
      maxWidth={1200}
      tag="section"
    >
      {renderJsonLd && faqs && renderJsonLd(faqs)}
      <View maxWidth={1200} width="100%" marginHorizontal="auto" id="faq-content">
        <YStack alignItems="center" marginHorizontal="auto" gap="$8" width="100%">
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
          <H2 textAlign="center">{title}</H2>
          {subtitle && <Text>{subtitle}</Text>}
          <Accordion type="single" collapsible width="100%">
            {faqs?.map((faq, index) => (
              <Accordion.Item value={faq._id} key={`AccordionItem-${faq._id}-${index}`}>
                <Accordion.Header width="100%">
                  <Accordion.Trigger>{faq.title}</Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  {renderRichText && renderRichText(faq.richText ?? [], 'text-sm md:text-base')}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion>
          {link?.href && (
            <YStack width="100%" paddingVertical="$6">
              <Text marginBottom="$2" fontSize="$2" color="$accent10">{link.title}</Text>
              <Link
                href={link.href ?? '#'}
                target={link.openInNewTab ? '_blank' : '_self'}
                style={{ textDecoration: 'none' }}
              >
                <XStack alignItems="center" gap="$2">
                  <Text fontSize="$4" fontWeight="500">{link.description}</Text>
                  {renderArrowIcon ? renderArrowIcon() : (
                    <YStack borderRadius={9999} borderWidth={1} padding={4}>
                      <span style={{ fontSize: 14 }}>↗</span>
                    </YStack>
                  )}
                </XStack>
              </Link>
            </YStack>
          )}
        </YStack>
      </View>
    </View>
  );
}
