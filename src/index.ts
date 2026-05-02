// Navbar — composable pieces
export {
  // Types
  type NavbarLink as NavbarLinkData,
  type NavbarColumnItem,
  type NavbarLinkItem,
  type NavbarItem,
  type NavbarAction,
  // Context
  NavbarProvider,
  useNavbar,
  // Layout
  NavbarRoot,
  NavbarDesktop,
  NavbarLogo,
  // Content
  NavbarItems,
  NavbarDropdown,
  NavbarLink,
  NavbarActions,
  // Mobile
  NavbarMobileMenu,
  NavbarMobileItems,
} from './components/Navbar';

// Legacy aliases for backward compatibility
export type { NavbarItem as NavbarColumnOrLink } from './components/Navbar';
export type { NavbarAction as NavbarButton } from './components/Navbar';
