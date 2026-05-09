import React, { createContext, useContext } from 'react';
import type { SectionButton, SectionImage, SectionIcon } from './types';

export interface SectionsContextValue {
  /** Render rich text (Portable Text or any format) */
  renderRichText?: (richText: any, className?: string) => React.ReactNode;
  /** Render an image from CMS data */
  renderImage?: (props: {
    asset: SectionImage;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
    quality?: number;
    fill?: boolean;
    loading?: 'eager' | 'lazy';
    priority?: boolean;
  }) => React.ReactNode;
  /** Render a list of buttons/CTAs */
  renderButtons?: (buttons: SectionButton[] | null) => React.ReactNode;
  /** Render an icon from CMS icon data */
  renderIcon?: (icon: SectionIcon | null | undefined) => React.ReactNode;
  /** Custom link component (e.g. Next.js Link, Astro <a>) */
  LinkComponent?: React.ComponentType<{
    href: string;
    children: React.ReactNode;
    target?: string;
    rel?: string;
    className?: string;
    style?: React.CSSProperties;
  }>;
}

const SectionsContext = createContext<SectionsContextValue>({});

export function SectionsProvider({
  children,
  renderRichText,
  renderImage,
  renderButtons,
  renderIcon,
  linkComponent,
}: {
  children: React.ReactNode;
} & Omit<SectionsContextValue, 'LinkComponent'> & {
  linkComponent?: SectionsContextValue['LinkComponent'];
}) {
  return (
    <SectionsContext.Provider
      value={{
        renderRichText,
        renderImage,
        renderButtons,
        renderIcon,
        LinkComponent: linkComponent ?? DefaultLink,
      }}
    >
      {children}
    </SectionsContext.Provider>
  );
}

export function useSections() {
  return useContext(SectionsContext);
}

function DefaultLink({
  href,
  children,
  target,
  rel,
  className,
  style,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <a href={href} target={target} rel={rel} className={className} style={style}>
      {children}
    </a>
  );
}
