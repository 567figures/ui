import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Navbar } from './index';
import type { NavbarItem, NavbarAction } from './types';
import { Text } from 'tamagui';

// ── Mock data ─────────────────────────────────────────────────────────

const mockItems: NavbarItem[] = [
  {
    _key: '1',
    type: 'column',
    title: 'Products',
    links: [
      {
        _key: '1a',
        name: 'Analytics',
        description: 'Track your metrics in real-time',
        href: '/products/analytics',
      },
      {
        _key: '1b',
        name: 'Automation',
        description: 'Streamline your workflows',
        href: '/products/automation',
      },
      {
        _key: '1c',
        name: 'Integrations',
        description: 'Connect with your favorite tools',
        href: '/products/integrations',
      },
    ],
  },
  {
    _key: '2',
    type: 'column',
    title: 'Resources',
    links: [
      {
        _key: '2a',
        name: 'Documentation',
        description: 'Guides and API reference',
        href: '/docs',
      },
      {
        _key: '2b',
        name: 'Blog',
        description: 'Latest news and updates',
        href: '/blog',
      },
    ],
  },
  {
    _key: '3',
    type: 'link',
    name: 'Pricing',
    href: '/pricing',
  },
  {
    _key: '4',
    type: 'link',
    name: 'About',
    href: '/about',
  },
];

const mockActions: NavbarAction[] = [
  {
    _key: 'a1',
    type: 'anchor',
    text: 'Sign In',
    href: '/login',
  },
  {
    _key: 'a2',
    type: 'button',
    text: 'Get Started',
    href: '/signup',
    variant: 'outlined',
    theme: 'active',
  },
];

// ── Action-logging link component ─────────────────────────────────────

const onNavigate = action('navigate');

function ActionLink({
  href,
  children,
  onClick,
  style,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(href);
        onClick?.();
      }}
      style={style}
    >
      {children}
    </a>
  );
}

// ── Meta ──────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Components/Navbar',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    logoText: {
      control: 'text',
      description: 'Text displayed in the logo area',
    },
    showActions: {
      control: 'boolean',
      description: 'Whether to show CTA action buttons',
    },
    showMobileMenu: {
      control: 'boolean',
      description: 'Whether to include mobile menu',
    },
  },
  args: {
    logoText: '🎨 567f',
    showActions: true,
    showMobileMenu: true,
  },
};

export default meta;

type NavbarStoryArgs = {
  logoText: string;
  showActions: boolean;
  showMobileMenu: boolean;
};

// ── Full composition ──────────────────────────────────────────────────

export const Default: StoryObj<NavbarStoryArgs> = {
  render: (args) => (
    <Navbar.Provider linkComponent={ActionLink}>
      <Navbar.Root>
        <Navbar.Logo>
          <Text fontSize="$6" fontWeight="bold">
            {args.logoText}
          </Text>
        </Navbar.Logo>

        <Navbar.Desktop>
          <Navbar.Items items={mockItems} />
        </Navbar.Desktop>

        {args.showActions && (
          <Navbar.Desktop align="end">
            <Navbar.Actions actions={mockActions} />
          </Navbar.Desktop>
        )}

        {args.showMobileMenu && (
          <Navbar.MobileMenu>
            <Navbar.MobileItems items={mockItems} />
            {args.showActions && <Navbar.Actions actions={mockActions} />}
          </Navbar.MobileMenu>
        )}
      </Navbar.Root>
    </Navbar.Provider>
  ),
  parameters: {
    docs: {
      source: {
        type: 'code',
        language: 'tsx',
        code: `import { Navbar } from '@567f/ui';

export function MyNavbar({ items, actions, logo }) {
  return (
    <Navbar.Provider linkComponent={NextLink}>
      <Navbar.Root>
        <Navbar.Logo>
          <img src={logo} alt="Logo" />
        </Navbar.Logo>

        <Navbar.Desktop>
          <Navbar.Items items={items} />
        </Navbar.Desktop>

        <Navbar.Desktop align="end">
          <Navbar.Actions actions={actions} />
        </Navbar.Desktop>

        <Navbar.MobileMenu>
          <Navbar.MobileItems items={items} />
          <Navbar.Actions actions={actions} />
        </Navbar.MobileMenu>
      </Navbar.Root>
    </Navbar.Provider>
  );
}`,
      },
    },
  },
};

export const NoActions: StoryObj<NavbarStoryArgs> = {
  args: {
    showActions: false,
  },
  render: (args) => (
    <Navbar.Provider linkComponent={ActionLink}>
      <Navbar.Root>
        <Navbar.Logo>
          <Text fontSize="$6" fontWeight="bold">
            {args.logoText}
          </Text>
        </Navbar.Logo>

        <Navbar.Desktop>
          <Navbar.Items items={mockItems} />
        </Navbar.Desktop>

        {args.showMobileMenu && (
          <Navbar.MobileMenu>
            <Navbar.MobileItems items={mockItems} />
          </Navbar.MobileMenu>
        )}
      </Navbar.Root>
    </Navbar.Provider>
  ),
};

export const LinksOnly: StoryObj<NavbarStoryArgs> = {
  render: (args) => (
    <Navbar.Provider linkComponent={ActionLink}>
      <Navbar.Root>
        <Navbar.Logo>
          <Text fontSize="$6" fontWeight="bold">
            {args.logoText}
          </Text>
        </Navbar.Logo>

        <Navbar.Desktop>
          <Navbar.Items items={mockItems.filter((i) => i.type === 'link')} />
        </Navbar.Desktop>

        {args.showActions && (
          <Navbar.Desktop align="end">
            <Navbar.Actions actions={mockActions} />
          </Navbar.Desktop>
        )}

        {args.showMobileMenu && (
          <Navbar.MobileMenu>
            <Navbar.MobileItems items={mockItems.filter((i) => i.type === 'link')} />
            {args.showActions && <Navbar.Actions actions={mockActions} />}
          </Navbar.MobileMenu>
        )}
      </Navbar.Root>
    </Navbar.Provider>
  ),
};

export const Minimal: StoryObj<NavbarStoryArgs> = {
  args: {
    showActions: false,
    showMobileMenu: false,
  },
  render: (args) => (
    <Navbar.Provider linkComponent={ActionLink}>
      <Navbar.Root>
        <Navbar.Logo>
          <Text fontSize="$6" fontWeight="bold">
            {args.logoText}
          </Text>
        </Navbar.Logo>

        <Navbar.Desktop>
          <Navbar.Items
            items={[
              { _key: '1', type: 'link', name: 'Home', href: '/' },
              { _key: '2', type: 'link', name: 'About', href: '/about' },
            ]}
          />
        </Navbar.Desktop>
      </Navbar.Root>
    </Navbar.Provider>
  ),
};

// ── Individual component stories ──────────────────────────────────────

export const JustDropdown: StoryObj = {
  render: () => (
    <Navbar.Provider linkComponent={ActionLink}>
      <div style={{ padding: 40 }}>
        <Navbar.Items items={[mockItems[0]]} />
      </div>
    </Navbar.Provider>
  ),
};

export const JustActions: StoryObj = {
  render: () => (
    <Navbar.Provider linkComponent={ActionLink}>
      <div style={{ padding: 40, display: 'flex', gap: 12 }}>
        <Navbar.Actions actions={mockActions} />
      </div>
    </Navbar.Provider>
  ),
};

export const MobileAccordion: StoryObj = {
  render: () => (
    <Navbar.Provider linkComponent={ActionLink}>
      <div style={{ maxWidth: 375, padding: 16 }}>
        <Navbar.MobileItems items={mockItems} />
      </div>
    </Navbar.Provider>
  ),
};
