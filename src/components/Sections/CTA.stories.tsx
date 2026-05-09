import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CTA } from './CTA';
import { SectionsProvider } from './SectionsContext';
import type { SectionButton } from './types';

const meta: Meta<typeof CTA> = {
  title: 'Sections/CTA',
  component: CTA,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <SectionsProvider
        renderRichText={(richText, className) => (
          <p className={className} style={{ color: '#666', maxWidth: 600, textAlign: 'center' }}>
            {Array.isArray(richText)
              ? richText.map((block: any) =>
                  block?.children?.map((child: any) => child.text).join('')
                ).join(' ')
              : ''}
          </p>
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
type Story = StoryObj<typeof CTA>;

const mockRichText = [
  {
    _type: 'block',
    _key: '1',
    children: [{ _type: 'span', text: 'Join thousands of developers who are already building with our platform. Start your free trial today.' }],
  },
];

const mockButtons: SectionButton[] = [
  { _key: '1', text: 'Start Free Trial', type: 'button', variant: null, theme: 'accent', href: '/signup' },
  { _key: '2', text: 'Contact Sales', type: 'button', variant: 'outlined', theme: 'base', href: '/contact' },
];

export const Default: Story = {
  args: {
    title: 'Ready to Get Started?',
    eyebrow: 'Call to Action',
    richText: mockRichText,
    buttons: mockButtons,
  },
};

export const WithoutEyebrow: Story = {
  args: {
    title: 'Start Building Today',
    eyebrow: null,
    richText: mockRichText,
    buttons: mockButtons,
  },
};

export const Minimal: Story = {
  args: {
    title: 'Simple CTA Block',
    eyebrow: null,
    richText: null,
    buttons: [{ _key: '1', text: 'Learn More', type: 'button', href: '/learn' }],
  },
};
