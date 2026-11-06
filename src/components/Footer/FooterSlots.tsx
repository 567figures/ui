import React, { useId, useState } from 'react';
import { ChevronDown, ChevronRight, Plus } from '@tamagui/lucide-icons';
import { H3, Text, XStack, YStack, Square } from 'tamagui';
import { useFooter, useFooterNav } from './FooterContext';
import type { FooterCollapseTrigger } from './FooterContext';

const COLUMN_TITLE = 'FooterColumnTitle';

/** Logo area — wrap any logo (image, SVG, text). */
export function FooterLogo({ children }: { children: React.ReactNode }) {
  return (
    <XStack
      alignItems="center"
      justifyContent="center"
      gap="$4"
      $lg={{ justifyContent: 'flex-start' }}
    >
      {children}
    </XStack>
  );
}

/** Subtitle under the logo. */
export function FooterSubtitle({ children }: { children: React.ReactNode }) {
  if (!children) return null;
  return (
    <Text
      marginTop="$1"
      fontSize="$2"
      color="$color10"
      textAlign="center"
      width="100%"
      $lg={{ textAlign: 'left', marginTop: '$2' }}
    >
      {children}
    </Text>
  );
}

/** Column heading (desktop). On mobile accordion, title text is lifted into the trigger. */
export function FooterColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <H3 marginBottom="$4" fontSize="$4" fontWeight="600">
      {children}
    </H3>
  );
}
FooterColumnTitle.displayName = COLUMN_TITLE;

function CollapseTriggerIcon({
  trigger,
  expanded,
}: {
  trigger: FooterCollapseTrigger;
  expanded: boolean;
}) {
  if (trigger === 'plus') {
    return (
      <Square animation="quick" rotate={expanded ? '45deg' : '0deg'}>
        <Plus size={18} color="$color10" />
      </Square>
    );
  }
  if (trigger === 'caret') {
    return (
      <Square animation="quick" rotate={expanded ? '90deg' : '0deg'}>
        <ChevronRight size={18} color="$color10" />
      </Square>
    );
  }
  return (
    <Square animation="quick" rotate={expanded ? '180deg' : '0deg'}>
      <ChevronDown size={18} color="$color10" />
    </Square>
  );
}

/**
 * One nav column. Under `Footer.Nav collapseOnMobile`, becomes a full-width
 * accordion row (Headspace / Herman-style: title + trigger, hairline rules).
 */
export function FooterColumn({ children }: { children: React.ReactNode }) {
  const { collapsing, collapseTrigger } = useFooterNav();
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const childArray = React.Children.toArray(children);
  const titleChild = childArray.find(
    (child) =>
      React.isValidElement(child) &&
      (child.type as { displayName?: string }).displayName === COLUMN_TITLE,
  );
  const bodyChildren = childArray.filter((child) => child !== titleChild);

  if (collapsing) {
    const titleNode = React.isValidElement(titleChild)
      ? (titleChild.props as { children?: React.ReactNode }).children
      : titleChild;

    return (
      <YStack width="100%" borderBottomWidth={1} borderColor="$borderColor">
        <XStack
          tag="button"
          role="button"
          aria-expanded={expanded}
          aria-controls={panelId}
          onPress={() => setExpanded((v) => !v)}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          minHeight={52}
          paddingVertical="$3"
          paddingHorizontal="$1"
          cursor="pointer"
          backgroundColor="transparent"
          borderWidth={0}
          hoverStyle={{ opacity: 0.85 }}
          pressStyle={{ opacity: 0.7 }}
        >
          <Text
            fontSize="$4"
            fontWeight="500"
            color="$color12"
            textAlign="left"
            flex={1}
            paddingRight="$3"
          >
            {titleNode}
          </Text>
          <CollapseTriggerIcon trigger={collapseTrigger} expanded={expanded} />
        </XStack>

        {expanded ? (
          <YStack
            id={panelId}
            gap="$3"
            alignItems="flex-start"
            paddingBottom="$3"
            paddingHorizontal="$1"
          >
            {bodyChildren}
          </YStack>
        ) : null}
      </YStack>
    );
  }

  return (
    <YStack
      minWidth={140}
      flexGrow={1}
      flexShrink={1}
      flexBasis={140}
      maxWidth="100%"
      gap="$3"
    >
      {children}
    </YStack>
  );
}

/**
 * Link / interactive item. Pass `href` to wrap with Footer link component;
 * omit `href` to render children as-is (e.g. plain text, custom control).
 */
export function FooterItem({
  children,
  href,
  openInNewTab,
  'aria-label': ariaLabel,
}: {
  children: React.ReactNode;
  href?: string | null;
  openInNewTab?: boolean | null;
  'aria-label'?: string;
}) {
  const { LinkComponent } = useFooter();

  if (!href) {
    return (
      <Text fontSize="$3" color="$color11" lineHeight={22}>
        {children}
      </Text>
    );
  }

  return (
    <Text fontSize="$3" color="$color11" lineHeight={22} hoverStyle={{ color: '$color12' }}>
      <LinkComponent
        href={href}
        target={openInNewTab ? '_blank' : undefined}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {children}
      </LinkComponent>
    </Text>
  );
}

/** Bottom bar shell — centered stack below `$lg`, row on desktop. */
export function FooterBottomBar({ children }: { children: React.ReactNode }) {
  return (
    <YStack
      marginTop="$3"
      borderTopWidth={1}
      borderColor="$color6"
      paddingTop="$5"
      width="100%"
      alignItems="center"
      $lg={{ marginTop: '$4', paddingTop: '$8', alignItems: 'stretch' }}
    >
      <XStack
        flexDirection="column"
        gap="$3"
        alignItems="center"
        justifyContent="center"
        width="100%"
        $lg={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '$4',
        }}
      >
        {children}
      </XStack>
    </YStack>
  );
}

export function FooterCopyright({ children }: { children: React.ReactNode }) {
  return (
    <Text
      textAlign="center"
      width="100%"
      fontSize="$2"
      fontWeight="400"
      color="$color10"
      $lg={{ textAlign: 'left', width: 'auto' }}
    >
      {children}
    </Text>
  );
}

export function FooterLegal({ children }: { children: React.ReactNode }) {
  return (
    <XStack gap="$4" justifyContent="center" flexWrap="wrap" $lg={{ justifyContent: 'flex-start' }}>
      {children}
    </XStack>
  );
}

/** Locale, socials, extra meta — flex row of children. */
export function FooterMeta({ children }: { children: React.ReactNode }) {
  return (
    <XStack
      alignItems="center"
      gap="$3"
      flexWrap="wrap"
      justifyContent="center"
      $lg={{ gap: '$4', justifyContent: 'flex-end' }}
    >
      {children}
    </XStack>
  );
}
