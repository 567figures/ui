import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import type {
  RegisteredNavItem,
  RegisteredDropdown,
  RegisteredMobileEntry,
} from './types';
import { Anchor } from 'tamagui';

// ── Context value ─────────────────────────────────────────────────────

export interface NavbarContextValue {
  /** Custom link component (e.g. Next.js Link) — defaults to <a> */
  LinkComponent: React.ComponentType<{
    href: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
  }>;

  /** Mobile menu open state */
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;

  /** Registration API for mobile auto-rendering */
  registerNavItem: (item: RegisteredNavItem) => () => void;
  registerDropdown: (dropdown: RegisteredDropdown) => () => void;

  /** Get a stable order number for registration */
  getOrderNumber: (id: string) => number;

  /** Subscriptions for mobile menu to read registered entries in order */
  getEntries: () => RegisteredMobileEntry[];
  subscribe: (cb: () => void) => () => void;
}

const NavbarContext = createContext<NavbarContextValue | null>(null);

// ── Provider ──────────────────────────────────────────────────────────

export function NavbarProvider({
  children,
  linkComponent,
}: {
  children: React.ReactNode;
  linkComponent?: NavbarContextValue['LinkComponent'];
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Single ordered list of all registered entries
  const entriesRef = useRef<RegisteredMobileEntry[]>([]);
  const listenersRef = useRef<Set<() => void>>(new Set());

  // Counter for stable ordering — each id gets a permanent order number
  const orderCounterRef = useRef(0);
  const orderMapRef = useRef<Map<string, number>>(new Map());

  const getOrderNumber = useCallback((id: string) => {
    if (!orderMapRef.current.has(id)) {
      orderMapRef.current.set(id, orderCounterRef.current++);
    }
    return orderMapRef.current.get(id)!;
  }, []);

  const notify = useCallback(() => {
    listenersRef.current.forEach((cb) => cb());
  }, []);

  const subscribe = useCallback((cb: () => void) => {
    listenersRef.current.add(cb);
    return () => {
      listenersRef.current.delete(cb);
    };
  }, []);

  const registerNavItem = useCallback(
    (item: RegisteredNavItem) => {
      const order = getOrderNumber(item.id);
      const entry: RegisteredMobileEntry = { type: 'item', data: item, order };

      entriesRef.current = [...entriesRef.current, entry].sort((a, b) => a.order - b.order);
      notify();
      return () => {
        entriesRef.current = entriesRef.current.filter(
          (e) => !(e.type === 'item' && e.data.id === item.id)
        );
        notify();
      };
    },
    [notify, getOrderNumber]
  );

  const registerDropdown = useCallback(
    (dropdown: RegisteredDropdown) => {
      const order = getOrderNumber(dropdown.id);

      // Update existing or add new
      const existingIdx = entriesRef.current.findIndex(
        (e) => e.type === 'dropdown' && e.data.id === dropdown.id
      );
      if (existingIdx >= 0) {
        const updated: RegisteredMobileEntry[] = [...entriesRef.current];
        updated[existingIdx] = { type: 'dropdown', data: dropdown, order };
        entriesRef.current = updated;
      } else {
        const newEntry: RegisteredMobileEntry = { type: 'dropdown', data: dropdown, order };
        entriesRef.current = [...entriesRef.current, newEntry].sort((a, b) => a.order - b.order);
      }
      notify();
      return () => {
        entriesRef.current = entriesRef.current.filter(
          (e) => !(e.type === 'dropdown' && e.data.id === dropdown.id)
        );
        notify();
      };
    },
    [notify, getOrderNumber]
  );

  const getEntries = useCallback(() => entriesRef.current, []);

  const value = useMemo<NavbarContextValue>(
    () => ({
      LinkComponent: linkComponent ?? DefaultLink,
      mobileOpen,
      setMobileOpen,
      registerNavItem,
      registerDropdown,
      getOrderNumber,
      getEntries,
      subscribe,
    }),
    [
      linkComponent,
      mobileOpen,
      registerNavItem,
      registerDropdown,
      getOrderNumber,
      getEntries,
      subscribe,
    ]
  );

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
}

// ── Hook ──────────────────────────────────────────────────────────────

export function useNavbar(): NavbarContextValue {
  const ctx = useContext(NavbarContext);
  if (!ctx) {
    throw new Error('useNavbar must be used within <Navbar.Root>');
  }
  return ctx;
}

/** Hook to read registered mobile entries in order */
export function useMobileEntries() {
  const { getEntries, subscribe } = useNavbar();
  return useSyncExternalStore(subscribe, getEntries, getEntries);
}

// ── Default link ──────────────────────────────────────────────────────

function DefaultLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Anchor href={href} {...props}>
      {children}
    </Anchor>
  );
}
