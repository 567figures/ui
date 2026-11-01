import React from 'react';
import { XStack } from 'tamagui';

/**
 * Footer area at the bottom of the drawer.
 * Typically used for action buttons (Save, Cancel, etc.)
 *
 * @example
 * <Drawer.Footer>
 *   <Button onPress={onCancel}>Cancel</Button>
 *   <Button theme="active" onPress={onSave}>Save</Button>
 * </Drawer.Footer>
 */
export function DrawerFooter({
  children,
  justify = 'end',
}: {
  children: React.ReactNode;
  /** Horizontal alignment of footer content. Default: 'end' */
  justify?: 'start' | 'center' | 'end' | 'between';
}) {
  const justifyMap = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
  } as const;

  return (
    <XStack
      alignItems="center"
      justifyContent={justifyMap[justify] as any}
      paddingHorizontal="$4"
      paddingVertical="$3"
      borderTopWidth={1}
      borderColor="$borderColor"
      gap="$2"
      flexShrink={0}
    >
      {children}
    </XStack>
  );
}
