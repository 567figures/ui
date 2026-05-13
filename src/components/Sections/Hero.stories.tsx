import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';
import { Text, Button, Anchor } from 'tamagui';

const meta: Meta = {
  title: 'Sections/Hero',
  parameters: { layout: 'fullscreen' },
  argTypes: {
    title: { control: 'text' },
    badge: { control: 'text' },
    description: { control: 'text' },
    showImage: { control: 'boolean' },
    showActions: { control: 'boolean' },
  },
  args: {
    title: 'Ship Faster with Modern UI',
    badge: '🚀 New Release',
    description: 'Build beautiful, responsive websites with our modern component library. Ship faster with pre-built sections.',
    showImage: true,
    showActions: true,
  },
};

export default meta;

type HeroStoryArgs = {
  title: string;
  badge: string;
  description: string;
  showImage: boolean;
  showActions: boolean;
};

export const Default: StoryObj<HeroStoryArgs> = {
  render: (args) => (
    <Hero.Root>
      <Hero.Content hasMedia={args.showImage}>
        {args.badge && (
          <Hero.Badge>
            <Text fontSize="$2" color="$color9">{args.badge}</Text>
          </Hero.Badge>
        )}
        <Hero.Description>
          <Hero.Title>{args.title}</Hero.Title>
          <Text color="$color11" fontSize="$4">{args.description}</Text>
        </Hero.Description>
        {args.showActions && (
          <Hero.Actions>
            <Button size="$4" theme="active">Get Started</Button>
            <Button size="$4" variant="outlined">Learn More</Button>
          </Hero.Actions>
        )}
      </Hero.Content>
      {args.showImage && (
        <Hero.Media>
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '1.5rem',
          }}>
            <Text color="$color9" fontSize="$2">Image Placeholder</Text>
          </div>
        </Hero.Media>
      )}
    </Hero.Root>
  ),
  parameters: {
    docs: {
      source: {
        type: 'code',
        language: 'tsx',
        code: `import { Hero } from '@567f/ui';

<Hero.Root>
  <Hero.Content hasMedia>
    <Hero.Badge>
      <Chip>New Release</Chip>
    </Hero.Badge>
    <Hero.Description>
      <Hero.Title>Ship Faster with Modern UI</Hero.Title>
      <p>Build beautiful websites with pre-built sections.</p>
    </Hero.Description>
    <Hero.Actions>
      <Button>Get Started</Button>
      <Button variant="outlined">Learn More</Button>
    </Hero.Actions>
  </Hero.Content>
  <Hero.Media>
    <img src="/hero.png" alt="Hero" />
  </Hero.Media>
</Hero.Root>`,
      },
    },
  },
};

export const WithoutImage: StoryObj<HeroStoryArgs> = {
  args: {
    showImage: false,
  },
  render: (args) => (
    <Hero.Root>
      <Hero.Content hasMedia={false}>
        {args.badge && (
          <Hero.Badge>
            <Text fontSize="$2" color="$color9">{args.badge}</Text>
          </Hero.Badge>
        )}
        <Hero.Description>
          <Hero.Title>{args.title}</Hero.Title>
          <Text color="$color11" fontSize="$4">{args.description}</Text>
        </Hero.Description>
        {args.showActions && (
          <Hero.Actions>
            <Button size="$4" theme="active">Get Started</Button>
            <Button size="$4" variant="outlined">Learn More</Button>
          </Hero.Actions>
        )}
      </Hero.Content>
    </Hero.Root>
  ),
};

export const Minimal: StoryObj<HeroStoryArgs> = {
  args: {
    badge: '',
    showImage: false,
    showActions: false,
  },
  render: (args) => (
    <Hero.Root>
      <Hero.Content>
        <Hero.Description>
          <Hero.Title>{args.title}</Hero.Title>
        </Hero.Description>
      </Hero.Content>
    </Hero.Root>
  ),
};

export const CenteredWithActions: StoryObj<HeroStoryArgs> = {
  args: {
    showImage: false,
  },
  render: (args) => (
    <Hero.Root>
      <Hero.Content>
        {args.badge && (
          <Hero.Badge>
            <Text fontSize="$2" color="$color9">{args.badge}</Text>
          </Hero.Badge>
        )}
        <Hero.Description>
          <Hero.Title>{args.title}</Hero.Title>
          <Text color="$color11" fontSize="$4" textAlign="center">{args.description}</Text>
        </Hero.Description>
        <Hero.Actions>
          <Button size="$4" theme="active">Start Free Trial</Button>
          <Anchor href="/docs">Read the Docs →</Anchor>
        </Hero.Actions>
      </Hero.Content>
    </Hero.Root>
  ),
};
