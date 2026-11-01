/**
 * Responsive columns utility for Tamagui.
 *
 * Tamagui uses inverted CSS specificity for min-width breakpoints,
 * making multi-breakpoint responsive styles unreliable with $sm/$md/$lg.
 *
 * This utility uses a desktop-first approach with $maxXxx (max-width)
 * breakpoints, which work correctly because smaller $maxSm has higher
 * specificity than larger $maxLg — matching the expected cascade.
 *
 * @example
 * const { base, responsive } = buildResponsiveColumns({ xs: 1, lg: 2, xl: 3 });
 * <YStack flexBasis={base} {...responsive} />
 * // XL+: 33.33% (3 cols), ≤1024px: 50% (2 cols), ≤640px: 100% (1 col)
 */

export type ResponsiveColumns = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

/**
 * Builds responsive flexBasis styles from a columns config.
 * Uses desktop-first approach: largest breakpoint = base, smaller = $maxXxx overrides.
 *
 * @param columns - Fixed number or responsive config object
 * @returns { base, responsive } — spread `responsive` onto the element
 *
 * @example
 * // Fixed 2 columns
 * buildResponsiveColumns(2)
 * // → { base: '50%', responsive: {} }
 *
 * @example
 * // Responsive: 1 mobile, 2 tablet, 3 desktop
 * buildResponsiveColumns({ xs: 1, md: 2, xl: 3 })
 * // → { base: '33.33%', responsive: { $maxMd: { flexBasis: '50%' }, $maxSm: { flexBasis: '100%' } } }
 */
export function buildResponsiveColumns(columns: number | ResponsiveColumns) {
  if (typeof columns === 'number') {
    return { base: `${100 / columns}%` as any, responsive: {} };
  }

  // Find the largest breakpoint as base (desktop-first)
  const breakpointOrder = ['xl', 'lg', 'md', 'sm', 'xs'] as const;
  const maxBreakpointMap = {
    lg: '$maxLg',
    md: '$maxMd',
    sm: '$maxSm',
    xs: '$maxXs',
  } as const;

  let base: string | undefined;
  const responsive: Record<string, { flexBasis: any }> = {};

  for (const bp of breakpointOrder) {
    const val = columns[bp];
    if (val == null) continue;

    if (!base) {
      // First defined = largest = base
      base = `${100 / val}%`;
    } else if (bp !== 'xl') {
      // Smaller breakpoints get $maxXxx overrides
      responsive[maxBreakpointMap[bp]] = { flexBasis: `${100 / val}%` };
    }
  }

  return { base: (base ?? '100%') as any, responsive };
}

/**
 * Returns the largest column count from a responsive config.
 * Useful for calculating minWidth of containers.
 */
export function getMaxColumns(columns: number | ResponsiveColumns): number {
  if (typeof columns === 'number') return columns;
  return columns.xl ?? columns.lg ?? columns.md ?? columns.sm ?? columns.xs ?? 1;
}
