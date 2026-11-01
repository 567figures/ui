import React from 'react';
import { NavbarProvider } from './NavbarContext';
import type { NavbarContextValue } from './NavbarContext';
import { NavbarMobileOverlay } from './NavbarMobileOverlay';

/**
 * Root navbar container.
 * Provides context for all child navbar components.
 * Renders no DOM wrapper — only a context provider + mobile overlay.
 *
 * @example
 * <Navbar.Root>
 *   <Navbar.GlobalBar>...</Navbar.GlobalBar>
 *   <Navbar.AppBar>...</Navbar.AppBar>
 * </Navbar.Root>
 */
export function NavbarRoot({
  children,
  linkComponent,
}: {
  children: React.ReactNode;
  linkComponent?: NavbarContextValue['LinkComponent'];
}) {
  return (
    <NavbarProvider linkComponent={linkComponent}>
      {children}
      <NavbarMobileOverlay />
    </NavbarProvider>
  );
}
