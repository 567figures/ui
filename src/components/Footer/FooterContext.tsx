import React, { createContext, useContext } from 'react';

export interface FooterContextValue {
  /** Custom link component (e.g. Next.js Link, Astro <a>) — defaults to <a> */
  LinkComponent: React.ComponentType<{
    href: string;
    children: React.ReactNode;
    target?: string;
    rel?: string;
    style?: React.CSSProperties;
    'aria-label'?: string;
  }>;
  /** Render a social icon by platform name */
  renderSocialIcon?: (platform: string) => React.ReactNode;
}

const FooterContext = createContext<FooterContextValue>({
  LinkComponent: DefaultLink,
});

export function FooterProvider({
  children,
  linkComponent,
  renderSocialIcon,
}: {
  children: React.ReactNode;
  linkComponent?: FooterContextValue['LinkComponent'];
  renderSocialIcon?: FooterContextValue['renderSocialIcon'];
}) {
  return (
    <FooterContext.Provider
      value={{
        LinkComponent: linkComponent ?? DefaultLink,
        renderSocialIcon,
      }}
    >
      {children}
    </FooterContext.Provider>
  );
}

export function useFooter() {
  return useContext(FooterContext);
}

function DefaultLink({
  href,
  children,
  target,
  rel,
  style,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
}) {
  return (
    <a href={href} target={target} rel={rel} style={style} {...props}>
      {children}
    </a>
  );
}
