import React from 'react';
import type { Preview } from '@storybook/react';
import { TamaguiProvider, createTamagui } from 'tamagui';
import { defaultConfig } from '@tamagui/config/v4';

const tamaguiConfig = createTamagui(defaultConfig);

const preview: Preview = {
  decorators: [
    (Story) => (
      <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
        <Story />
      </TamaguiProvider>
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
  },
};

export default preview;
