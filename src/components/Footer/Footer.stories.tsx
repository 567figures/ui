import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Footer } from './index';
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

// ── Action-logging link component ─────────────────────────────────────

const onNavigate = action('navigate');

function ActionLink({
  href,
  children,
  onClick,
  style,
  target,
  rel,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(href);
        onClick?.();
      }}
      style={style}
      {...props}
    >
      {children}
    </a>
  );
}

// ── Meta ──────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Components/Footer',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    siteTitle: {
      control: 'text',
      description: 'Site name displayed in copyright',
    },
    logoText: {
      control: 'text',
      description: 'Text displayed in the logo area',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle text below the logo',
    },
    showSocials: {
      control: 'boolean',
      description: 'Whether to show social media icons',
    },
    showColumns: {
      control: 'boolean',
      description: 'Whether to show navigation columns',
    },
  },
  args: {
    siteTitle: '567 Figures',
    logoText: '🎨 567f',
    subtitle: 'Building the future of digital experiences.',
    showSocials: true,
    showColumns: true,
  },
};

export default meta;

type FooterStoryArgs = {
  siteTitle: string;
  logoText: string;
  subtitle: string;
  showSocials: boolean;
  showColumns: boolean;
};

// ── Full composition ──────────────────────────────────────────────────

export const Default: StoryObj<FooterStoryArgs> = {
  render: (args) => (
    <Footer.Provider linkComponent={ActionLink} renderSocialIcon={renderSocialIcon}>
      <Footer.Root>
        <Footer.Content>
          <Footer.Brand>
            <Footer.Logo>
              <Text fontSize="$6" fontWeight="bold">
                {args.logoText}
              </Text>
            </Footer.Logo>
            <Footer.Subtitle text={args.subtitle} />
            {args.showSocials && <Footer.Socials socialLinks={mockSocialLinks} />}
          </Footer.Brand>
          {args.showColumns && <Footer.Columns columns={mockColumns} />}
        </Footer.Content>
        <Footer.Bottom siteTitle={args.siteTitle} />
      </Footer.Root>
    </Footer.Provider>
  ),
  parameters: {
    docs: {
      source: {
        type: 'code',
        language: 'tsx',
        code: `import { Footer } from '@567f/ui';

export function MyFooter({ columns, socialLinks, subtitle, siteTitle, logo }) {
  return (
    <Footer.Provider
      linkComponent={NextLink}
      renderSocialIcon={(platform) => <SocialIcon platform={platform} />}
    >
      <Footer.Root>
        <Footer.Content>
          <Footer.Brand>
            <Footer.Logo>
              <img src={logo} alt={siteTitle} />
            </Footer.Logo>
            <Footer.Subtitle text={subtitle} />
            <Footer.Socials socialLinks={socialLinks} />
          </Footer.Brand>
          <Footer.Columns columns={columns} />
        </Footer.Content>
        <Footer.Bottom siteTitle={siteTitle} />
      </Footer.Root>
    </Footer.Provider>
  );
}`,
      },
    },
  },
};

export const NoSocials: StoryObj<FooterStoryArgs> = {
  args: {
    showSocials: false,
  },
  render: (args) => (
    <Footer.Provider linkComponent={ActionLink} renderSocialIcon={renderSocialIcon}>
      <Footer.Root>
        <Footer.Content>
          <Footer.Brand>
            <Footer.Logo>
              <Text fontSize="$6" fontWeight="bold">
                {args.logoText}
              </Text>
            </Footer.Logo>
            <Footer.Subtitle text={args.subtitle} />
          </Footer.Brand>
          {args.showColumns && <Footer.Columns columns={mockColumns} />}
        </Footer.Content>
        <Footer.Bottom siteTitle={args.siteTitle} />
      </Footer.Root>
    </Footer.Provider>
  ),
};

export const NoColumns: StoryObj<FooterStoryArgs> = {
  args: {
    showColumns: false,
  },
  render: (args) => (
    <Footer.Provider linkComponent={ActionLink} renderSocialIcon={renderSocialIcon}>
      <Footer.Root>
        <Footer.Content>
          <Footer.Brand>
            <Footer.Logo>
              <Text fontSize="$6" fontWeight="bold">
                {args.logoText}
              </Text>
            </Footer.Logo>
            <Footer.Subtitle text={args.subtitle} />
            {args.showSocials && <Footer.Socials socialLinks={mockSocialLinks} />}
          </Footer.Brand>
        </Footer.Content>
        <Footer.Bottom siteTitle={args.siteTitle} />
      </Footer.Root>
    </Footer.Provider>
  ),
};

export const Minimal: StoryObj<FooterStoryArgs> = {
  args: {
    showSocials: false,
    showColumns: false,
    subtitle: '',
  },
  render: (args) => (
    <Footer.Provider linkComponent={ActionLink}>
      <Footer.Root>
        <Footer.Content>
          <Footer.Brand>
            <Footer.Logo>
              <Text fontSize="$6" fontWeight="bold">
                {args.logoText}
              </Text>
            </Footer.Logo>
            {args.subtitle && <Footer.Subtitle text={args.subtitle} />}
          </Footer.Brand>
        </Footer.Content>
        <Footer.Bottom siteTitle={args.siteTitle} />
      </Footer.Root>
    </Footer.Provider>
  ),
};

// ── Individual component stories ──────────────────────────────────────

export const JustColumns: StoryObj = {
  render: () => (
    <Footer.Provider linkComponent={ActionLink}>
      <div style={{ padding: 40 }}>
        <Footer.Columns columns={mockColumns} />
      </div>
    </Footer.Provider>
  ),
};

export const JustSocials: StoryObj = {
  render: () => (
    <Footer.Provider linkComponent={ActionLink} renderSocialIcon={renderSocialIcon}>
      <div style={{ padding: 40 }}>
        <Footer.Socials socialLinks={mockSocialLinks} />
      </div>
    </Footer.Provider>
  ),
};

export const JustBottom: StoryObj<{ siteTitle: string }> = {
  args: {
    siteTitle: '567 Figures',
  },
  argTypes: {
    siteTitle: { control: 'text' },
  },
  render: (args) => (
    <Footer.Provider linkComponent={ActionLink}>
      <div style={{ padding: 40 }}>
        <Footer.Bottom siteTitle={args.siteTitle} />
      </div>
    </Footer.Provider>
  ),
};

export const CustomLegalLinks: StoryObj<{ siteTitle: string }> = {
  args: {
    siteTitle: '567 Figures',
  },
  argTypes: {
    siteTitle: { control: 'text' },
  },
  render: (args) => (
    <Footer.Provider linkComponent={ActionLink}>
      <div style={{ padding: 40 }}>
        <Footer.Bottom
          siteTitle={args.siteTitle}
          legalLinks={[
            { name: 'Terms of Service', href: '/tos' },
            { name: 'Privacy', href: '/privacy' },
            { name: 'Cookie Policy', href: '/cookies' },
          ]}
        />
      </div>
    </Footer.Provider>
  ),
};
