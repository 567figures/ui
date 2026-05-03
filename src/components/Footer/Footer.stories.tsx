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

// ── Meta ──────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Components/Footer',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

// ── Full composition ──────────────────────────────────────────────────

export const Default: StoryObj = {
  render: () => (
    <FooterProvider renderSocialIcon={renderSocialIcon}>
      <FooterRoot>
        <FooterContent>
          <FooterBrand>
            <FooterLogo>
              <Text fontSize="$6" fontWeight="bold">
                🎨 567f
              </Text>
            </FooterLogo>
            <FooterSubtitle text="Building the future of digital experiences." />
            <FooterSocials socialLinks={mockSocialLinks} />
          </FooterBrand>
          <FooterColumns columns={mockColumns} />
        </FooterContent>
        <FooterBottom siteTitle="567 Figures" />
      </FooterRoot>
    </FooterProvider>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
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
} from '@567f/ui';

export function Footer({ columns, socialLinks, subtitle, siteTitle, logo }) {
  return (
    <FooterProvider
      linkComponent={NextLink}
      renderSocialIcon={(platform) => <SocialIcon platform={platform} />}
    >
      <FooterRoot>
        <FooterContent>
          <FooterBrand>
            <FooterLogo>
              <img src={logo} alt={siteTitle} />
            </FooterLogo>
            <FooterSubtitle text={subtitle} />
            <FooterSocials socialLinks={socialLinks} />
          </FooterBrand>
          <FooterColumns columns={columns} />
        </FooterContent>
        <FooterBottom siteTitle={siteTitle} />
      </FooterRoot>
    </FooterProvider>
  );
}
`,
      },
    },
  },
};

export const NoSocials: StoryObj = {
  render: () => (
    <FooterProvider renderSocialIcon={renderSocialIcon}>
      <FooterRoot>
        <FooterContent>
          <FooterBrand>
            <FooterLogo>
              <Text fontSize="$6" fontWeight="bold">
                🎨 567f
              </Text>
            </FooterLogo>
            <FooterSubtitle text="Building the future of digital experiences." />
          </FooterBrand>
          <FooterColumns columns={mockColumns} />
        </FooterContent>
        <FooterBottom siteTitle="567 Figures" />
      </FooterRoot>
    </FooterProvider>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
// Without social icons
<FooterProvider>
  <FooterRoot>
    <FooterContent>
      <FooterBrand>
        <FooterLogo>...</FooterLogo>
        <FooterSubtitle text={subtitle} />
      </FooterBrand>
      <FooterColumns columns={columns} />
    </FooterContent>
    <FooterBottom siteTitle={siteTitle} />
  </FooterRoot>
</FooterProvider>
`,
      },
    },
  },
};

export const NoColumns: StoryObj = {
  render: () => (
    <FooterProvider renderSocialIcon={renderSocialIcon}>
      <FooterRoot>
        <FooterContent>
          <FooterBrand>
            <FooterLogo>
              <Text fontSize="$6" fontWeight="bold">
                🎨 567f
              </Text>
            </FooterLogo>
            <FooterSubtitle text="Building the future of digital experiences." />
            <FooterSocials socialLinks={mockSocialLinks} />
          </FooterBrand>
        </FooterContent>
        <FooterBottom siteTitle="567 Figures" />
      </FooterRoot>
    </FooterProvider>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
// Without navigation columns — just brand + bottom
<FooterProvider renderSocialIcon={renderSocialIcon}>
  <FooterRoot>
    <FooterContent>
      <FooterBrand>
        <FooterLogo>...</FooterLogo>
        <FooterSubtitle text={subtitle} />
        <FooterSocials socialLinks={socialLinks} />
      </FooterBrand>
    </FooterContent>
    <FooterBottom siteTitle={siteTitle} />
  </FooterRoot>
</FooterProvider>
`,
      },
    },
  },
};

export const Minimal: StoryObj = {
  render: () => (
    <FooterProvider>
      <FooterRoot>
        <FooterContent>
          <FooterBrand>
            <FooterLogo>
              <Text fontSize="$6" fontWeight="bold">
                🎨 567f
              </Text>
            </FooterLogo>
          </FooterBrand>
        </FooterContent>
        <FooterBottom siteTitle="567 Figures" />
      </FooterRoot>
    </FooterProvider>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
// Minimal footer — just logo and copyright
<FooterProvider>
  <FooterRoot>
    <FooterContent>
      <FooterBrand>
        <FooterLogo>
          <img src="/logo.svg" alt="Logo" />
        </FooterLogo>
      </FooterBrand>
    </FooterContent>
    <FooterBottom siteTitle="My App" />
  </FooterRoot>
</FooterProvider>
`,
      },
    },
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
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
<FooterProvider linkComponent={MyLink}>
  <FooterColumns columns={[
    {
      _key: '1',
      title: 'Product',
      links: [
        { _key: '1a', name: 'Features', href: '/features' },
        { _key: '1b', name: 'Pricing', href: '/pricing' },
      ],
    },
  ]} />
</FooterProvider>
`,
      },
    },
  },
};

export const JustSocials: StoryObj = {
  render: () => (
    <FooterProvider renderSocialIcon={renderSocialIcon}>
      <div style={{ padding: 40 }}>
        <FooterSocials socialLinks={mockSocialLinks} />
      </div>
    </FooterProvider>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
<FooterProvider renderSocialIcon={(platform) => <SocialIcon platform={platform} />}>
  <FooterSocials socialLinks={{
    instagram: 'https://instagram.com/...',
    facebook: 'https://facebook.com/...',
    twitter: 'https://twitter.com/...',
  }} />
</FooterProvider>
`,
      },
    },
  },
};

export const JustBottom: StoryObj = {
  render: () => (
    <FooterProvider>
      <div style={{ padding: 40 }}>
        <FooterBottom siteTitle="567 Figures" />
      </div>
    </FooterProvider>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
<FooterProvider>
  <FooterBottom siteTitle="My App" />
</FooterProvider>
`,
      },
    },
  },
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
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
<FooterProvider linkComponent={NextLink}>
  <FooterBottom
    siteTitle="My App"
    legalLinks={[
      { name: 'Terms of Service', href: '/tos' },
      { name: 'Privacy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
    ]}
  />
</FooterProvider>
`,
      },
    },
  },
};
