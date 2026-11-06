import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Footer } from './index';
import { Text, Button, YStack } from 'tamagui';

/**
 * Core Footer API stories.
 * Site recipes → `Components/Footer/Examples`.
 * Real-site screenshots → `docs/REFERENCES.md` (not Storybook).
 */

const onNavigate = action('navigate');

function ActionLink({
  href,
  children,
  style,
  target,
  rel,
  ...props
}: {
  href: string;
  children: React.ReactNode;
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
      }}
      style={style}
      {...props}
    >
      {children}
    </a>
  );
}

const meta: Meta = {
  title: 'Components/Footer',
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

/** Full composition: Top + Brand (socials) + Nav + Aside + Bottom (legal + meta). */
export const Default: Story = {
  render: () => (
    <Footer.Root linkComponent={ActionLink}>
      <Footer.Top>
        <YStack
          backgroundColor="$color2"
          borderRadius="$4"
          padding="$5"
          gap="$3"
          alignItems="center"
          $md={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <YStack gap="$2" flex={1} alignItems="center" $md={{ alignItems: 'flex-start' }}>
            <Text fontSize="$6" fontWeight="700" textAlign="center" $md={{ textAlign: 'left' }}>
              Ship your next site faster
            </Text>
            <Text color="$color10" textAlign="center" $md={{ textAlign: 'left' }}>
              Composition Footer with every slot — Top, Brand, Nav, Aside, Bottom.
            </Text>
          </YStack>
          <Button themeInverse alignSelf="center" $md={{ alignSelf: 'auto' }}>
            Get started
          </Button>
        </YStack>
      </Footer.Top>

      <Footer.Main>
        <Footer.Brand>
          <Footer.Logo>
            <Text fontSize="$6" fontWeight="700">
              567f
            </Text>
          </Footer.Logo>
          <Footer.Subtitle>Building digital experiences.</Footer.Subtitle>
          <Footer.Meta>
            <Footer.Item href="https://instagram.com" openInNewTab aria-label="Instagram">
              IG
            </Footer.Item>
            <Footer.Item href="https://twitter.com" openInNewTab aria-label="X">
              X
            </Footer.Item>
            <Footer.Item href="https://linkedin.com" openInNewTab aria-label="LinkedIn">
              in
            </Footer.Item>
            <Footer.Item href="https://youtube.com" openInNewTab aria-label="YouTube">
              YT
            </Footer.Item>
          </Footer.Meta>
        </Footer.Brand>

        <Footer.Nav collapseOnMobile collapseTrigger="chevron">
          <Footer.Column>
            <Footer.ColumnTitle>Product</Footer.ColumnTitle>
            <Footer.Item href="/features">Features</Footer.Item>
            <Footer.Item href="/pricing">Pricing</Footer.Item>
            <Footer.Item href="/integrations">Integrations</Footer.Item>
            <Footer.Item href="/changelog">Changelog</Footer.Item>
          </Footer.Column>
          <Footer.Column>
            <Footer.ColumnTitle>Company</Footer.ColumnTitle>
            <Footer.Item href="/about">About</Footer.Item>
            <Footer.Item href="/blog">Blog</Footer.Item>
            <Footer.Item href="/careers" openInNewTab>
              Careers
            </Footer.Item>
            <Footer.Item href="/contact">Contact</Footer.Item>
          </Footer.Column>
          <Footer.Column>
            <Footer.ColumnTitle>Resources</Footer.ColumnTitle>
            <Footer.Item href="/docs">Documentation</Footer.Item>
            <Footer.Item href="/help">Help Center</Footer.Item>
            <Footer.Item href="/community">Community</Footer.Item>
            <Footer.Item href="/status">Status</Footer.Item>
          </Footer.Column>
        </Footer.Nav>

        <Footer.Aside>
          <Text fontWeight="600" fontSize="$4" textAlign="center" $lg={{ textAlign: 'left' }} width="100%">
            Stay in the loop
          </Text>
          <Text fontSize="$2" color="$color10" textAlign="center" $lg={{ textAlign: 'left' }} width="100%">
            Product updates — no spam.
          </Text>
          <Button size="$3" bordered width="100%">
            Email sign up
          </Button>
          <Text fontWeight="600" fontSize="$3" marginTop="$2" textAlign="center" $lg={{ textAlign: 'left' }} width="100%">
            Get the app
          </Text>
          <Button size="$3" width="100%">
            App Store
          </Button>
          <Button size="$3" chromeless width="100%">
            Google Play
          </Button>
        </Footer.Aside>
      </Footer.Main>

      <Footer.Bottom>
        <Footer.Copyright>
          © {new Date().getFullYear()} 567 Figures. All rights reserved.
        </Footer.Copyright>
        <Footer.Legal>
          <Footer.Item href="/terms">Terms</Footer.Item>
          <Footer.Item href="/privacy">Privacy</Footer.Item>
          <Footer.Item href="/cookies">Cookies</Footer.Item>
          <Footer.Item href="/accessibility">Accessibility</Footer.Item>
        </Footer.Legal>
        <Footer.Meta>
          <Footer.Item href="/en">English</Footer.Item>
          <Footer.Item href="https://github.com" openInNewTab aria-label="GitHub">
            GH
          </Footer.Item>
        </Footer.Meta>
      </Footer.Bottom>
    </Footer.Root>
  ),
};

/** Resize Storybook to a phone width to see accordion columns. */
export const MobileAccordion: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  render: () => (
    <Footer.Root linkComponent={ActionLink}>
      <Footer.Main>
        <Footer.Nav collapseOnMobile>
          <Footer.Column>
            <Footer.ColumnTitle>Product</Footer.ColumnTitle>
            <Footer.Item href="/features">Features</Footer.Item>
            <Footer.Item href="/pricing">Pricing</Footer.Item>
            <Footer.Item href="/changelog">Changelog</Footer.Item>
          </Footer.Column>
          <Footer.Column>
            <Footer.ColumnTitle>Company</Footer.ColumnTitle>
            <Footer.Item href="/about">About</Footer.Item>
            <Footer.Item href="/careers">Careers</Footer.Item>
            <Footer.Item href="/contact">Contact</Footer.Item>
          </Footer.Column>
          <Footer.Column>
            <Footer.ColumnTitle>Legal</Footer.ColumnTitle>
            <Footer.Item href="/terms">Terms</Footer.Item>
            <Footer.Item href="/privacy">Privacy</Footer.Item>
          </Footer.Column>
        </Footer.Nav>
      </Footer.Main>
      <Footer.Bottom>
        <Footer.Copyright>© 567 Figures</Footer.Copyright>
      </Footer.Bottom>
    </Footer.Root>
  ),
};

/** DOM order = visual order: Brand after Nav. */
export const BrandAfterNav: Story = {
  render: () => (
    <Footer.Root linkComponent={ActionLink}>
      <Footer.Main>
        <Footer.Nav collapseOnMobile={false}>
          <Footer.Column>
            <Footer.ColumnTitle>Links</Footer.ColumnTitle>
            <Footer.Item href="/a">A</Footer.Item>
            <Footer.Item href="/b">B</Footer.Item>
          </Footer.Column>
        </Footer.Nav>
        <Footer.Brand>
          <Footer.Logo>
            <Text fontWeight="700">Brand after Nav</Text>
          </Footer.Logo>
        </Footer.Brand>
      </Footer.Main>
      <Footer.Bottom>
        <Footer.Copyright>Order follows JSX</Footer.Copyright>
      </Footer.Bottom>
    </Footer.Root>
  ),
};

export const Minimal: Story = {
  render: () => (
    <Footer.Root linkComponent={ActionLink}>
      <Footer.Main>
        <Footer.Brand>
          <Footer.Logo>
            <Text fontSize="$6" fontWeight="700">
              567f
            </Text>
          </Footer.Logo>
        </Footer.Brand>
      </Footer.Main>
      <Footer.Bottom>
        <Footer.Copyright>© {new Date().getFullYear()} 567 Figures</Footer.Copyright>
      </Footer.Bottom>
    </Footer.Root>
  ),
};

/** Headspace-style `+` accordion trigger (use viewport &lt; `$lg`). */
export const AccordionPlus: Story = {
  name: 'Accordion trigger: plus',
  parameters: { viewport: { defaultViewport: 'mobile1' } },
  render: () => (
    <Footer.Root linkComponent={ActionLink}>
      <Footer.Main>
        <Footer.Brand>
          <Footer.Logo>
            <Text fontWeight="700">567f</Text>
          </Footer.Logo>
        </Footer.Brand>
        <Footer.Nav collapseOnMobile collapseTrigger="plus">
          <Footer.Column>
            <Footer.ColumnTitle>Product</Footer.ColumnTitle>
            <Footer.Item href="/features">Features</Footer.Item>
            <Footer.Item href="/pricing">Pricing</Footer.Item>
          </Footer.Column>
          <Footer.Column>
            <Footer.ColumnTitle>Company</Footer.ColumnTitle>
            <Footer.Item href="/about">About</Footer.Item>
          </Footer.Column>
        </Footer.Nav>
      </Footer.Main>
      <Footer.Bottom>
        <Footer.Copyright>© 567 Figures</Footer.Copyright>
      </Footer.Bottom>
    </Footer.Root>
  ),
};

/** HubSpot / Herman-style `>` accordion trigger. */
export const AccordionCaret: Story = {
  name: 'Accordion trigger: caret',
  parameters: { viewport: { defaultViewport: 'mobile1' } },
  render: () => (
    <Footer.Root linkComponent={ActionLink}>
      <Footer.Main>
        <Footer.Nav collapseOnMobile collapseTrigger="caret">
          <Footer.Column>
            <Footer.ColumnTitle>Popular Features</Footer.ColumnTitle>
            <Footer.Item href="/a">A</Footer.Item>
          </Footer.Column>
          <Footer.Column>
            <Footer.ColumnTitle>Company</Footer.ColumnTitle>
            <Footer.Item href="/b">B</Footer.Item>
          </Footer.Column>
        </Footer.Nav>
      </Footer.Main>
      <Footer.Bottom>
        <Footer.Copyright>© 567 Figures</Footer.Copyright>
      </Footer.Bottom>
    </Footer.Root>
  ),
};
