import React from 'react';
import { Popover, XStack, YStack } from 'tamagui';
import { buildResponsiveColumns, getMaxColumns, type ResponsiveColumns } from '../../utils/buildResponsiveColumns';

/**
 * Floating panel for dropdown content.
 * Items are laid out in a responsive grid using desktop-first $maxXxx breakpoints.
 *
 * @example
 * <Navbar.DropdownContent columns={{ xs: 1, lg: 2, xl: 3 }}>
 *   <Navbar.DropdownItem>...</Navbar.DropdownItem>
 *   <Navbar.DropdownItem>...</Navbar.DropdownItem>
 * </Navbar.DropdownContent>
 *
 * @example
 * <Navbar.DropdownContent fullWidth columns={{ xs: 1, md: 2, xl: 4 }}>
 *   ...mega menu items...
 * </Navbar.DropdownContent>
 */
export function NavbarDropdownContent({
  children,
  fullWidth = false,
  columns = { xs: 1, lg: 2, xl: 3 },
}: {
  children: React.ReactNode;
  /** Span full viewport width (mega-menu style). Default: false */
  fullWidth?: boolean;
  /**
   * Responsive columns config (desktop-first with $maxXxx breakpoints).
   * @default { xs: 1, lg: 2, xl: 3 }
   */
  columns?: ResponsiveColumns;
}) {
  const { base, responsive } = buildResponsiveColumns(columns);
  const colCount = getMaxColumns(columns);

  return (
    <>
      {/* Hidden mount point — ensures DropdownItems register in context
          even when Popover is closed and Content is not rendered */}
      <div style={{ display: 'none' }}>{children}</div>

      <Popover.Content
        borderWidth={1}
        borderColor="$borderColor"
        borderRadius="$4"
        padding="$2"
        backgroundColor="$background"
        elevate
        enterStyle={{ y: -8, opacity: 0 }}
        exitStyle={{ y: -8, opacity: 0 }}
        animation={[
          'quick',
          { opacity: { overshootClamping: true } },
        ]}
        {...(fullWidth
          ? { width: '100vw', maxWidth: '100vw', left: 0, borderRadius: 0 }
          : { minWidth: colCount * 200 }
        )}
      >
        <XStack
          flexWrap="wrap"
          {...(fullWidth && { maxWidth: 1280, alignSelf: 'center', width: '100%', paddingHorizontal: '$4' })}
        >
          {React.Children.map(children, (child) => (
            <YStack
              flexBasis={base}
              {...responsive}
              padding="$1"
            >
              {child}
            </YStack>
          ))}
        </XStack>
      </Popover.Content>
    </>
  );
}
