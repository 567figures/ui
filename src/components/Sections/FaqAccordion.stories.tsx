import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text, Anchor } from 'tamagui';
import { Faq } from './FaqAccordion';

const meta: Meta = {
  title: 'Sections/FaqAccordion',
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj;

export const FlatList: Story = {
  render: () => (
    <Faq.Root>
      <Faq.Header>
        <Faq.Title>Got questions? We’ve got answers.</Faq.Title>
      </Faq.Header>
      <Faq.List>
        <Faq.Item>
          <Faq.Trigger>How does the app work?</Faq.Trigger>
          <Faq.Content>
            <Text color="$color10">Pick a goal, get a plan, learn in 15 minutes a day.</Text>
          </Faq.Content>
        </Faq.Item>
        <Faq.Item>
          <Faq.Trigger>Can I cancel anytime?</Faq.Trigger>
          <Faq.Content>
            <Text color="$color10">Yes — cancel from account settings.</Text>
          </Faq.Content>
        </Faq.Item>
      </Faq.List>
      <Faq.Link>
        <Text fontSize="$2" color="$color10">
          Need more guidance?
        </Text>
        <Anchor href="/faq">Full FAQ page</Anchor>
      </Faq.Link>
    </Faq.Root>
  ),
};

export const GroupedCalmStyle: Story = {
  render: () => (
    <Faq.Root>
      <Faq.Header>
        <Faq.Eyebrow>
          <Text fontSize="$1">Help</Text>
        </Faq.Eyebrow>
        <Faq.Title>Frequently asked questions</Faq.Title>
      </Faq.Header>
      <Faq.Group>
        <Faq.GroupTitle>General</Faq.GroupTitle>
        <Faq.List>
          <Faq.Item>
            <Faq.Trigger>What is this product?</Faq.Trigger>
            <Faq.Content>
              <Text>A calm space for sleep and meditation.</Text>
            </Faq.Content>
          </Faq.Item>
          <Faq.Item>
            <Faq.Trigger>What’s included?</Faq.Trigger>
            <Faq.Content>
              <Text>Meditations, sleep stories, music.</Text>
            </Faq.Content>
          </Faq.Item>
        </Faq.List>
      </Faq.Group>
      <Faq.Group>
        <Faq.GroupTitle>Meditation & mindfulness</Faq.GroupTitle>
        <Faq.List>
          <Faq.Item>
            <Faq.Trigger>What is meditation?</Faq.Trigger>
            <Faq.Content>
              <Text>A practice of attention and awareness.</Text>
            </Faq.Content>
          </Faq.Item>
        </Faq.List>
      </Faq.Group>
    </Faq.Root>
  ),
};

export const Default: Story = { ...FlatList };
