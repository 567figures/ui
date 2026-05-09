import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ImageLinkCard } from './ImageLinkCard';
import { SectionsProvider } from './SectionsContext';
import type { SectionCard } from './types';

const meta: Meta<typeof ImageLinkCard> = {
  title: 'Sections/ImageLinkCard',
  component: ImageLinkCard,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <SectionsProvider
        renderImage={({ className }) => (
          <div
            className={className}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#6b7280',
              position: 'absolute',
              inset: 0,
            }}
          />
        )}
      >
        <div style={{ width: 300 }}>
          <Story />
        </div>
      </SectionsProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ImageLinkCard>;

const mockCard: SectionCard = {
  _key: '1',
  title: 'Design System',
  description: 'A comprehensive design system with tokens, components, and patterns for building modern interfaces.',
  image: { asset: { _ref: 'image-abc123-800x600-png' }, alt: 'Design System' },
  href: '/design-system',
};

export const Default: Story = {
  args: {
    card: mockCard,
    className: 'bg-gray-100',
  },
};

export const WithoutImage: Story = {
  args: {
    card: { ...mockCard, image: null },
    className: 'bg-gray-100',
  },
};

export const RoundedLeft: Story = {
  args: {
    card: mockCard,
    className: 'bg-gray-100 rounded-l-3xl rounded-r-none',
  },
};

export const RoundedRight: Story = {
  args: {
    card: mockCard,
    className: 'bg-gray-100 rounded-r-3xl rounded-l-none',
  },
};
