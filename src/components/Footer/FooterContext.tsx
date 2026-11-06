import React, { createContext, useContext } from 'react';

export interface FooterLinkComponentProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  className?: string;
}

export interface FooterContextValue {
  /** Custom link component (e.g. Next.js Link, Astro `<a>`) — defaults to `<a>` */
  LinkComponent: React.ComponentType<FooterLinkComponentProps>;
}

/** Accordion affordance when `Footer.Nav` collapses below `$lg`. */
export type FooterCollapseTrigger = 'chevron' | 'plus' | 'caret';

export interface FooterNavContextValue {
  /** When true, Columns render as accordion items (mobile / tablet). */
  collapsing: boolean;
  collapseTrigger: FooterCollapseTrigger;
}

const FooterContext = createContext<FooterContextValue>({
  LinkComponent: DefaultLink,
});

const FooterNavContext = createContext<FooterNavContextValue>({
  collapsing: false,
  collapseTrigger: 'chevron',
});

export function FooterProvider({
  children,
  linkComponent,
}: {
  children: React.ReactNode;
  linkComponent?: FooterContextValue['LinkComponent'];
}) {
  return (
    <FooterContext.Provider
      value={{
        LinkComponent: linkComponent ?? DefaultLink,
      }}
    >
      {children}
    </FooterContext.Provider>
  );
}

export function FooterNavProvider({
  children,
  collapsing,
  collapseTrigger = 'chevron',
}: {
  children: React.ReactNode;
  collapsing: boolean;
  collapseTrigger?: FooterCollapseTrigger;
}) {
  return (
    <FooterNavContext.Provider value={{ collapsing, collapseTrigger }}>
      {children}
    </FooterNavContext.Provider>
  );
}

export function useFooter() {
  return useContext(FooterContext);
}

export function useFooterNav() {
  return useContext(FooterNavContext);
}

function DefaultLink({
  href,
  children,
  target,
  rel,
  style,
  className,
  ...props
}: FooterLinkComponentProps) {
  return (
    <a href={href} target={target} rel={rel} style={style} className={className} {...props}>
      {children}
    </a>
  );
}
