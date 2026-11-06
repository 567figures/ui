import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text, Anchor } from 'tamagui';
import { FeatureCards } from './FeatureCardsIcon';

const meta: Meta = {
  title: 'Sections/FeatureCardsIcon',
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <FeatureCards.Root>
      <FeatureCards.Header>
        <FeatureCards.Title>We’re here to help you feel better</FeatureCards.Title>
      </FeatureCards.Header>
      <FeatureCards.Grid>
        <FeatureCards.Card>
          <FeatureCards.Icon>
            <Text fontSize="$8">🌿</Text>
          </FeatureCards.Icon>
          <FeatureCards.Title>Stress less.</FeatureCards.Title>
          <FeatureCards.Body>
            <Text color="$color10">Short practices for anxious moments.</Text>
          </FeatureCards.Body>
          <FeatureCards.Action>
            <Anchor href="/stress">Learn more</Anchor>
          </FeatureCards.Action>
        </FeatureCards.Card>
        <FeatureCards.Card>
          <FeatureCards.Icon>
            <Text fontSize="$8">🌙</Text>
          </FeatureCards.Icon>
          <FeatureCards.Title>Sleep more.</FeatureCards.Title>
          <FeatureCards.Body>
            <Text color="$color10">Stories and music for better nights.</Text>
          </FeatureCards.Body>
          <FeatureCards.Action>
            <Anchor href="/sleep">Learn more</Anchor>
          </FeatureCards.Action>
        </FeatureCards.Card>
        <FeatureCards.Card>
          <FeatureCards.Icon>
            <Text fontSize="$8">💚</Text>
          </FeatureCards.Icon>
          <FeatureCards.Title>Live mindfully.</FeatureCards.Title>
          <FeatureCards.Body>
            <Text color="$color10">Daily sessions that fit your life.</Text>
          </FeatureCards.Body>
          <FeatureCards.Action>
            <Anchor href="/mindfulness">Learn more</Anchor>
          </FeatureCards.Action>
        </FeatureCards.Card>
      </FeatureCards.Grid>
    </FeatureCards.Root>
  ),
};

