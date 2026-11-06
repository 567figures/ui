import React from 'react';
import { XStack, YStack, useMedia } from 'tamagui';
import { FooterNavProvider, FooterProvider } from './FooterContext';
import type { FooterCollapseTrigger, FooterContextValue } from './FooterContext';

/**
 * Root footer. Absorbs link config (no separate Provider required).
 * JSX / DOM order of children = visual order.
 * Spacing is denser below `$lg` (audit / Headspace–Herman footers).
 */
export function FooterRoot({
  children,
  linkComponent,
}: {
  children: React.ReactNode;
  linkComponent?: FooterContextValue['LinkComponent'];
}) {
  return (
    <FooterProvider linkComponent={linkComponent}>
      <YStack
        tag="footer"
        marginTop="$8"
        paddingBottom="$6"
        backgroundColor="$background"
        $lg={{ marginTop: '$12', paddingBottom: '$8' }}
      >
        <YStack tag="section" alignSelf="center" width="100%" paddingHorizontal="$4" maxWidth={1200}>
          <YStack gap="$5" $lg={{ gap: '$8' }}>
            {children}
          </YStack>
        </YStack>
      </YStack>
    </FooterProvider>
  );
}

/** Optional promo / CTA strip above Main. */
export function FooterTop({ children }: { children: React.ReactNode }) {
  return (
    <YStack width="100%" paddingVertical="$3" $lg={{ paddingVertical: '$4' }}>
      {children}
    </YStack>
  );
}

/**
 * Main row: Brand / Nav / Aside in **JSX order** (no CSS `order` reordering).
 * Stacks on mobile; row on `$lg`.
 */
export function FooterMain({ children }: { children: React.ReactNode }) {
  return (
    <XStack
      flexDirection="column"
      alignItems="stretch"
      justifyContent="space-between"
      gap="$5"
      width="100%"
      $lg={{ flexDirection: 'row', alignItems: 'flex-start', gap: '$10' }}
    >
      {children}
    </XStack>
  );
}

/** Brand column — centered below `$lg`, left on desktop. */
export function FooterBrand({ children }: { children: React.ReactNode }) {
  return (
    <YStack
      width="100%"
      maxWidth={384}
      flexShrink={1}
      flexDirection="column"
      alignItems="center"
      alignSelf="center"
      justifyContent="flex-start"
      gap="$3"
      $lg={{
        width: 'auto',
        flexBasis: 240,
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 280,
        gap: '$6',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
      }}
    >
      {children}
    </YStack>
  );
}

/**
 * Nav columns container. When `collapseOnMobile` (default true), each
 * `Footer.Column` becomes an accordion item below `$lg`.
 *
 * `collapseTrigger`: `chevron` (default), `plus` (Headspace), `caret` (HubSpot / Herman `>`).
 */
export function FooterNav({
  children,
  collapseOnMobile = true,
  collapseTrigger = 'chevron',
}: {
  children: React.ReactNode;
  collapseOnMobile?: boolean;
  collapseTrigger?: FooterCollapseTrigger;
}) {
  const media = useMedia();
  const collapsing = Boolean(collapseOnMobile && !media.lg);

  if (collapsing) {
    return (
      <FooterNavProvider collapsing collapseTrigger={collapseTrigger}>
        <YStack width="100%" flex={1} borderTopWidth={1} borderColor="$borderColor">
          {children}
        </YStack>
      </FooterNavProvider>
    );
  }

  return (
    <FooterNavProvider collapsing={false} collapseTrigger={collapseTrigger}>
      {/*
        No width:100% — that stole the Main row and stacked/ overlapped Aside.
        Wrap allowed for mega footers (Coursera 6 cols); Brand max-width keeps
        typical 3-col cms footers on one row.
      */}
      <XStack
        gap="$6"
        flex={1}
        flexShrink={1}
        minWidth={0}
        flexWrap="wrap"
        alignItems="flex-start"
        justifyContent="flex-start"
        $lg={{ gap: '$8' }}
      >
        {children}
      </XStack>
    </FooterNavProvider>
  );
}

/** Aside — apps, newsletter, etc. Centered below `$lg`, left on desktop. */
export function FooterAside({ children }: { children: React.ReactNode }) {
  return (
    <YStack
      width="100%"
      maxWidth={280}
      gap="$3"
      alignItems="center"
      alignSelf="center"
      $lg={{
        width: 'auto',
        maxWidth: 200,
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
        gap: '$4',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
      }}
    >
      {children}
    </YStack>
  );
}
