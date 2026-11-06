import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Footer } from './index';
import { Text, Button, YStack } from 'tamagui';

/**
 * Site-inspired Footer recipes (structure only — not brand skins).
 * Real-site PNGs live in docs/REFERENCES.md, not in Storybook.
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
  title: 'Components/Footer/Examples',
  parameters: {
    layout: 'fullscreen',
    // Mobile accordion is the interesting part for these recipes
    viewport: { defaultViewport: 'mobile1' },
  },
};

export default meta;
type Story = StoryObj;

export const Calm: Story = {
  name: 'Calm',
  parameters: { viewport: { defaultViewport: 'responsive' } },
  render: () => (
    <Footer.Root linkComponent={ActionLink}>
      <Footer.Main>
        <Footer.Brand>
          <Footer.Logo>
            <Text fontSize="$6" fontWeight="700">
              Calm
            </Text>
          </Footer.Logo>
          <Footer.Subtitle>Sleep, meditation, relaxation.</Footer.Subtitle>
        </Footer.Brand>
        <Footer.Nav collapseOnMobile>
          <Footer.Column>
            <Footer.ColumnTitle>Company</Footer.ColumnTitle>
            <Footer.Item href="/about">About</Footer.Item>
            <Footer.Item href="/careers">Careers</Footer.Item>
            <Footer.Item href="/press">Press</Footer.Item>
            <Footer.Item href="/blog">Blog</Footer.Item>
          </Footer.Column>
          <Footer.Column>
            <Footer.ColumnTitle>Offers</Footer.ColumnTitle>
            <Footer.Item href="/gift">Buy a gift</Footer.Item>
            <Footer.Item href="/redeem">Redeem</Footer.Item>
            <Footer.Item href="/family">Family Plan</Footer.Item>
          </Footer.Column>
          <Footer.Column>
            <Footer.ColumnTitle>Help</Footer.ColumnTitle>
            <Footer.Item href="/faq">FAQ</Footer.Item>
            <Footer.Item href="/contact">Contact</Footer.Item>
          </Footer.Column>
        </Footer.Nav>
      </Footer.Main>
      <Footer.Bottom>
        <Footer.Copyright>© {new Date().getFullYear()} Calm. All rights reserved.</Footer.Copyright>
        <Footer.Legal>
          <Footer.Item href="/terms">Terms</Footer.Item>
          <Footer.Item href="/privacy">Privacy</Footer.Item>
        </Footer.Legal>
      </Footer.Bottom>
    </Footer.Root>
  ),
};

export const Headspace: Story = {
  name: 'Headspace',
  render: () => (
    <Footer.Root linkComponent={ActionLink}>
      <Footer.Main>
        <Footer.Nav collapseOnMobile>
          <Footer.Column>
            <Footer.ColumnTitle>Get some Headspace</Footer.ColumnTitle>
            <Footer.Item href="/signup">Sign up</Footer.Item>
            <Footer.Item href="/plans">Plans</Footer.Item>
            <Footer.Item href="/gift">Gift</Footer.Item>
          </Footer.Column>
          <Footer.Column>
            <Footer.ColumnTitle>Our content</Footer.ColumnTitle>
            <Footer.Item href="/meditation">Meditation</Footer.Item>
            <Footer.Item href="/sleep">Sleep</Footer.Item>
            <Footer.Item href="/stress">Stress</Footer.Item>
          </Footer.Column>
          <Footer.Column>
            <Footer.ColumnTitle>About us</Footer.ColumnTitle>
            <Footer.Item href="/about">About</Footer.Item>
            <Footer.Item href="/careers">Careers</Footer.Item>
          </Footer.Column>
          <Footer.Column>
            <Footer.ColumnTitle>Support</Footer.ColumnTitle>
            <Footer.Item href="/help">Help</Footer.Item>
            <Footer.Item href="/contact">Contact</Footer.Item>
          </Footer.Column>
        </Footer.Nav>
        <Footer.Aside>
          <Text fontWeight="600" fontSize="$4">
            Get the app
          </Text>
          <Button size="$3">App Store</Button>
          <Button size="$3" chromeless>
            Google Play
          </Button>
        </Footer.Aside>
      </Footer.Main>
      <Footer.Bottom>
        <Footer.Copyright>© Headspace Inc.</Footer.Copyright>
        <Footer.Legal>
          <Footer.Item href="/terms">Terms</Footer.Item>
          <Footer.Item href="/privacy">Privacy</Footer.Item>
        </Footer.Legal>
        <Footer.Meta>
          <Footer.Item href="https://instagram.com" openInNewTab aria-label="Instagram">
            IG
          </Footer.Item>
          <Footer.Item href="https://twitter.com" openInNewTab aria-label="Twitter">
            X
          </Footer.Item>
        </Footer.Meta>
      </Footer.Bottom>
    </Footer.Root>
  ),
};

export const HermanMiller: Story = {
  name: 'Herman Miller',
  render: () => (
    <Footer.Root linkComponent={ActionLink}>
      <Footer.Main>
        <Footer.Brand>
          <Footer.Logo>
            <Text fontSize="$6" fontWeight="700">
              HM
            </Text>
          </Footer.Logo>
        </Footer.Brand>
        <Footer.Nav collapseOnMobile>
          <Footer.Column>
            <Footer.ColumnTitle>Herman Miller</Footer.ColumnTitle>
            <Footer.Item href="/about">About</Footer.Item>
            <Footer.Item href="/awards">Awards</Footer.Item>
            <Footer.Item href="/careers">Careers</Footer.Item>
            <Footer.Item href="/press">Press</Footer.Item>
          </Footer.Column>
          <Footer.Column>
            <Footer.ColumnTitle>Get Help</Footer.ColumnTitle>
            <Footer.Item href="/service">Customer Service</Footer.Item>
            <Footer.Item href="/assembly">Assembly Instructions</Footer.Item>
          </Footer.Column>
          <Footer.Column>
            <Footer.ColumnTitle>Shop</Footer.ColumnTitle>
            <Footer.Item href="/store">Herman Miller Store</Footer.Item>
            <Footer.Item href="/dealers">Find a dealer</Footer.Item>
            <Footer.Item href="/showrooms">Showrooms</Footer.Item>
          </Footer.Column>
        </Footer.Nav>
        <Footer.Aside>
          <Text fontWeight="600">Sign up for our newsletter</Text>
          <Button size="$3" bordered>
            Email sign up
          </Button>
          <Text fontWeight="600" marginTop="$2">
            Follow Us
          </Text>
          <Footer.Meta>
            <Footer.Item href="https://instagram.com" openInNewTab aria-label="Instagram">
              IG
            </Footer.Item>
            <Footer.Item href="https://facebook.com" openInNewTab aria-label="Facebook">
              FB
            </Footer.Item>
          </Footer.Meta>
        </Footer.Aside>
      </Footer.Main>
      <Footer.Bottom>
        <Footer.Copyright>© {new Date().getFullYear()} Herman Miller, Inc.</Footer.Copyright>
        <Footer.Legal>
          <Footer.Item href="/privacy">Privacy Notice</Footer.Item>
          <Footer.Item href="/cookies">Cookie Notice</Footer.Item>
          <Footer.Item href="/terms">Terms</Footer.Item>
        </Footer.Legal>
      </Footer.Bottom>
    </Footer.Root>
  ),
};

export const HubSpot: Story = {
  name: 'HubSpot',
  render: () => (
    <Footer.Root linkComponent={ActionLink}>
      <Footer.Main>
        <Footer.Nav collapseOnMobile>
          {['Popular Features', 'Free Tools', 'Company', 'Customers', 'Partners'].map((title) => (
            <Footer.Column key={title}>
              <Footer.ColumnTitle>{title}</Footer.ColumnTitle>
              <Footer.Item href="#">Link one</Footer.Item>
              <Footer.Item href="#">Link two</Footer.Item>
              <Footer.Item href="#">Link three</Footer.Item>
              <Footer.Item href="#">Link four</Footer.Item>
            </Footer.Column>
          ))}
        </Footer.Nav>
      </Footer.Main>
      <Footer.Bottom>
        <Footer.Copyright>© HubSpot, Inc.</Footer.Copyright>
        <Footer.Legal>
          <Footer.Item href="/legal">Legal Stuff</Footer.Item>
          <Footer.Item href="/privacy">Privacy Policy</Footer.Item>
        </Footer.Legal>
      </Footer.Bottom>
    </Footer.Root>
  ),
};

export const Coursera: Story = {
  name: 'Coursera',
  parameters: { viewport: { defaultViewport: 'responsive' } },
  render: () => (
    <Footer.Root linkComponent={ActionLink}>
      <Footer.Main>
        <Footer.Nav collapseOnMobile>
          {['Skills', 'Certificates', 'Courses', 'Career', 'Coursera', 'Community'].map((title) => (
            <Footer.Column key={title}>
              <Footer.ColumnTitle>{title}</Footer.ColumnTitle>
              <Footer.Item href="#">Item one</Footer.Item>
              <Footer.Item href="#">Item two</Footer.Item>
              <Footer.Item href="#">Item three</Footer.Item>
            </Footer.Column>
          ))}
        </Footer.Nav>
        <Footer.Aside>
          <Text fontWeight="600">App Downloads</Text>
          <Button size="$3">App Store</Button>
          <Button size="$3">Google Play</Button>
        </Footer.Aside>
      </Footer.Main>
      <Footer.Bottom>
        <Footer.Copyright>© Coursera Inc. All rights reserved.</Footer.Copyright>
      </Footer.Bottom>
    </Footer.Root>
  ),
};

export const Headway: Story = {
  name: 'Headway',
  render: () => (
    <Footer.Root linkComponent={ActionLink}>
      <Footer.Top>
        <YStack
          backgroundColor="$color2"
          borderRadius="$4"
          padding="$5"
          gap="$3"
          $md={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <YStack gap="$2" flex={1}>
            <Text fontSize="$6" fontWeight="700">
              Not sure where to start?
            </Text>
            <Text color="$color10">Answer a few questions and we’ll pick your first summaries.</Text>
          </YStack>
          <Button themeInverse alignSelf="flex-start">
            Get started
          </Button>
        </YStack>
      </Footer.Top>
      <Footer.Main>
        <Footer.Nav collapseOnMobile>
          <Footer.Column>
            <Footer.ColumnTitle>Headway</Footer.ColumnTitle>
            <Footer.Item href="/">Home</Footer.Item>
            <Footer.Item href="/gift">Gift Headway</Footer.Item>
          </Footer.Column>
          <Footer.Column>
            <Footer.ColumnTitle>Resources</Footer.ColumnTitle>
            <Footer.Item href="/summaries">Book summaries</Footer.Item>
            <Footer.Item href="/blog">Blog</Footer.Item>
            <Footer.Item href="/faq">FAQ</Footer.Item>
          </Footer.Column>
          <Footer.Column>
            <Footer.ColumnTitle>Legal</Footer.ColumnTitle>
            <Footer.Item href="/privacy">Privacy policy</Footer.Item>
            <Footer.Item href="/terms">Terms</Footer.Item>
          </Footer.Column>
          <Footer.Column>
            <Footer.ColumnTitle>Company</Footer.ColumnTitle>
            <Footer.Item href="mailto:support@example.com">support@example.com</Footer.Item>
          </Footer.Column>
        </Footer.Nav>
      </Footer.Main>
      <Footer.Bottom>
        <Footer.Copyright>© Headway</Footer.Copyright>
        <Footer.Meta>
          <Footer.Item href="https://instagram.com" openInNewTab aria-label="Instagram">
            IG
          </Footer.Item>
          <Footer.Item href="https://twitter.com" openInNewTab aria-label="X">
            X
          </Footer.Item>
        </Footer.Meta>
      </Footer.Bottom>
    </Footer.Root>
  ),
};
