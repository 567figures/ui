import React from 'react';
import type { Preview } from '@storybook/react';
import { UiProvider } from '../src/UiProvider';

const preview: Preview = {
  decorators: [
    (Story) => (
      <UiProvider defaultTheme="light">
        <Story />
      </UiProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        xs: {
          name: 'XS (Mobile)',
          styles: { width: '375px', height: '667px' },
        },
        sm: {
          name: 'SM (Large Mobile)',
          styles: { width: '640px', height: '900px' },
        },
        md: {
          name: 'MD (Tablet)',
          styles: { width: '768px', height: '1024px' },
        },
        lg: {
          name: 'LG (Desktop)',
          styles: { width: '1024px', height: '768px' },
        },
        xl: {
          name: 'XL (Large Desktop)',
          styles: { width: '1280px', height: '900px' },
        },
      },
    },
  },
};

export default preview;
