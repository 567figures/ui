import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';
import { SectionsProvider } from './SectionsContext';
import type { SectionButton, SectionImage } from './types';

const meta: Meta<typeof Hero> = {
  title: 'Sections/Hero',
  component: Hero,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <SectionsProvider
        renderRichText={(richText, className) => (
          <p className={className} style={{ color: '#666', maxWidth: 600 }}>
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
              backgroundColor: '#e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '1.5rem',
            }}
          >
            <span style={{ color: '#9ca3af', fontSize: 14 }}>Image Placeholder</span>
          </div>
        )}
        renderButtons={(buttons) => (
          <div style={{ display: 'flex', gap: 8 }}>
            {buttons?.map((btn) => (
              <button
                key={btn._key}
                style={{
                  padding: '10px 20px',
                  borderRadius: 8,
                  border: btn.variant === 'outlined' ? '1px solid #333' : 'none',
                  backgroundColor: btn.variant === 'outlined' ? 'transparent' : '#111',
                  color: btn.variant === 'outlined' ? '#111' : '#fff',
                  cursor: 'pointer',
                }}
              >
                {btn.text}
              </button>
            ))}
          </div>
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
type Story = StoryObj<typeof Hero>;

const mockRichText = [
  {
    _type: 'block',
    _key: '1',
    children: [{ _type: 'span', text: 'Build beautiful, responsive websites with our modern component library. Ship faster with pre-built sections.' }],
  },
];

const mockButtons: SectionButton[] = [
  { _key: '1', text: 'Get Started', type: 'button', variant: null, theme: 'base', href: '/signup' },
  { _key: '2', text: 'Learn More', type: 'button', variant: 'outlined', theme: 'base', href: '/docs' },
];

const mockImage: SectionImage = {
  asset: { _ref: 'image-abc123-800x600-png' },
  alt: 'Hero image',
};

export const Default: Story = {
  args: {
    title: 'Ship Faster with Modern UI',
    badge: 'New Release',
    richText: mockRichText,
    image: mockImage,
    buttons: mockButtons,
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'A Hero Without an Image',
    badge: 'Announcement',
    richText: mockRichText,
    image: null,
    buttons: mockButtons,
  },
};

export const MinimalHero: Story = {
  args: {
    title: 'Just a Title',
    badge: null,
    richText: null,
    image: null,
    buttons: null,
  },
};
