import React, { createContext, useContext } from 'react';

export interface NavbarContextValue {
  /** Custom link component (e.g. Next.js Link, Astro <a>) — defaults to <a> */
  LinkComponent: React.ComponentType<{
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;
  }>;
  /** Render a custom icon from CMS icon data */
  renderIcon?: (icon: any) => React.ReactNode;
}

const NavbarContext = createContext<NavbarContextValue>({
  LinkComponent: DefaultLink,
});

export function NavbarProvider({
  children,
  linkComponent,
  renderIcon,
}: {
  children: React.ReactNode;
  linkComponent?: NavbarContextValue['LinkComponent'];
  renderIcon?: NavbarContextValue['renderIcon'];
}) {
  return (
    <NavbarContext.Provider
      value={{
        LinkComponent: linkComponent ?? DefaultLink,
        renderIcon,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  return useContext(NavbarContext);
}

function DefaultLink({
  href,
  children,
  onClick,
  style,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <a href={href} onClick={onClick} style={style}>
      {children}
    </a>
  );
}
