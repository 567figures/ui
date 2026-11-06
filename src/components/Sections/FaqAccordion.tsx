import React, { useId } from 'react';
import { Accordion, YStack, XStack, H2, H3, Text, View } from 'tamagui';

export interface FaqRootProps {
  children: React.ReactNode;
  id?: string;
}

export function FaqRoot({ children, id = 'faq' }: FaqRootProps) {
  return (
    <View
      id={id}
      marginTop="$4"
      $md={{ marginVertical: '$6', paddingHorizontal: '$6' }}
      paddingHorizontal="$4"
      maxWidth={1200}
      width="100%"
      alignSelf="center"
      tag="section"
    >
      <YStack alignItems="center" marginHorizontal="auto" gap="$8" width="100%" id={`${id}-content`}>
        {children}
      </YStack>
    </View>
  );
}

export function FaqHeader({ children }: { children: React.ReactNode }) {
  return (
    <YStack alignItems="center" gap="$3" width="100%">
      {children}
    </YStack>
  );
}

export function FaqEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <View backgroundColor="$color4" borderRadius={999} paddingHorizontal="$3" paddingVertical="$1">
      {children}
    </View>
  );
}

export function FaqTitle({ children }: { children: React.ReactNode }) {
  return <H2 textAlign="center">{children}</H2>;
}

export function FaqSubtitle({ children }: { children: React.ReactNode }) {
  return <Text textAlign="center" color="$color10">{children}</Text>;
}

/** Optional category group — wrap GroupTitle + Items */
export function FaqGroup({ children }: { children: React.ReactNode }) {
  return (
    <YStack width="100%" gap="$3">
      {children}
    </YStack>
  );
}

export function FaqGroupTitle({ children }: { children: React.ReactNode }) {
  return (
    <H3
      fontSize="$2"
      letterSpacing={1}
      textTransform="uppercase"
      color="$color10"
      marginTop="$4"
      marginBottom="$2"
    >
      {children}
    </H3>
  );
}

/** Accordion list shell — wrap Faq.Item children */
export function FaqList({
  children,
  type = 'single',
}: {
  children: React.ReactNode;
  type?: 'single' | 'multiple';
}) {
  return (
    <Accordion type={type} collapsible={type === 'single'} width="100%">
      {children}
    </Accordion>
  );
}

export function FaqItem({
  children,
  value,
}: {
  children: React.ReactNode;
  /** Accordion value; auto-generated if omitted */
  value?: string;
}) {
  const autoId = useId();
  const childArray = React.Children.toArray(children);
  const trigger = childArray.find(
    (c) => React.isValidElement(c) && (c.type as { displayName?: string }).displayName === 'FaqTrigger',
  );
  const content = childArray.find(
    (c) => React.isValidElement(c) && (c.type as { displayName?: string }).displayName === 'FaqContent',
  );

  return (
    <Accordion.Item value={value ?? autoId} width="100%">
      <Accordion.Header width="100%">
        <Accordion.Trigger
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingVertical="$4"
          paddingHorizontal="$2"
          minHeight={48}
          borderBottomWidth={1}
          borderColor="$borderColor"
          backgroundColor="transparent"
          width="100%"
        >
          {trigger}
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content paddingVertical="$3" paddingHorizontal="$2">
        {content}
      </Accordion.Content>
    </Accordion.Item>
  );
}

export function FaqTrigger({ children }: { children: React.ReactNode }) {
  return (
    <XStack flex={1} justifyContent="space-between" alignItems="center" gap="$3" width="100%">
      <Text fontSize="$4" fontWeight="500" color="$color12" textAlign="left" flex={1}>
        {children}
      </Text>
      <Text fontSize="$5" color="$color10">
        +
      </Text>
    </XStack>
  );
}
FaqTrigger.displayName = 'FaqTrigger';

export function FaqContent({ children }: { children: React.ReactNode }) {
  return <YStack gap="$2">{children}</YStack>;
}
FaqContent.displayName = 'FaqContent';

export function FaqLink({ children }: { children: React.ReactNode }) {
  return (
    <YStack width="100%" paddingVertical="$4">
      {children}
    </YStack>
  );
}

export const Faq = {
  Root: FaqRoot,
  Header: FaqHeader,
  Eyebrow: FaqEyebrow,
  Title: FaqTitle,
  Subtitle: FaqSubtitle,
  Group: FaqGroup,
  GroupTitle: FaqGroupTitle,
  List: FaqList,
  Item: FaqItem,
  Trigger: FaqTrigger,
  Content: FaqContent,
  Link: FaqLink,
} as const;

/** @deprecated Use `Faq` compound */
export const FaqAccordion = Faq;
