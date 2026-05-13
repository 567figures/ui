// Types
export type {
  NavbarLink,
  NavbarColumnItem,
  NavbarLinkItem,
  NavbarItem,
  NavbarAction,
} from './types';

// Context
export { useNavbar } from './NavbarContext';

// ── Compound component ────────────────────────────────────────────────

import { NavbarProvider } from './NavbarContext';
import { NavbarRoot, NavbarDesktop } from './NavbarLayout';
import { NavbarLogo } from './NavbarLogo';
import { NavbarItems } from './NavbarItems';
import { NavbarDropdown } from './NavbarDropdown';
import { NavbarLink } from './NavbarLink';
import { NavbarActions } from './NavbarActions';
import { NavbarMobileMenu } from './NavbarMobileMenu';
import { NavbarMobileItems } from './NavbarMobileItems';

export const Navbar = {
  Provider: NavbarProvider,
  Root: NavbarRoot,
  Desktop: NavbarDesktop,
  Logo: NavbarLogo,
  Items: NavbarItems,
  Dropdown: NavbarDropdown,
  Link: NavbarLink,
  Actions: NavbarActions,
  MobileMenu: NavbarMobileMenu,
  MobileItems: NavbarMobileItems,
} as const;
