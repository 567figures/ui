import React, { createContext, useContext } from 'react';
import { View, YStack, XStack, H2, H3, Text } from 'tamagui';
import { useSections } from './SectionsContext';

const InCardContext = createContext(false);

export interface ImageLinkCardsRootProps {
  children: React.ReactNode;
  id?: string;
}

export function ImageLinkCardsRoot({ children, id = 'image-link-cards' }: ImageLinkCardsRootProps) {
  return (
    <YStack
      id={id}
      marginVertical="$8"
      paddingHorizontal="$4"
      maxWidth={1200}
      width="100%"
      alignSelf="center"
      tag="section"
      gap="$8"
    >
      {children}
    </YStack>
  );
}

export function ImageLinkCardsHeader({ children }: { children: React.ReactNode }) {
  return (
    <YStack alignItems="center" gap="$4" width="100%">
      {children}
    </YStack>
  );
}

export function ImageLinkCardsEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <View backgroundColor="$color4" borderRadius={999} paddingHorizontal="$3" paddingVertical="$1">
      {children}
    </View>
  );
}

export function ImageLinkCardsTitle({ children }: { children: React.ReactNode }) {
  const inCard = useContext(InCardContext);
  if (inCard) {
    return (
      <H3 fontSize="$5" fontWeight="500" color="$color12">
        {children}
      </H3>
    );
  }
  return <H2 textAlign="center">{children}</H2>;
}

export function ImageLinkCardsBody({ children }: { children: React.ReactNode }) {
  const inCard = useContext(InCardContext);
  if (inCard) {
    return (
      <Text fontSize="$2" color="$color10">
        {children}
      </Text>
    );
  }
  return <YStack gap="$2" alignItems="center">{children}</YStack>;
}

export function ImageLinkCardsGrid({ children }: { children: React.ReactNode }) {
  return (
    <XStack
      gap="$2"
      flexWrap="wrap"
      width="100%"
      flexDirection="column"
      $md={{ flexDirection: 'row' }}
    >
      {children}
    </XStack>
  );
}

export function ImageLinkCardsCard({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string | null;
}) {
  const { LinkComponent } = useSections();
  const Link = LinkComponent ?? 'a';

  const inner = (
    <InCardContext.Provider value={true}>
      <YStack
        flex={1}
        minWidth={220}
        $md={{ minHeight: 360 }}
        minHeight={280}
        padding="$6"
        borderRadius="$6"
        backgroundColor="$color3"
        justifyContent="flex-end"
        gap="$2"
        overflow="hidden"
        position="relative"
      >
        {children}
      </YStack>
    </InCardContext.Provider>
  );

  if (!href) return inner;

  return (
    <Link href={href} style={{ textDecoration: 'none', color: 'inherit', flex: 1, minWidth: 220 }}>
      {inner}
    </Link>
  );
}

export function ImageLinkCardsMedia({ children }: { children: React.ReactNode }) {
  return (
    <View position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0} opacity={0.45}>
      {children}
    </View>
  );
}

export const ImageLinkCards = {
  Root: ImageLinkCardsRoot,
  Header: ImageLinkCardsHeader,
  Eyebrow: ImageLinkCardsEyebrow,
  Title: ImageLinkCardsTitle,
  Body: ImageLinkCardsBody,
  Grid: ImageLinkCardsGrid,
  Card: ImageLinkCardsCard,
  Media: ImageLinkCardsMedia,
} as const;
