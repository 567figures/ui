import React from 'react';
import { YStack, XStack, View, H1 } from 'tamagui';

// ── Hero.Root ─────────────────────────────────────────────────────────

export interface HeroRootProps {
  children: React.ReactNode;
  /** HTML id attribute */
  id?: string;
}

/**
 * Root container for the Hero section. Provides max-width and responsive padding.
 *
 * @example
 * <Hero.Root>
 *   <Hero.Content>...</Hero.Content>
 *   <Hero.Media>...</Hero.Media>
 * </Hero.Root>
 */
export function HeroRoot({ children, id = 'hero' }: HeroRootProps) {
  return (
    <View
      id={id}
      marginTop="$4"
      $md={{ marginVertical: '$6', paddingHorizontal: '$6' }}
      paddingHorizontal="$4"
      maxWidth={1200}
      tag="section"
    >
      <XStack
        id={`${id}-content`}
        alignItems="center"
        gap="$8"
        flexDirection="column"
        $lg={{ flexDirection: 'row' }}
      >
        {children}
      </XStack>
    </View>
  );
}

// ── Hero.Content ──────────────────────────────────────────────────────

export interface HeroContentProps {
  children: React.ReactNode;
  /** Whether the hero has a media section (affects width) */
  hasMedia?: boolean;
}

/**
 * Text content area of the hero — holds badge, title, description, and actions.
 * Takes 50% width when media is present, 100% otherwise.
 *
 * @example
 * <Hero.Content>
 *   <Hero.Badge>New</Hero.Badge>
 *   <Hero.Title>Hello World</Hero.Title>
 *   <Hero.Description>...</Hero.Description>
 *   <Hero.Actions>...</Hero.Actions>
 * </Hero.Content>
 */
export function HeroContent({ children, hasMedia = false }: HeroContentProps) {
  const width = hasMedia ? '50%' : '100%';

  return (
    <YStack
      gap="$4"
      alignItems="center"
      justifyContent="center"
      flex={1}
      flexShrink={1}
      $lg={{ alignItems: 'flex-start', justifyContent: 'flex-start', width }}
      minWidth={0}
    >
      {children}
    </YStack>
  );
}

// ── Hero.Badge ────────────────────────────────────────────────────────

export interface HeroBadgeProps {
  children: React.ReactNode;
}

/**
 * Badge/chip displayed above the title.
 *
 * @example
 * <Hero.Badge>🚀 New Release</Hero.Badge>
 */
export function HeroBadge({ children }: HeroBadgeProps) {
  return (
    <View
      backgroundColor="$color4"
      borderRadius={999}
      paddingHorizontal="$3"
      paddingVertical="$1"
    >
      {children}
    </View>
  );
}

// ── Hero.Title ────────────────────────────────────────────────────────

export interface HeroTitleProps {
  children: React.ReactNode;
}

/**
 * Main heading of the hero section.
 *
 * @example
 * <Hero.Title>Build Something Amazing</Hero.Title>
 */
export function HeroTitle({ children }: HeroTitleProps) {
  return (
    <H1
      textAlign="center"
      $lg={{ textAlign: 'left' }}
    >
      {children}
    </H1>
  );
}

// ── Hero.Description ──────────────────────────────────────────────────

export interface HeroDescriptionProps {
  children: React.ReactNode;
}

/**
 * Description/subtitle area below the title. Wrap your rich text or plain text here.
 *
 * @example
 * <Hero.Description>
 *   <p>Some description text</p>
 * </Hero.Description>
 */
export function HeroDescription({ children }: HeroDescriptionProps) {
  return (
    <YStack gap="$4" alignItems="center" $lg={{ alignItems: 'flex-start' }}>
      {children}
    </YStack>
  );
}

// ── Hero.Actions ──────────────────────────────────────────────────────

export interface HeroActionsProps {
  children: React.ReactNode;
}

/**
 * Actions area (buttons, links) below the description.
 *
 * @example
 * <Hero.Actions>
 *   <Button>Get Started</Button>
 *   <Button variant="outlined">Learn More</Button>
 * </Hero.Actions>
 */
export function HeroActions({ children }: HeroActionsProps) {
  return (
    <XStack gap="$3" flexWrap="wrap" justifyContent="center" $lg={{ justifyContent: 'flex-start' }}>
      {children}
    </XStack>
  );
}

// ── Hero.Media ────────────────────────────────────────────────────────

export interface HeroMediaProps {
  children: React.ReactNode;
}

/**
 * Media area (image, video, illustration) on the right side of the hero.
 *
 * @example
 * <Hero.Media>
 *   <img src="/hero.png" alt="Hero" />
 * </Hero.Media>
 */
export function HeroMedia({ children }: HeroMediaProps) {
  return (
    <YStack
      flex={1}
      flexShrink={1}
      $lg={{ width: '50%' }}
      minWidth={0}
      height="$20"
      width="100%"
      borderRadius="$4"
      overflow="hidden"
    >
      {children}
    </YStack>
  );
}

// ── Compound export ───────────────────────────────────────────────────

export const Hero = {
  Root: HeroRoot,
  Content: HeroContent,
  Badge: HeroBadge,
  Title: HeroTitle,
  Description: HeroDescription,
  Actions: HeroActions,
  Media: HeroMedia,
} as const;
