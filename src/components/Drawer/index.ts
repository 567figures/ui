// ── Types ─────────────────────────────────────────────────────────────
export type { DrawerContextValue, DrawerPlacement, DrawerSize } from './types';

// ── Context ──────────────────────────────────────────────────────────
export { useDrawer } from './DrawerContext';

// ── Compound component ────────────────────────────────────────────────

import { DrawerRoot } from './DrawerRoot';
import { DrawerTrigger } from './DrawerTrigger';
import { DrawerOverlay } from './DrawerOverlay';
import { DrawerContent } from './DrawerContent';
import { DrawerHeader } from './DrawerHeader';
import { DrawerBody } from './DrawerBody';
import { DrawerFooter } from './DrawerFooter';
import { DrawerClose } from './DrawerClose';
import { DrawerPageContent } from './DrawerPageContent';

export const Drawer = {
  Root: DrawerRoot,
  Trigger: DrawerTrigger,
  Overlay: DrawerOverlay,
  Content: DrawerContent,
  Header: DrawerHeader,
  Body: DrawerBody,
  Footer: DrawerFooter,
  Close: DrawerClose,
  PageContent: DrawerPageContent,
} as const;
