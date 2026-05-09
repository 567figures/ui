import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FeatureCardsIcon } from './FeatureCardsIcon';
import { SectionsProvider } from './SectionsContext';
import type { SectionFeatureCard } from './types';

const meta: Meta<typeof FeatureCardsIcon> = {
  title: 'Sections/FeatureCardsIcon',
  component: FeatureCardsIcon,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <SectionsProvider
        renderRichText={(richText, className) => (
          <p className={className} style={{ color: '#555', lineHeight: 1.6 }}>
            {Array.isArray(richText)
              ? richText.map((block: any) =>
                  block?.children?.map((child: any) => child.text).join('')
                ).join(' ')
              : ''}
          </p>
        )}
        renderIcon={(icon) => (
          <span
            style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            dangerouslySetInnerHTML={{ __html: icon?.svg ?? '⭐' }}
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
type Story = StoryObj<typeof FeatureCardsIcon>;

const mockCards: SectionFeatureCard[] = [
  {
    _key: '1',
    icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>', name: 'layers' },
    title: 'Modular Architecture',
    richText: [
      { _type: 'block', _key: '1', children: [{ _type: 'span', text: 'Build with composable, reusable components that fit together like building blocks.' }] },
    ],
  },
  {
    _key: '2',
    icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>', name: 'zap' },
    title: 'Lightning Fast',
    richText: [
      { _type: 'block', _key: '1', children: [{ _type: 'span', text: 'Optimized for performance with lazy loading, code splitting, and minimal bundle size.' }] },
    ],
  },
  {
    _key: '3',
    icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>', name: 'layout' },
    title: 'Responsive Design',
    richText: [
      { _type: 'block', _key: '1', children: [{ _type: 'span', text: 'Every component adapts beautifully to any screen size, from mobile to desktop.' }] },
    ],
  },
];

const mockRichText = [
  {
    _type: 'block',
    _key: '1',
    children: [{ _type: 'span', text: 'Everything you need to build modern web applications, all in one place.' }],
  },
];

export const Default: Story = {
  args: {
    title: 'Why Choose Us',
    eyebrow: 'Features',
    richText: mockRichText,
    cards: mockCards,
  },
};

export const WithoutDescription: Story = {
  args: {
    title: 'Core Features',
    eyebrow: 'Platform',
    richText: null,
    cards: mockCards,
  },
};

export const TwoCards: Story = {
  args: {
    title: 'Key Benefits',
    eyebrow: null,
    richText: null,
    cards: mockCards.slice(0, 2),
  },
};
