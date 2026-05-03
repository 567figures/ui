import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  FooterProvider,
  FooterRoot,
  FooterContent,
  FooterBrand,
  FooterLogo,
  FooterSubtitle,
  FooterSocials,
  FooterColumns,
  FooterBottom,
} from './index';
import type { FooterColumn, FooterSocialLinks } from './types';
import { Text } from 'tamagui';

// ── Mock data ─────────────────────────────────────────────────────────

const mockColumns: FooterColumn[] = [
  {
    _key: '1',
    title: 'Product',
    links: [
      { _key: '1a', name: 'Features', href: '/features' },
      { _key: '1b', name: 'Pricing', href: '/pricing' },
      { _key: '1c', name: 'Integrations', href: '/integrations' },
      { _key: '1d', name: 'Changelog', href: '/changelog' },
    ],
  },
  {
    _key: '2',
    title: 'Company',
    links: [
      { _key: '2a', name: 'About', href: '/about' },
      { _key: '2b', name: 'Blog', href: '/blog' },
      { _key: '2c', name: 'Careers', href: '/careers', openInNewTab: true },
      { _key: '2d', name: 'Contact', href: '/contact' },
    ],
  },
  {
    _key: '3',
    title: 'Resources',
    links: [
      { _key: '3a', name: 'Documentation', href: '/docs' },
      { _key: '3b', name: 'Help Center', href: '/help' },
      { _key: '3c', name: 'Community', href: '/community' },
    ],
  },
];

const mockSocialLinks: FooterSocialLinks = {
  instagram: 'https://instagram.com/example',
  facebook: 'https://facebook.com/example',
  twitter: 'https://twitter.com/example',
  linkedin: 'https://linkedin.com/company/example',
  youtube: 'https://youtube.com/example',
};

// ── Social icon renderer for stories ──────────────────────────────────

function renderSocialIcon(platform: string): React.ReactNode {
  const icons: Record<string, string> = {
    instagram: '📷',
    facebook: '📘',
    twitter: '🐦',
    linkedin: '💼',
    youtube: '▶️',
  };
  return <span>{icons[platform] ?? '🔗'}</span>;
}

// ── Full Footer story ─────────────────────────────────────────────────

function FullFooter({
  columns,
  socialLinks,
  subtitle,
  siteTitle,
  showSocials,
  showColumns,
}: {
  columns: FooterColumn[];
  socialLinks: FooterSocialLinks;
  subtitle: string;
  siteTitle: string;
  showSocials: boolean;
  showColumns: boolean;
}) {
  return (
    <FooterProvider renderSocialIcon={renderSocialIcon}>
      <FooterRoot>
        <FooterContent>
          <FooterBrand>
            <FooterLogo>
              <Text fontSize="$6" fontWeight="bold">
                🎨 567f
              </Text>
            </FooterLogo>
            <FooterSubtitle text={subtitle} />
            {showSocials && <FooterSocials socialLinks={socialLinks} />}
          </FooterBrand>
          {showColumns && <FooterColumns columns={columns} />}
        </FooterContent>
        <FooterBottom siteTitle={siteTitle} />
      </FooterRoot>
    </FooterProvider>
  );
}

const meta: Meta<typeof FullFooter> = {
  title: 'Components/Footer',
  component: FullFooter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        language: 'tsx',
        type: 'code',
      },
    },
  },
  argTypes: {
    showSocials: { control: 'boolean' },
    showColumns: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof FullFooter>;

export const Default: Story = {
  args: {
    columns: mockColumns,
    socialLinks: mockSocialLinks,
    subtitle: 'Building the future of digital experiences.',
    siteTitle: '567 Figures',
    showSocials: true,
    showColumns: true,
  },
};

export const NoSocials: Story = {
  args: {
    columns: mockColumns,
    socialLinks: mockSocialLinks,
    subtitle: 'Building the future of digital experiences.',
    siteTitle: '567 Figures',
    showSocials: false,
    showColumns: true,
  },
};

export const NoColumns: Story = {
  args: {
    columns: mockColumns,
    socialLinks: mockSocialLinks,
    subtitle: 'Building the future of digital experiences.',
    siteTitle: '567 Figures',
    showSocials: true,
    showColumns: false,
  },
};

export const Minimal: Story = {
  args: {
    columns: [],
    socialLinks: {},
    subtitle: '',
    siteTitle: '567 Figures',
    showSocials: false,
    showColumns: false,
  },
};

// ── Individual component stories ──────────────────────────────────────

export const JustColumns: StoryObj = {
  render: () => (
    <FooterProvider>
      <div style={{ padding: 40 }}>
        <FooterColumns columns={mockColumns} />
      </div>
    </FooterProvider>
  ),
};

export const JustSocials: StoryObj = {
  render: () => (
    <FooterProvider renderSocialIcon={renderSocialIcon}>
      <div style={{ padding: 40 }}>
        <FooterSocials socialLinks={mockSocialLinks} />
      </div>
    </FooterProvider>
  ),
};

export const JustBottom: StoryObj = {
  render: () => (
    <FooterProvider>
      <div style={{ padding: 40 }}>
        <FooterBottom siteTitle="567 Figures" />
      </div>
    </FooterProvider>
  ),
};

export const CustomLegalLinks: StoryObj = {
  render: () => (
    <FooterProvider>
      <div style={{ padding: 40 }}>
        <FooterBottom
          siteTitle="567 Figures"
          legalLinks={[
            { name: 'Terms of Service', href: '/tos' },
            { name: 'Privacy', href: '/privacy' },
            { name: 'Cookie Policy', href: '/cookies' },
          ]}
        />
      </div>
    </FooterProvider>
  ),
};
