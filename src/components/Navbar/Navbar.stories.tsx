import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './index';
import { Anchor, Button, ListItem, Text, XStack, YStack } from 'tamagui';
import { BarChart3, Zap, Puzzle, BookOpen, Newspaper, Globe } from '@tamagui/lucide-icons';

// ── Meta ──────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Components/Navbar',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A headless, composition-based navigation bar built on Tamagui.

## Architecture

The Navbar uses a **compound component** pattern where every piece is a slot that accepts any children. No data arrays, no mapping — pure JSX composition.

## Key Components

- **\`Navbar.Root\`** — Context provider. Wraps everything.
- **\`Navbar.GlobalBar\`** — Optional top utility bar (not sticky, hidden on mobile).
- **\`Navbar.AppBar\`** — Main navigation bar. Supports \`isSticky\` for sticky positioning with glassmorphism.
- **\`Navbar.AppBarItem\`** — Layout slot within AppBar. Controls flex, alignment, and mobile visibility.
- **\`Navbar.Item\`** — Universal content wrapper. Registers children for auto mobile menu.
- **\`Navbar.Dropdown\`** — Dropdown container. Supports \`openOnHover\` for hover-triggered menus.
- **\`Navbar.DropdownTrigger\`** — Click/hover target with animated chevron.
- **\`Navbar.DropdownContent\`** — Floating panel. Supports \`fullWidth\` for mega-menu style.
- **\`Navbar.DropdownItem\`** — Registers children for mobile accordion. Renders as-is on desktop.

## Mobile Menu

Items wrapped in \`Navbar.Item\` and \`Navbar.DropdownItem\` are automatically collected and rendered in a mobile bottom sheet. No manual duplication needed.

## Usage

\`\`\`tsx
<Navbar.Root>
  <Navbar.AppBar isSticky>
    <Navbar.AppBarItem>
      <Logo />
    </Navbar.AppBarItem>
    <Navbar.AppBarItem flex={1} justify="center" hideOnMobile>
      <Navbar.Item><Anchor href="/pricing">Pricing</Anchor></Navbar.Item>
      <Navbar.Dropdown openOnHover>
        <Navbar.DropdownTrigger><Button chromeless>Products</Button></Navbar.DropdownTrigger>
        <Navbar.DropdownContent>
          <Navbar.DropdownItem><ListItem title="Analytics" /></Navbar.DropdownItem>
        </Navbar.DropdownContent>
      </Navbar.Dropdown>
    </Navbar.AppBarItem>
    <Navbar.AppBarItem hideOnMobile>
      <Navbar.Item><Button theme="active">Get Started</Button></Navbar.Item>
    </Navbar.AppBarItem>
  </Navbar.AppBar>
</Navbar.Root>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    isSticky: {
      control: 'boolean',
      description: 'Whether AppBar sticks to top on scroll',
    },
    openOnHover: {
      control: 'boolean',
      description: 'Whether dropdowns open on hover',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether dropdown content spans full viewport width (mega-menu)',
    },
    density: {
      control: 'select',
      options: ['compact', 'default', 'spacious'],
      description: 'Spacing density preset',
    },
  },
  args: {
    isSticky: false,
    openOnHover: false,
    fullWidth: false,
    density: 'default',
  },
};

export default meta;

type NavbarArgs = {
  isSticky: boolean;
  openOnHover: boolean;
  fullWidth: boolean;
  density: 'compact' | 'default' | 'spacious';
};

// ── Full composition with GlobalBar ───────────────────────────────────

export const Default: StoryObj<NavbarArgs> = {
  render: (args) => (
    <YStack>
      <Navbar.Root>
        <Navbar.GlobalBar>
          <XStack alignItems="center" gap="$2">
            <Navbar.Dropdown>
              <Navbar.DropdownTrigger>
                <Anchor href="/shop">Shop for home</Anchor>
              </Navbar.DropdownTrigger>
              <Navbar.DropdownContent columns={{ xs: 1, xl: 2 }}>
                <Navbar.DropdownItem>
                  <ListItem hoverTheme pressTheme borderRadius="$3" title={<Anchor href="/furniture">Furniture</Anchor>} subTitle="Tables, chairs, sofas" />
                </Navbar.DropdownItem>
                <Navbar.DropdownItem>
                  <ListItem hoverTheme pressTheme borderRadius="$3" title={<Anchor href="/lighting">Lighting</Anchor>} subTitle="Lamps, fixtures, LEDs" />
                </Navbar.DropdownItem>
                <Navbar.DropdownItem>
                  <ListItem hoverTheme pressTheme borderRadius="$3" title={<Anchor href="/decor">Decor</Anchor>} subTitle="Art, rugs, pillows" />
                </Navbar.DropdownItem>
                <Navbar.DropdownItem>
                  <ListItem hoverTheme pressTheme borderRadius="$3" title={<Anchor href="/outdoor">Outdoor</Anchor>} subTitle="Patio, garden, grills" />
                </Navbar.DropdownItem>
              </Navbar.DropdownContent>
            </Navbar.Dropdown>
            <Navbar.Item><Anchor href="/business">Small Business</Anchor></Navbar.Item>
            <Navbar.Item><Anchor href="/workplace">Workplace</Anchor></Navbar.Item>
          </XStack>
          <XStack alignItems="center" gap="$2">
            <Navbar.Item><Anchor href="/support">Customer Service</Anchor></Navbar.Item>
            <Navbar.Item><Anchor href="/contact">Contact Us</Anchor></Navbar.Item>
            <Navbar.Dropdown openOnHover>
              <Navbar.DropdownTrigger>
                <XStack alignItems="center" gap="$1.5"><Globe size={14} /><Anchor>United States</Anchor></XStack>
              </Navbar.DropdownTrigger>
              <Navbar.DropdownContent columns={{ xs: 1 }}>
                <Navbar.DropdownItem>
                  <ListItem hoverTheme pressTheme borderRadius="$3" title="United States" subTitle="English" />
                </Navbar.DropdownItem>
                <Navbar.DropdownItem>
                  <ListItem hoverTheme pressTheme borderRadius="$3" title="United Kingdom" subTitle="English" />
                </Navbar.DropdownItem>
                <Navbar.DropdownItem>
                  <ListItem hoverTheme pressTheme borderRadius="$3" title="Deutschland" subTitle="Deutsch" />
                </Navbar.DropdownItem>
                <Navbar.DropdownItem>
                  <ListItem hoverTheme pressTheme borderRadius="$3" title="Україна" subTitle="Українська" />
                </Navbar.DropdownItem>
              </Navbar.DropdownContent>
            </Navbar.Dropdown>
          </XStack>
        </Navbar.GlobalBar>

        <Navbar.AppBar isSticky={args.isSticky} density={args.density}>
          <Navbar.AppBarItem>
            <Text fontSize="$6" fontWeight="bold">🎨 567f</Text>
          </Navbar.AppBarItem>

          <Navbar.AppBarItem flex={1} justify="center" hideOnMobile>
            <Navbar.Item><Anchor href="/pricing">Pricing</Anchor></Navbar.Item>
            <Navbar.Item><Anchor href="/about">About</Anchor></Navbar.Item>

            <Navbar.Dropdown openOnHover={args.openOnHover}>
              <Navbar.DropdownTrigger>
                <Text>Products</Text>
              </Navbar.DropdownTrigger>
              <Navbar.DropdownContent fullWidth={args.fullWidth}>
                <Navbar.DropdownItem>
                  <ListItem hoverTheme pressTheme borderRadius="$3" icon={BarChart3} title={<Anchor href="/products/analytics">Analytics</Anchor>} subTitle="Track your metrics in real-time" />
                </Navbar.DropdownItem>
                <Navbar.DropdownItem>
                  <ListItem hoverTheme pressTheme borderRadius="$3" icon={Zap} title={<Anchor href="/products/automation">Automation</Anchor>} subTitle="Streamline your workflows" />
                </Navbar.DropdownItem>
                <Navbar.DropdownItem>
                  <ListItem hoverTheme pressTheme borderRadius="$3" icon={Puzzle} title={<Anchor href="/products/integrations">Integrations</Anchor>} subTitle="Connect with your favorite tools" />
                </Navbar.DropdownItem>
              </Navbar.DropdownContent>
            </Navbar.Dropdown>

            <Navbar.Dropdown openOnHover={args.openOnHover}>
              <Navbar.DropdownTrigger>
                <Text>Resources</Text>
              </Navbar.DropdownTrigger>
              <Navbar.DropdownContent fullWidth={args.fullWidth}>
                <Navbar.DropdownItem>
                  <ListItem hoverTheme pressTheme borderRadius="$3" icon={BookOpen} title={<Anchor href="/docs">Documentation</Anchor>} subTitle="Guides and API reference" />
                </Navbar.DropdownItem>
                <Navbar.DropdownItem>
                  <ListItem hoverTheme pressTheme borderRadius="$3" icon={Newspaper} title={<Anchor href="/blog">Blog</Anchor>} subTitle="Latest news and updates" />
                </Navbar.DropdownItem>
              </Navbar.DropdownContent>
            </Navbar.Dropdown>
          </Navbar.AppBarItem>

          <Navbar.AppBarItem hideOnMobile>
            <Navbar.Item><Button chromeless>Sign In</Button></Navbar.Item>
            <Navbar.Item><Button theme="active">Get Started</Button></Navbar.Item>
          </Navbar.AppBarItem>

          <Navbar.MobileToggle />
        </Navbar.AppBar>
      </Navbar.Root>

      {/* Page content to demonstrate sticky */}
      <YStack padding="$6" gap="$4">
        {Array.from({ length: 20 }).map((_, i) => (
          <YStack key={i} padding="$4" backgroundColor="$color2" borderRadius="$3">
            <Text color="$color11">
              Content block {i + 1} — scroll to see sticky AppBar + GlobalBar scrolls away
            </Text>
          </YStack>
        ))}
      </YStack>
    </YStack>
  ),
};

// ── Without GlobalBar ─────────────────────────────────────────────────

export const WithoutGlobalBar: StoryObj = {
  render: () => (
    <YStack>
      <Navbar.Root>
        <Navbar.AppBar>
          <Navbar.AppBarItem>
            <Text fontSize="$6" fontWeight="bold">🎨 567f</Text>
          </Navbar.AppBarItem>

          <Navbar.AppBarItem flex={1} justify="center" hideOnMobile>
            <Navbar.Item><Anchor href="/pricing">Pricing</Anchor></Navbar.Item>
            <Navbar.Item><Anchor href="/about">About</Anchor></Navbar.Item>

            <Navbar.Dropdown>
              <Navbar.DropdownTrigger>
                <Button chromeless>Products</Button>
              </Navbar.DropdownTrigger>
              <Navbar.DropdownContent>
                <Navbar.DropdownItem>
                  <ListItem hoverTheme pressTheme borderRadius="$3" icon={BarChart3} title={<Anchor href="/products/analytics">Analytics</Anchor>} subTitle="Track your metrics" />
                </Navbar.DropdownItem>
                <Navbar.DropdownItem>
                  <ListItem hoverTheme pressTheme borderRadius="$3" icon={Zap} title={<Anchor href="/products/automation">Automation</Anchor>} subTitle="Streamline workflows" />
                </Navbar.DropdownItem>
              </Navbar.DropdownContent>
            </Navbar.Dropdown>
          </Navbar.AppBarItem>

          <Navbar.AppBarItem hideOnMobile>
            <Navbar.Item><Button chromeless>Sign In</Button></Navbar.Item>
            <Navbar.Item><Button theme="active">Get Started</Button></Navbar.Item>
          </Navbar.AppBarItem>
        </Navbar.AppBar>
      </Navbar.Root>

      <YStack padding="$6" gap="$4">
        {Array.from({ length: 10 }).map((_, i) => (
          <YStack key={i} padding="$4" backgroundColor="$color2" borderRadius="$3">
            <Text color="$color11">Content block {i + 1}</Text>
          </YStack>
        ))}
      </YStack>
    </YStack>
  ),
};

// ── Minimal ───────────────────────────────────────────────────────────

export const Minimal: StoryObj = {
  render: () => (
    <Navbar.Root>
      <Navbar.AppBar>
        <Navbar.AppBarItem>
          <Text fontSize="$6" fontWeight="bold">🎨 567f</Text>
        </Navbar.AppBarItem>

        <Navbar.AppBarItem flex={1} justify="center" hideOnMobile>
          <Navbar.Item><Anchor href="/">Home</Anchor></Navbar.Item>
          <Navbar.Item><Anchor href="/about">About</Anchor></Navbar.Item>
        </Navbar.AppBarItem>

        <Navbar.AppBarItem hideOnMobile>
          <Navbar.Item><Button theme="active">Get Started</Button></Navbar.Item>
        </Navbar.AppBarItem>
      </Navbar.AppBar>
    </Navbar.Root>
  ),
};

// ── With custom component ─────────────────────────────────────────────

function CustomSearchInput() {
  return (
    <input
      type="search"
      placeholder="Search..."
      style={{
        padding: '6px 12px',
        borderRadius: 6,
        border: '1px solid #e0e0e0',
        fontSize: 14,
        outline: 'none',
        width: 160,
      }}
    />
  );
}

export const WithCustomComponents: StoryObj = {
  render: () => (
    <Navbar.Root>
      <Navbar.AppBar>
        <Navbar.AppBarItem>
          <Text fontSize="$6" fontWeight="bold">🎨 567f</Text>
        </Navbar.AppBarItem>

        <Navbar.AppBarItem flex={1} justify="center" hideOnMobile>
          <Navbar.Item><Anchor href="/pricing">Pricing</Anchor></Navbar.Item>
          <Navbar.Dropdown>
            <Navbar.DropdownTrigger>
              <Button chromeless>Products</Button>
            </Navbar.DropdownTrigger>
            <Navbar.DropdownContent>
              <Navbar.DropdownItem>
                <Anchor href="/analytics">Analytics</Anchor>
              </Navbar.DropdownItem>
              <Navbar.DropdownItem>
                <Anchor href="/automation">Automation</Anchor>
              </Navbar.DropdownItem>
            </Navbar.DropdownContent>
          </Navbar.Dropdown>
          <Navbar.Item><CustomSearchInput /></Navbar.Item>
        </Navbar.AppBarItem>

        <Navbar.AppBarItem hideOnMobile>
          <Navbar.Item><Button chromeless>Sign In</Button></Navbar.Item>
          <Navbar.Item><Button theme="active">Get Started</Button></Navbar.Item>
        </Navbar.AppBarItem>
      </Navbar.AppBar>
    </Navbar.Root>
  ),
};
