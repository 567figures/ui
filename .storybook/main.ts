import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    // Manual tamagui setup for Storybook (tamaguiPlugin requires Vite 7+)
    config.define = {
      ...config.define,
      __DEV__: 'true',
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.TAMAGUI_TARGET': JSON.stringify('web'),
    };

    config.resolve = {
      ...config.resolve,
      alias: {
        ...((config.resolve?.alias as Record<string, string>) ?? {}),
        'react-native': 'react-native-web',
      },
      extensions: [
        '.web.tsx', '.web.ts', '.web.js', '.web.jsx',
        '.tsx', '.ts', '.js', '.jsx', '.json',
      ],
    };

    config.optimizeDeps = {
      ...config.optimizeDeps,
      esbuildOptions: {
        ...config.optimizeDeps?.esbuildOptions,
        resolveExtensions: [
          '.web.tsx', '.web.ts', '.web.js', '.web.jsx',
          '.tsx', '.ts', '.js', '.jsx', '.json',
        ],
        loader: {
          ...config.optimizeDeps?.esbuildOptions?.loader,
          '.js': 'jsx',
        },
      },
    };

    return config;
  },
};

export default config;
