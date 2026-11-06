import React from 'react';
import { View, YStack, XStack, H2 } from 'tamagui';

export interface CTARootProps {
  children: React.ReactNode;
  id?: string;
}

export function CTARoot({ children, id = 'cta' }: CTARootProps) {
  return (
    <View
      id={id}
      marginTop="$4"
      $md={{ marginVertical: '$6', paddingHorizontal: '$6' }}
      paddingHorizontal="$4"
      tag="section"
    >
      <YStack
        id={`${id}-content`}
        backgroundColor="$color2"
        paddingVertical="$10"
        borderRadius={24}
        paddingHorizontal="$4"
      >
        <YStack alignItems="center" marginHorizontal="auto" gap="$6" width="100%" maxWidth={720}>
          {children}
        </YStack>
      </YStack>
    </View>
  );
}

export function CTAEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <View backgroundColor="$color4" borderRadius={999} paddingHorizontal="$3" paddingVertical="$1">
      {children}
    </View>
  );
}

export function CTATitle({ children }: { children: React.ReactNode }) {
  return <H2 textAlign="center">{children}</H2>;
}

export function CTABody({ children }: { children: React.ReactNode }) {
  return (
    <YStack alignItems="center" gap="$2">
      {children}
    </YStack>
  );
}

export function CTAActions({ children }: { children: React.ReactNode }) {
  return (
    <XStack
      justifyContent="center"
      gap="$3"
      flexWrap="wrap"
      width="100%"
      $md={{ flexDirection: 'row' }}
    >
      {children}
    </XStack>
  );
}

export const CTA = {
  Root: CTARoot,
  Eyebrow: CTAEyebrow,
  Title: CTATitle,
  Body: CTABody,
  Actions: CTAActions,
} as const;
