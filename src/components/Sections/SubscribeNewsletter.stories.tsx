import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SubscribeNewsletter } from './SubscribeNewsletter';
import { SectionsProvider } from './SectionsContext';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof SubscribeNewsletter> = {
  title: 'Sections/SubscribeNewsletter',
  component: SubscribeNewsletter,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <SectionsProvider
        renderRichText={(richText, className) => (
          <p className={className} style={{ color: '#555', margin: 0 }}>
            {Array.isArray(richText)
              ? richText.map((block: any) =>
                  block?.children?.map((child: any) => child.text).join('')
                ).join(' ')
              : ''}
          </p>
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
type Story = StoryObj<typeof SubscribeNewsletter>;

const mockSubTitle = [
  {
    _type: 'block',
    _key: '1',
    children: [{ _type: 'span', text: 'Get the latest updates, tips, and resources delivered straight to your inbox.' }],
  },
];

const mockHelperText = [
  {
    _type: 'block',
    _key: '1',
    children: [{ _type: 'span', text: 'No spam, unsubscribe at any time. We respect your privacy.' }],
  },
];

export const Default: Story = {
  args: {
    title: 'Stay in the Loop',
    subTitle: mockSubTitle,
    helperText: mockHelperText,
    onSubmit: action('subscribe'),
  },
};

export const WithoutHelper: Story = {
  args: {
    title: 'Subscribe to Our Newsletter',
    subTitle: mockSubTitle,
    helperText: null,
    onSubmit: action('subscribe'),
  },
};

export const Minimal: Story = {
  args: {
    title: 'Get Updates',
    subTitle: null,
    helperText: null,
    placeholder: 'your@email.com',
    onSubmit: action('subscribe'),
  },
};

export const CustomPlaceholder: Story = {
  args: {
    title: 'Join Our Community',
    subTitle: mockSubTitle,
    helperText: mockHelperText,
    placeholder: 'you@company.com',
    submitLabel: 'Join now',
    onSubmit: action('subscribe'),
  },
};
