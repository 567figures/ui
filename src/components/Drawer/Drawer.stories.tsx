import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './index';
import { Button, Input, Label, Text, XStack, YStack } from 'tamagui';
import { Settings, Menu, Home, Users, FileText, BarChart3, ShoppingCart } from '@tamagui/lucide-icons';

// ── Meta ──────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Components/Drawer',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A headless, composition-based drawer (side panel) built on Tamagui.

## Architecture

The Drawer uses a **compound component** pattern with context-based state management.

## Key Components

- **\`Drawer.Root\`** — Context provider. Controls placement, size, and mount behavior.
- **\`Drawer.Trigger\`** — Button that opens the drawer.
- **\`Drawer.Overlay\`** — Semi-transparent backdrop (not rendered in preserved mode).
- **\`Drawer.Content\`** — The sliding panel.
- **\`Drawer.Header\`** — Top bar with title and close button.
- **\`Drawer.Body\`** — Scrollable content area.
- **\`Drawer.Footer\`** — Bottom action bar.
- **\`Drawer.Close\`** — Convenience close trigger.
- **\`Drawer.PageContent\`** — Wrapper for main page content (shifts in preserved mode).

## Mount Behavior

| Mode | Behavior |
|------|----------|
| Default | Drawer overlays on top. Content unmounts when closed. |
| \`keepMounted\` | Drawer overlays on top. DOM stays mounted (preserves scroll). |
| \`preserved\` | **Drawer + page content visible simultaneously.** Page shifts to make room. Full state preserved. |

## Usage — Preserved (persistent sidebar)

\`\`\`tsx
<Drawer.Root placement="left" size="md" preserved>
  <Drawer.Content>
    <Drawer.Header>Navigation</Drawer.Header>
    <Drawer.Body>
      <NavLinks />
    </Drawer.Body>
  </Drawer.Content>
  <Drawer.PageContent>
    <Drawer.Trigger><Button>☰ Menu</Button></Drawer.Trigger>
    <main>Page content shifts when drawer opens</main>
  </Drawer.PageContent>
</Drawer.Root>
\`\`\`

## Usage — Overlay (default)

\`\`\`tsx
<Drawer.Root placement="right" size="md">
  <Drawer.Trigger><Button>Open</Button></Drawer.Trigger>
  <Drawer.Overlay />
  <Drawer.Content>
    <Drawer.Header>Settings</Drawer.Header>
    <Drawer.Body>...</Drawer.Body>
    <Drawer.Footer>
      <Drawer.Close><Button>Cancel</Button></Drawer.Close>
      <Button theme="active">Save</Button>
    </Drawer.Footer>
  </Drawer.Content>
</Drawer.Root>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Slide-in direction',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Panel width/height preset',
    },
    keepMounted: {
      control: 'boolean',
      description: 'Keep DOM mounted when closed (overlay mode)',
    },
    preserved: {
      control: 'boolean',
      description: 'Persistent sidebar — drawer + page content visible together',
    },
  },
  args: {
    placement: 'right',
    size: 'md',
    keepMounted: false,
    preserved: false,
  },
};

export default meta;

type DrawerArgs = {
  placement: 'left' | 'right' | 'top' | 'bottom';
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  keepMounted: boolean;
  preserved: boolean;
};

// ── Default (overlay mode) ────────────────────────────────────────────

export const Default: StoryObj<DrawerArgs> = {
  render: (args) => (
    <YStack padding="$6" height="100vh">
      <Drawer.Root
        placement={args.placement}
        size={args.size}
        keepMounted={args.keepMounted}
        preserved={args.preserved}
      >
        <Drawer.Trigger>
          <Button theme="active">Open Drawer</Button>
        </Drawer.Trigger>

        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>Settings</Drawer.Header>
          <Drawer.Body>
            <YStack gap="$4">
              <YStack gap="$2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </YStack>
              <YStack gap="$2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" />
              </YStack>
            </YStack>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.Close asChild>
              <Button>Cancel</Button>
            </Drawer.Close>
            <Button theme="active">Save Changes</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>
    </YStack>
  ),
};

// ── Preserved Mode — Persistent Sidebar ────────────���──────────────────

export const Preserved: StoryObj = {
  args: {
    placement: "left"
  },

  render: () => (
    <YStack height="100vh" width="100%">
      <Drawer.Root placement="left" size="sm" preserved defaultOpen>
        <Drawer.Content>
          <Drawer.Header showClose={false}>
            <Text fontSize="$5" fontWeight="bold">🎨 App</Text>
          </Drawer.Header>
          <Drawer.Body padding="$2">
            <YStack gap="$1">
              {[
                { icon: Home, label: 'Dashboard' },
                { icon: Users, label: 'Team' },
                { icon: FileText, label: 'Documents' },
                { icon: BarChart3, label: 'Analytics' },
                { icon: Settings, label: 'Settings' },
              ].map(({ icon: Icon, label }) => (
                <XStack
                  key={label}
                  alignItems="center"
                  gap="$3"
                  paddingVertical="$2.5"
                  paddingHorizontal="$3"
                  borderRadius="$3"
                  hoverStyle={{ backgroundColor: '$color3' }}
                  pressStyle={{ backgroundColor: '$color4' }}
                  cursor="pointer"
                >
                  <Icon size={18} color="$color11" />
                  <Text color="$color12">{label}</Text>
                </XStack>
              ))}
            </YStack>
          </Drawer.Body>
        </Drawer.Content>

        <Drawer.PageContent>
          <YStack flex={1} padding="$4" gap="$4">
            <XStack alignItems="center" gap="$3">
              <Drawer.Trigger>
                <Button circular chromeless size="$3" icon={Menu} />
              </Drawer.Trigger>
              <Text fontSize="$6" fontWeight="bold" color="$color12">
                Dashboard
              </Text>
            </XStack>

            <Text color="$color10">
              This is the main page content. It shifts to the right when the drawer is open.
              Both the drawer and this content are visible simultaneously.
            </Text>

            <XStack flexWrap="wrap" gap="$3">
              {Array.from({ length: 6 }).map((_, i) => (
                <YStack
                  key={i}
                  flex={1}
                  minWidth={200}
                  padding="$4"
                  backgroundColor="$color2"
                  borderRadius="$4"
                  borderWidth={1}
                  borderColor="$borderColor"
                >
                  <Text fontWeight="600" color="$color12">Card {i + 1}</Text>
                  <Text fontSize="$3" color="$color10" marginTop="$1">
                    Content visible alongside the drawer
                  </Text>
                </YStack>
              ))}
            </XStack>
          </YStack>
        </Drawer.PageContent>
      </Drawer.Root>
    </YStack>
  )
};

// ── Preserved with State ──────────────────────────────────────────────

function SidebarWithState() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const items = ['Dashboard', 'Team', 'Documents', 'Analytics', 'Settings'];

  return (
    <YStack gap="$1">
      {items.map((item) => (
        <XStack
          key={item}
          alignItems="center"
          paddingVertical="$2.5"
          paddingHorizontal="$3"
          borderRadius="$3"
          backgroundColor={activeItem === item ? '$color4' : 'transparent'}
          hoverStyle={{ backgroundColor: '$color3' }}
          pressStyle={{ backgroundColor: '$color4' }}
          cursor="pointer"
          onPress={() => setActiveItem(item)}
        >
          <Text
            color={activeItem === item ? '$color12' : '$color11'}
            fontWeight={activeItem === item ? '600' : '400'}
          >
            {item}
          </Text>
        </XStack>
      ))}
      <YStack padding="$3" marginTop="$3" backgroundColor="$color2" borderRadius="$3">
        <Text fontSize="$2" color="$color10">
          Active: {activeItem}
        </Text>
        <Text fontSize="$2" color="$color10" marginTop="$1">
          ℹ️ Close & reopen — selection is preserved!
        </Text>
      </YStack>
    </YStack>
  );
}

export const PreservedWithState: StoryObj = {
  render: () => (
    <YStack height="100vh" width="100%">
      <Drawer.Root placement="left" size="sm" preserved>
        <Drawer.Content>
          <Drawer.Header>Navigation</Drawer.Header>
          <Drawer.Body padding="$2">
            <SidebarWithState />
          </Drawer.Body>
        </Drawer.Content>

        <Drawer.PageContent>
          <YStack flex={1} padding="$4" gap="$4">
            <XStack alignItems="center" gap="$3">
              <Drawer.Trigger>
                <Button circular chromeless size="$3" icon={Menu} />
              </Drawer.Trigger>
              <Text fontSize="$5" fontWeight="bold" color="$color12">
                Preserved State Demo
              </Text>
            </XStack>

            <YStack padding="$4" backgroundColor="$color2" borderRadius="$4">
              <Text color="$color11">
                1. Open the drawer (click ☰)
              </Text>
              <Text color="$color11" marginTop="$2">
                2. Click different nav items to change the active selection
              </Text>
              <Text color="$color11" marginTop="$2">
                3. Close the drawer (click ☰ again)
              </Text>
              <Text color="$color11" marginTop="$2">
                4. Reopen — the active item is still selected!
              </Text>
              <Text color="$color10" marginTop="$3" fontSize="$2">
                With `preserved`, the drawer's React tree stays mounted.
                State, refs, scroll position — everything is retained.
              </Text>
            </YStack>
          </YStack>
        </Drawer.PageContent>
      </Drawer.Root>
    </YStack>
  ),
};

// ── Placements ────────────────────────────────────────────────────────

export const Placements: StoryObj = {
  render: () => (
    <YStack padding="$6" height="100vh" gap="$4">
      <Text fontSize="$5" fontWeight="bold" color="$color12">
        All Placements (overlay mode)
      </Text>

      <XStack gap="$3" flexWrap="wrap">
        {(['left', 'right', 'top', 'bottom'] as const).map((placement) => (
          <Drawer.Root key={placement} placement={placement} size="sm">
            <Drawer.Trigger>
              <Button>{placement}</Button>
            </Drawer.Trigger>
            <Drawer.Overlay />
            <Drawer.Content>
              <Drawer.Header>{`Drawer from ${placement}`}</Drawer.Header>
              <Drawer.Body>
                <Text color="$color11">
                  This drawer slides in from the {placement}.
                </Text>
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.Close asChild>
                  <Button>Close</Button>
                </Drawer.Close>
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer.Root>
        ))}
      </XStack>
    </YStack>
  ),
};

// ── Sizes ─────────────────────────────────────────────────────────────

export const Sizes: StoryObj = {
  render: () => (
    <YStack padding="$6" height="100vh" gap="$4">
      <Text fontSize="$5" fontWeight="bold" color="$color12">
        Size Presets
      </Text>

      <XStack gap="$3" flexWrap="wrap">
        {(['sm', 'md', 'lg', 'xl', 'full'] as const).map((size) => (
          <Drawer.Root key={size} placement="right" size={size}>
            <Drawer.Trigger>
              <Button>{size}</Button>
            </Drawer.Trigger>
            <Drawer.Overlay />
            <Drawer.Content>
              <Drawer.Header>{`Size: ${size}`}</Drawer.Header>
              <Drawer.Body>
                <Text color="$color11">
                  Drawer with size="{size}"
                </Text>
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.Close asChild>
                  <Button>Close</Button>
                </Drawer.Close>
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer.Root>
        ))}
      </XStack>
    </YStack>
  ),
};

// ── Controlled ────────────────────────────────────────────────────────

export const Controlled: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <YStack padding="$6" height="100vh" gap="$4">
        <Text fontSize="$5" fontWeight="bold" color="$color12">
          Controlled Mode
        </Text>
        <Text color="$color10">
          State: {open ? 'Open' : 'Closed'}
        </Text>

        <XStack gap="$3">
          <Button onPress={() => setOpen(true)}>Open</Button>
          <Button onPress={() => setOpen(false)}>Close</Button>
          <Button onPress={() => setOpen((v) => !v)}>Toggle</Button>
        </XStack>

        <Drawer.Root open={open} onOpenChange={setOpen} placement="right" size="lg">
          <Drawer.Overlay />
          <Drawer.Content>
            <Drawer.Header>Controlled Drawer</Drawer.Header>
            <Drawer.Body>
              <YStack gap="$3">
                <Text color="$color11">
                  This drawer is controlled externally via state.
                </Text>
                <Text color="$color10" fontSize="$3">
                  No Drawer.Trigger needed — open/close via parent state.
                </Text>
              </YStack>
            </Drawer.Body>
            <Drawer.Footer justify="between">
              <Text fontSize="$2" color="$color9">Auto-saved</Text>
              <Drawer.Close asChild>
                <Button theme="active">Done</Button>
              </Drawer.Close>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Root>
      </YStack>
    );
  },
};

// ── Scrollable content (keepMounted) ──────────────────────────────────

export const ScrollableContent: StoryObj = {
  render: () => (
    <YStack padding="$6" height="100vh">
      <Drawer.Root placement="right" size="md" keepMounted>
        <Drawer.Trigger>
          <Button icon={ShoppingCart}>Cart (12 items)</Button>
        </Drawer.Trigger>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>Shopping Cart</Drawer.Header>
          <Drawer.Body>
            <YStack gap="$3">
              {Array.from({ length: 12 }).map((_, i) => (
                <XStack
                  key={i}
                  padding="$3"
                  backgroundColor="$color2"
                  borderRadius="$3"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <YStack>
                    <Text fontWeight="500" color="$color12">
                      Product {i + 1}
                    </Text>
                    <Text fontSize="$2" color="$color10">
                      ${(19.99 + i * 5).toFixed(2)}
                    </Text>
                  </YStack>
                  <Button size="$2" chromeless>Remove</Button>
                </XStack>
              ))}
            </YStack>
          </Drawer.Body>
          <Drawer.Footer justify="between">
            <Text fontWeight="600" color="$color12">Total: $389.88</Text>
            <Button theme="active">Checkout</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>
    </YStack>
  ),
};
