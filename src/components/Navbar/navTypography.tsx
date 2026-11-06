import React from 'react';

/** Default label tokens for Navbar content slots. */
export const NAV_LABEL = {
  fontFamily: '$body',
  fontSize: '$4',
  fontWeight: '400',
} as const;

function applyNavTypography(
  child: React.ReactElement,
  depth: number,
): React.ReactElement {
  const props = child.props as Record<string, unknown>;
  let nextChildren = props.children;

  // One level deep — covers Button > Anchor / Text patterns
  if (depth < 1 && nextChildren != null) {
    nextChildren = React.Children.map(
      nextChildren as React.ReactNode,
      (nested) => {
        if (!React.isValidElement(nested)) return nested;
        return applyNavTypography(nested, depth + 1);
      },
    );
  }

  return React.cloneElement(child, {
    fontFamily: props.fontFamily ?? NAV_LABEL.fontFamily,
    fontSize: props.fontSize ?? NAV_LABEL.fontSize,
    fontWeight: props.fontWeight ?? NAV_LABEL.fontWeight,
    ...(nextChildren !== props.children ? { children: nextChildren } : null),
  } as Partial<typeof props>);
}

/**
 * Inject default nav typography onto direct children (and one nested level).
 * Explicit consumer props win (override).
 */
export function withNavTypography(children: React.ReactNode) {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    return applyNavTypography(child, 0);
  });
}
