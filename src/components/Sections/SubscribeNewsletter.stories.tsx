import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'tamagui';
import { action } from '@storybook/addon-actions';
import { Subscribe } from './SubscribeNewsletter';

const meta: Meta = {
  title: 'Sections/SubscribeNewsletter',
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Subscribe.Root>
      <Subscribe.Title>Sign up for our newsletter</Subscribe.Title>
      <Subscribe.Body>
        <Text textAlign="center" color="$color10">
          Product updates and stories — no spam.
        </Text>
      </Subscribe.Body>
      <Subscribe.Form
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          action('subscribe')(data.get('email'));
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 8,
            width: '100%',
            border: '1px solid #e5e7eb',
            borderRadius: 8,
            padding: 8,
            alignItems: 'center',
          }}
        >
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            style={{ flex: 1, border: 'none', outline: 'none', fontSize: 14 }}
          />
          <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer' }}>
            Subscribe
          </button>
        </div>
      </Subscribe.Form>
      <Subscribe.Helper>
        <Text fontSize="$1" color="$color9">
          By subscribing you agree to our privacy policy.
        </Text>
      </Subscribe.Helper>
    </Subscribe.Root>
  ),
};

