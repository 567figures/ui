import React from 'react';
import { TamaguiProvider } from 'tamagui';
import tamaguiConfig from './tamagui.config';

export type UiProviderProps = {
  children: React.ReactNode;
  /** Override the default package Tamagui config when needed. */
  config?: typeof tamaguiConfig;
  defaultTheme?: string;
};

/**
 * Default Tamagui provider for `@567f/ui`.
 * Pass a custom `config` to brand differently without forking the package.
 */
export function UiProvider({
  children,
  config = tamaguiConfig,
  defaultTheme = 'light',
}: UiProviderProps) {
  return (
    <TamaguiProvider config={config} defaultTheme={defaultTheme}>
      {children}
    </TamaguiProvider>
  );
}

/** Alias for legacy `@/ui` / `apps/web` imports. */
export const UIProvider = UiProvider;
