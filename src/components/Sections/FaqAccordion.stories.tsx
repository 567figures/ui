import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FaqAccordionSection } from './FaqAccordion';
import { SectionsProvider } from './SectionsContext';
import type { SectionFaqItem, SectionLink } from './types';

const meta: Meta<typeof FaqAccordionSection> = {
  title: 'Sections/FaqAccordion',
  component: FaqAccordionSection,
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
      >
        <div style={{ padding: 20 }}>
          <Story />
        </div>
      </SectionsProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FaqAccordionSection>;

const mockFaqs: SectionFaqItem[] = [
  {
    _id: 'faq-1',
    title: 'What is this product?',
    richText: [
      { _type: 'block', _key: '1', children: [{ _type: 'span', text: 'Our product is a modern UI component library that helps you build beautiful websites faster. It includes pre-built sections, layouts, and interactive components.' }] },
    ],
  },
  {
    _id: 'faq-2',
    title: 'How do I get started?',
    richText: [
      { _type: 'block', _key: '1', children: [{ _type: 'span', text: 'Simply install the package via npm or pnpm, wrap your app with the provider, and start using the components. Check our documentation for detailed guides.' }] },
    ],
  },
  {
    _id: 'faq-3',
    title: 'Is there a free tier?',
    richText: [
      { _type: 'block', _key: '1', children: [{ _type: 'span', text: 'Yes! We offer a generous free tier that includes all core components. Premium features are available with our Pro plan.' }] },
    ],
  },
  {
    _id: 'faq-4',
    title: 'Can I use it with Next.js / Astro / Remix?',
    richText: [
      { _type: 'block', _key: '1', children: [{ _type: 'span', text: 'Absolutely. Our components are framework-agnostic and work with any React-based framework including Next.js, Astro, Remix, and Vite.' }] },
    ],
  },
];

const mockLink: SectionLink = {
  title: 'Still have questions?',
  description: 'Contact our support team',
  href: '/contact',
  openInNewTab: false,
};

export const Default: Story = {
  args: {
    title: 'Frequently Asked Questions',
    eyebrow: 'FAQ',
    subtitle: 'Everything you need to know about our product.',
    faqs: mockFaqs,
    link: mockLink,
  },
};

export const WithoutLink: Story = {
  args: {
    title: 'Common Questions',
    eyebrow: 'Help',
    subtitle: null,
    faqs: mockFaqs,
    link: null,
  },
};

export const Minimal: Story = {
  args: {
    title: 'FAQ',
    eyebrow: null,
    subtitle: null,
    faqs: mockFaqs.slice(0, 2),
    link: null,
  },
};
