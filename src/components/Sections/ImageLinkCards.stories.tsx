import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ImageLinkCards } from './ImageLinkCards';
import { SectionsProvider } from './SectionsContext';
import type { SectionCard } from './types';

const meta: Meta<typeof ImageLinkCards> = {
  title: 'Sections/ImageLinkCards',
  component: ImageLinkCards,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <SectionsProvider
        renderRichText={(richText, className) => (
          <p className={className} style={{ color: '#666' }}>
            {Array.isArray(richText)
              ? richText.map((block: any) =>
                  block?.children?.map((child: any) => child.text).join('')
                ).join(' ')
              : ''}
          </p>
        )}
        renderImage={({ className }) => (
          <div
            className={className}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#d1d5db',
              position: 'absolute',
              inset: 0,
            }}
          />
        )}
      >
        <div style={{ padding: 20 }}>
          <Story />
        </div>
      </SectionsProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ImageLinkCards>;

const mockCards: SectionCard[] = [
  {
    _key: '1',
    title: 'Design System',
    description: 'A comprehensive design system with tokens, components, and patterns.',
    image: { asset: { _ref: 'image-1' }, alt: 'Design System' },
    href: '/design-system',
  },
  {
    _key: '2',
    title: 'Documentation',
    description: 'Detailed guides and API references for every component.',
    image: { asset: { _ref: 'image-2' }, alt: 'Documentation' },
    href: '/docs',
  },
  {
    _key: '3',
    title: 'Templates',
    description: 'Ready-to-use page templates for common use cases.',
    image: { asset: { _ref: 'image-3' }, alt: 'Templates' },
    href: '/templates',
  },
  {
    _key: '4',
    title: 'Community',
    description: 'Join our community of developers and designers.',
    image: { asset: { _ref: 'image-4' }, alt: 'Community' },
    href: '/community',
  },
];

const mockRichText = [
  {
    _type: 'block',
    _key: '1',
    children: [{ _type: 'span', text: 'Explore our resources to get the most out of the platform.' }],
  },
];

export const Default: Story = {
  args: {
    title: 'Explore Resources',
    eyebrow: 'Resources',
    richText: mockRichText,
    cards: mockCards,
  },
};

export const TwoCards: Story = {
  args: {
    title: 'Featured',
    eyebrow: null,
    richText: null,
    cards: mockCards.slice(0, 2),
  },
};

export const WithoutImages: Story = {
  args: {
    title: 'Quick Links',
    eyebrow: 'Navigate',
    richText: mockRichText,
    cards: mockCards.map((c) => ({ ...c, image: null })),
  },
};
