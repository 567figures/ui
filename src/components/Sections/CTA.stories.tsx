import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Text } from 'tamagui';
import { CTA } from './CTA';

const meta: Meta = {
  title: 'Sections/CTA',
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <CTA.Root>
      <CTA.Eyebrow>
        <Text fontSize="$1" color="$color9">
          Get started
        </Text>
      </CTA.Eyebrow>
      <CTA.Title>Ready to build something great?</CTA.Title>
      <CTA.Body>
        <Text textAlign="center" color="$color10">
          Composition API — eyebrow, title, body, actions.
        </Text>
      </CTA.Body>
      <CTA.Actions>
        <Button themeInverse>Start free</Button>
        <Button chromeless>Talk to sales</Button>
      </CTA.Actions>
    </CTA.Root>
  ),
};
