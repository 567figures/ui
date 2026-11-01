// ── Types ─────────────────────────────────────────────────────────────
export type { RegisteredNavItem, RegisteredDropdown } from './types';
export type { ResponsiveColumns } from '../../utils/buildResponsiveColumns';

// ── Context ──────────────────────────────────────────────────────────
export { useNavbar, useMobileEntries } from './NavbarContext';

// ── Compound component ────────────────────────────────────────────────

import { NavbarRoot } from './NavbarRoot';
import { NavbarGlobalBar } from './NavbarGlobalBar';
import { NavbarAppBar } from './NavbarAppBar';
import { NavbarAppBarItem } from './NavbarAppBarItem';
import { NavbarItem } from './NavbarItem';
import { NavbarDropdown } from './NavbarDropdown';
import { NavbarDropdownTrigger } from './NavbarDropdownTrigger';
import { NavbarDropdownContent } from './NavbarDropdownContent';
import { NavbarDropdownItem } from './NavbarDropdownItem';
import { NavbarMobileToggle } from './NavbarMobileToggle';

export const Navbar = {
  Root: NavbarRoot,
  GlobalBar: NavbarGlobalBar,
  AppBar: NavbarAppBar,
  AppBarItem: NavbarAppBarItem,
  Item: NavbarItem,
  Dropdown: NavbarDropdown,
  DropdownTrigger: NavbarDropdownTrigger,
  DropdownContent: NavbarDropdownContent,
  DropdownItem: NavbarDropdownItem,
  MobileToggle: NavbarMobileToggle,
} as const;
