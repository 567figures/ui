import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'tamagui';
import { SectionsProvider } from './SectionsContext';
import { ImageLinkCards } from './ImageLinkCards';

const meta: Meta = {
  title: 'Sections/ImageLinkCards',
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <SectionsProvider>
        <Story />
      </SectionsProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <ImageLinkCards.Root>
      <ImageLinkCards.Header>
        <ImageLinkCards.Title>Explore topics</ImageLinkCards.Title>
        <ImageLinkCards.Body>
          <Text color="$color10">Image + title + body cards.</Text>
        </ImageLinkCards.Body>
      </ImageLinkCards.Header>
      <ImageLinkCards.Grid>
        <ImageLinkCards.Card href="/sleep">
          <ImageLinkCards.Media>
            <div style={{ width: '100%', height: '100%', background: '#c4b5a5' }} />
          </ImageLinkCards.Media>
          <ImageLinkCards.Title>Sleep</ImageLinkCards.Title>
          <ImageLinkCards.Body>Wind down with stories and soundscapes.</ImageLinkCards.Body>
        </ImageLinkCards.Card>
        <ImageLinkCards.Card href="/meditation">
          <ImageLinkCards.Media>
            <div style={{ width: '100%', height: '100%', background: '#a8c5b8' }} />
          </ImageLinkCards.Media>
          <ImageLinkCards.Title>Meditation</ImageLinkCards.Title>
          <ImageLinkCards.Body>Guided sessions for every moment.</ImageLinkCards.Body>
        </ImageLinkCards.Card>
        <ImageLinkCards.Card href="/stress">
          <ImageLinkCards.Media>
            <div style={{ width: '100%', height: '100%', background: '#b8c4d4' }} />
          </ImageLinkCards.Media>
          <ImageLinkCards.Title>Stress</ImageLinkCards.Title>
          <ImageLinkCards.Body>Quick resets when you need them.</ImageLinkCards.Body>
        </ImageLinkCards.Card>
      </ImageLinkCards.Grid>
    </ImageLinkCards.Root>
  ),
};

