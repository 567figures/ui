import React from 'react';
import { YStack, H2, View } from 'tamagui';

export interface SubscribeRootProps {
  children: React.ReactNode;
  id?: string;
}

export function SubscribeRoot({ children, id = 'subscribe' }: SubscribeRootProps) {
  return (
    <YStack
      id={id}
      paddingHorizontal="$4"
      paddingVertical="$6"
      maxWidth={1200}
      width="100%"
      alignSelf="center"
      tag="section"
    >
      <YStack
        backgroundColor="$color2"
        borderRadius={24}
        paddingVertical="$10"
        paddingHorizontal="$6"
        alignItems="center"
        gap="$4"
      >
        {children}
      </YStack>
    </YStack>
  );
}

export function SubscribeTitle({ children }: { children: React.ReactNode }) {
  return (
    <H2 textAlign="center" marginBottom="$2">
      {children}
    </H2>
  );
}

export function SubscribeBody({ children }: { children: React.ReactNode }) {
  return (
    <YStack alignItems="center" gap="$2" marginBottom="$2">
      {children}
    </YStack>
  );
}

/** Consumer owns input + button. Stacks on narrow viewports. */
export function SubscribeForm({
  children,
  action,
  onSubmit,
}: {
  children: React.ReactNode;
  action?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}) {
  return (
    <form
      action={action}
      onSubmit={onSubmit}
      style={{
        width: '100%',
        maxWidth: 384,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        alignItems: 'stretch',
      }}
    >
      {children}
    </form>
  );
}

export function SubscribeHelper({ children }: { children: React.ReactNode }) {
  return (
    <View marginTop="$2" opacity={0.8}>
      {children}
    </View>
  );
}

export const Subscribe = {
  Root: SubscribeRoot,
  Title: SubscribeTitle,
  Body: SubscribeBody,
  Form: SubscribeForm,
  Helper: SubscribeHelper,
} as const;

/** @deprecated Prefer `Subscribe` compound */
export const SubscribeNewsletter = Subscribe;
