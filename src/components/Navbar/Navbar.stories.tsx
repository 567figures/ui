import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  NavbarProvider,
  NavbarRoot,
  NavbarDesktop,
  NavbarLogo,
  NavbarItems,
  NavbarActions,
  NavbarMobileMenu,
  NavbarMobileItems,
} from './index';
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

// ── Meta ──────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Components/Navbar',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

// ── Full composition ──────────────────────────────────────────────────

export const Default: StoryObj = {
  render: () => (
    <NavbarProvider>
      <NavbarRoot>
        <NavbarLogo>
          <Text fontSize="$6" fontWeight="bold">
            🎨 567f
          </Text>
        </NavbarLogo>

        <NavbarDesktop>
          <NavbarItems items={mockItems} />
        </NavbarDesktop>

        <NavbarDesktop align="end">
          <NavbarActions actions={mockActions} />
        </NavbarDesktop>

        <NavbarMobileMenu>
          <NavbarMobileItems items={mockItems} />
          <NavbarActions actions={mockActions} />
        </NavbarMobileMenu>
      </NavbarRoot>
    </NavbarProvider>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
import {
  NavbarProvider,
  NavbarRoot,
  NavbarDesktop,
  NavbarLogo,
  NavbarItems,
  NavbarActions,
  NavbarMobileMenu,
  NavbarMobileItems,
} from '@567f/ui';

export function Navbar({ items, actions, logo }) {
  return (
    <NavbarProvider renderIcon={(icon) => <MyIcon icon={icon} />}>
      <NavbarRoot>
        <NavbarLogo>
          <img src={logo} alt="Logo" />
        </NavbarLogo>

        <NavbarDesktop>
          <NavbarItems items={items} />
        </NavbarDesktop>

        <NavbarDesktop align="end">
          <NavbarActions actions={actions} />
        </NavbarDesktop>

        <NavbarMobileMenu>
          <NavbarMobileItems items={items} />
          <NavbarActions actions={actions} />
        </NavbarMobileMenu>
      </NavbarRoot>
    </NavbarProvider>
  );
}
`,
      },
    },
  },
};

export const NoActions: StoryObj = {
  render: () => (
    <NavbarProvider>
      <NavbarRoot>
        <NavbarLogo>
          <Text fontSize="$6" fontWeight="bold">
            🎨 567f
          </Text>
        </NavbarLogo>

        <NavbarDesktop>
          <NavbarItems items={mockItems} />
        </NavbarDesktop>

        <NavbarMobileMenu>
          <NavbarMobileItems items={mockItems} />
        </NavbarMobileMenu>
      </NavbarRoot>
    </NavbarProvider>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
<NavbarProvider>
  <NavbarRoot>
    <NavbarLogo>
      <img src={logo} alt="Logo" />
    </NavbarLogo>

    <NavbarDesktop>
      <NavbarItems items={items} />
    </NavbarDesktop>

    <NavbarMobileMenu>
      <NavbarMobileItems items={items} />
    </NavbarMobileMenu>
  </NavbarRoot>
</NavbarProvider>
`,
      },
    },
  },
};

export const LinksOnly: StoryObj = {
  render: () => (
    <NavbarProvider>
      <NavbarRoot>
        <NavbarLogo>
          <Text fontSize="$6" fontWeight="bold">
            🎨 567f
          </Text>
        </NavbarLogo>

        <NavbarDesktop>
          <NavbarItems items={mockItems.filter((i) => i.type === 'link')} />
        </NavbarDesktop>

        <NavbarDesktop align="end">
          <NavbarActions actions={mockActions} />
        </NavbarDesktop>

        <NavbarMobileMenu>
          <NavbarMobileItems items={mockItems.filter((i) => i.type === 'link')} />
          <NavbarActions actions={mockActions} />
        </NavbarMobileMenu>
      </NavbarRoot>
    </NavbarProvider>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
// Only simple links, no dropdown columns
<NavbarProvider>
  <NavbarRoot>
    <NavbarLogo>...</NavbarLogo>

    <NavbarDesktop>
      <NavbarItems items={linkItems} />
    </NavbarDesktop>

    <NavbarDesktop align="end">
      <NavbarActions actions={actions} />
    </NavbarDesktop>

    <NavbarMobileMenu>
      <NavbarMobileItems items={linkItems} />
      <NavbarActions actions={actions} />
    </NavbarMobileMenu>
  </NavbarRoot>
</NavbarProvider>
`,
      },
    },
  },
};

export const Minimal: StoryObj = {
  render: () => (
    <NavbarProvider>
      <NavbarRoot>
        <NavbarLogo>
          <Text fontSize="$6" fontWeight="bold">
            🎨 567f
          </Text>
        </NavbarLogo>

        <NavbarDesktop>
          <NavbarItems
            items={[
              { _key: '1', type: 'link', name: 'Home', href: '/' },
              { _key: '2', type: 'link', name: 'About', href: '/about' },
            ]}
          />
        </NavbarDesktop>
      </NavbarRoot>
    </NavbarProvider>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
// Minimal navbar — just logo and a couple links
<NavbarProvider>
  <NavbarRoot>
    <NavbarLogo>
      <img src="/logo.svg" alt="Logo" />
    </NavbarLogo>

    <NavbarDesktop>
      <NavbarItems items={[
        { _key: '1', type: 'link', name: 'Home', href: '/' },
        { _key: '2', type: 'link', name: 'About', href: '/about' },
      ]} />
    </NavbarDesktop>
  </NavbarRoot>
</NavbarProvider>
`,
      },
    },
  },
};

// ── Individual component stories ──────────────────────────────────────

export const JustDropdown: StoryObj = {
  render: () => (
    <NavbarProvider>
      <div style={{ padding: 40 }}>
        <NavbarItems items={[mockItems[0]]} />
      </div>
    </NavbarProvider>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
<NavbarProvider>
  <NavbarItems items={[{
    _key: '1',
    type: 'column',
    title: 'Products',
    links: [
      { _key: '1a', name: 'Analytics', description: '...', href: '/analytics' },
      { _key: '1b', name: 'Automation', description: '...', href: '/automation' },
    ],
  }]} />
</NavbarProvider>
`,
      },
    },
  },
};

export const JustActions: StoryObj = {
  render: () => (
    <NavbarProvider>
      <div style={{ padding: 40, display: 'flex', gap: 12 }}>
        <NavbarActions actions={mockActions} />
      </div>
    </NavbarProvider>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
<NavbarProvider>
  <NavbarActions actions={[
    { _key: 'a1', type: 'anchor', text: 'Sign In', href: '/login' },
    { _key: 'a2', type: 'button', text: 'Get Started', href: '/signup', variant: 'outlined', theme: 'active' },
  ]} />
</NavbarProvider>
`,
      },
    },
  },
};

export const MobileAccordion: StoryObj = {
  render: () => (
    <NavbarProvider>
      <div style={{ maxWidth: 375, padding: 16 }}>
        <NavbarMobileItems items={mockItems} />
      </div>
    </NavbarProvider>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
<NavbarProvider>
  <NavbarMobileItems items={items} />
</NavbarProvider>
`,
      },
    },
  },
};
