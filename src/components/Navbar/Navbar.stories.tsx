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

// ── Full Navbar story ─────────────────────────────────────────────────

function FullNavbar({
  items,
  actions,
  showLogo,
}: {
  items: NavbarItem[];
  actions: NavbarAction[];
  showLogo: boolean;
}) {
  return (
    <NavbarProvider>
      <NavbarRoot>
        {showLogo && (
          <NavbarLogo>
            <Text fontSize="$6" fontWeight="bold">
              🎨 567f
            </Text>
          </NavbarLogo>
        )}

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

const meta: Meta<typeof FullNavbar> = {
  title: 'Components/Navbar',
  component: FullNavbar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    showLogo: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof FullNavbar>;

export const Default: Story = {
  args: {
    items: mockItems,
    actions: mockActions,
    showLogo: true,
  },
};

export const NoActions: Story = {
  args: {
    items: mockItems,
    actions: [],
    showLogo: true,
  },
};

export const LinksOnly: Story = {
  args: {
    items: mockItems.filter((i) => i.type === 'link'),
    actions: mockActions,
    showLogo: true,
  },
};

export const NoLogo: Story = {
  args: {
    items: mockItems,
    actions: mockActions,
    showLogo: false,
  },
};

export const Minimal: Story = {
  args: {
    items: [
      { _key: '1', type: 'link', name: 'Home', href: '/' },
      { _key: '2', type: 'link', name: 'About', href: '/about' },
    ],
    actions: [],
    showLogo: true,
  },
};

// ── Individual component stories ──────────────────────────────────────

export const JustDropdown: StoryObj = {
  render: () => (
    <NavbarProvider>
      <div style={{ padding: 40 }}>
        <NavbarItems
          items={[mockItems[0]]}
        />
      </div>
    </NavbarProvider>
  ),
};

export const JustActions: StoryObj = {
  render: () => (
    <NavbarProvider>
      <div style={{ padding: 40, display: 'flex', gap: 12 }}>
        <NavbarActions actions={mockActions} />
      </div>
    </NavbarProvider>
  ),
};

export const MobileAccordion: StoryObj = {
  render: () => (
    <NavbarProvider>
      <div style={{ maxWidth: 375, padding: 16 }}>
        <NavbarMobileItems items={mockItems} />
      </div>
    </NavbarProvider>
  ),
};
