import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { Popover, XStack } from 'tamagui';
import { useNavbar } from './NavbarContext';

// ── Dropdown sub-context ──────────────────────────────────────────────

interface DropdownItemEntry {
  id: string;
  node: React.ReactNode;
}

export interface DropdownCtx {
  open: boolean;
  setOpen: (v: boolean) => void;
  registerItem: (entry: DropdownItemEntry) => () => void;
  setTriggerLabel: (label: React.ReactNode) => void;
  items: DropdownItemEntry[];
}

export const DropdownContext = createContext<DropdownCtx | null>(null);

export function useDropdownContext() {
  const ctx = useContext(DropdownContext);
  if (!ctx) {
    throw new Error(
      'Navbar.DropdownTrigger / Navbar.DropdownContent / Navbar.DropdownItem must be used within <Navbar.Dropdown>'
    );
  }
  return ctx;
}

/**
 * Dropdown wrapper. Provides open state and collects DropdownItems for mobile registration.
 * Supports optional hover-triggered opening with configurable delays.
 *
 * @example
 * <Navbar.Dropdown openOnHover>
 *   <Navbar.DropdownTrigger><Button chromeless>Products</Button></Navbar.DropdownTrigger>
 *   <Navbar.DropdownContent>
 *     <Navbar.DropdownItem>...</Navbar.DropdownItem>
 *   </Navbar.DropdownContent>
 * </Navbar.Dropdown>
 */
export function NavbarDropdown({
  children,
  openOnHover = false,
}: {
  children: React.ReactNode;
  /** Open dropdown on mouse hover (150ms open / 300ms close delay). Default: false */
  openOnHover?: boolean;
}) {
  const id = useId();
  const { registerDropdown, getOrderNumber } = useNavbar();

  // Capture order during first render to preserve DOM order
  const orderRef = useRef<number | null>(null);
  if (orderRef.current === null) {
    orderRef.current = getOrderNumber(id);
  }
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<DropdownItemEntry[]>([]);
  const triggerLabelRef = useRef<React.ReactNode>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const registerItem = useCallback((entry: DropdownItemEntry) => {
    setItems((prev) => [...prev, entry]);
    return () => {
      setItems((prev) => prev.filter((i) => i.id !== entry.id));
    };
  }, []);

  const setTriggerLabel = useCallback((label: React.ReactNode) => {
    triggerLabelRef.current = label;
  }, []);

  useEffect(() => {
    const unregister = registerDropdown({
      id,
      trigger: triggerLabelRef.current,
      items: items.map((i) => i.node),
    });
    return unregister;
  }, [id, items, registerDropdown]);

  const handleMouseEnter = useCallback(() => {
    if (!openOnHover) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setOpen(true), 150);
  }, [openOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (!openOnHover) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setOpen(false), 300);
  }, [openOnHover]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const ctx: DropdownCtx = { open, setOpen, registerItem, setTriggerLabel, items };

  return (
    <DropdownContext.Provider value={ctx}>
      <Popover placement="bottom" open={open} onOpenChange={setOpen}>
        <XStack
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </XStack>
      </Popover>
    </DropdownContext.Provider>
  );
}
