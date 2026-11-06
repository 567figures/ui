import React, { createContext, useContext } from 'react';
import { View, YStack, XStack, Card, H2, H3 } from 'tamagui';

const InCardContext = createContext(false);

export interface FeatureCardsRootProps {
  children: React.ReactNode;
  id?: string;
}

export function FeatureCardsRoot({ children, id = 'features' }: FeatureCardsRootProps) {
  return (
    <YStack
      id={id}
      marginTop="$4"
      $md={{ marginVertical: '$6', paddingHorizontal: '$6' }}
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

export function FeatureCardsHeader({ children }: { children: React.ReactNode }) {
  return (
    <YStack alignItems="center" gap="$4" width="100%" $lg={{ alignItems: 'flex-start' }}>
      {children}
    </YStack>
  );
}

export function FeatureCardsEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <View backgroundColor="$color4" borderRadius={999} paddingHorizontal="$3" paddingVertical="$1">
      {children}
    </View>
  );
}

/** Section H2 or card H3 depending on whether rendered inside `FeatureCards.Card`. */
export function FeatureCardsTitle({ children }: { children: React.ReactNode }) {
  const inCard = useContext(InCardContext);
  if (inCard) return <H3>{children}</H3>;
  return (
    <H2 textAlign="center" $lg={{ textAlign: 'left' }}>
      {children}
    </H2>
  );
}

export function FeatureCardsBody({ children }: { children: React.ReactNode }) {
  return <YStack gap="$2">{children}</YStack>;
}

/** Grid → column stack below `$md`, row wrap from `$md` up. */
export function FeatureCardsGrid({ children }: { children: React.ReactNode }) {
  return (
    <XStack
      gap="$8"
      flexWrap="wrap"
      justifyContent="center"
      flexDirection="column"
      $md={{ flexDirection: 'row' }}
      $lg={{ justifyContent: 'flex-start' }}
      width="100%"
    >
      {children}
    </XStack>
  );
}

export function FeatureCardsCard({ children }: { children: React.ReactNode }) {
  return (
    <InCardContext.Provider value={true}>
      <Card elevate size="$4" bordered width="100%" $md={{ width: '30%', minWidth: 220, flexGrow: 1 }}>
        <YStack padding="$4" gap="$3">
          {children}
        </YStack>
      </Card>
    </InCardContext.Provider>
  );
}

export function FeatureCardsIconSlot({ children }: { children: React.ReactNode }) {
  return <View>{children}</View>;
}

export function FeatureCardsAction({ children }: { children: React.ReactNode }) {
  return <View marginTop="$2">{children}</View>;
}

export const FeatureCards = {
  Root: FeatureCardsRoot,
  Header: FeatureCardsHeader,
  Eyebrow: FeatureCardsEyebrow,
  Title: FeatureCardsTitle,
  Body: FeatureCardsBody,
  Grid: FeatureCardsGrid,
  Card: FeatureCardsCard,
  Icon: FeatureCardsIconSlot,
  Action: FeatureCardsAction,
} as const;

/** @deprecated Prefer `FeatureCards` compound */
export const FeatureCardsIcon = FeatureCards;
