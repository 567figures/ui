import React from 'react';
import { Text, XStack, YStack, Popover, Button } from 'tamagui';
import { useNavbar } from './NavbarContext';
import type { NavbarColumnItem, NavbarLink } from './types';

// ── Single menu item inside a popover dropdown ───────────────────────

function PopoverMenuItem({ link }: { link: NavbarLink }) {
  const { LinkComponent, renderIcon } = useNavbar();

  return (
    <LinkComponent
      href={link.href ?? '/'}
      style={{ textDecoration: 'none' }}
    >
      <XStack alignItems="center" padding="$3" gap="$1">
        <YStack>{renderIcon && link.icon ? renderIcon(link.icon) : link.icon}</YStack>
        <YStack width="100%">
          <Text fontSize="$3" fontWeight="bold">
            {link.name}
          </Text>
          <Text fontSize="$2" color="$accent10" numberOfLines={2}>
            {link.description}
          </Text>
        </YStack>
      </XStack>
    </LinkComponent>
  );
}

function getColumnWidth(count: number) {
  if (count <= 4) return '100%';
  if (count <= 8) return '50%';
  return '33.33%';
}

// ── Desktop dropdown for a column with links ─────────────────────────

/**
 * A dropdown menu triggered by a button. Shows a popover with links.
 *
 * @example
 * <NavbarDropdown column={columnData} />
 */
export function NavbarDropdown({ column }: { column: NavbarColumnItem }) {
  const columnWidth = getColumnWidth(column.links?.length ?? 0);

  return (
    <Popover placement="bottom" size="$5">
      <Popover.Trigger asChild>
        <Button variant="outlined">
          <Text fontSize="$4">{column.title}</Text>
        </Button>
      </Popover.Trigger>
      <Popover.Content
        borderWidth={1}
        borderColor="$borderColor"
        enterStyle={{ y: -10, opacity: 0 }}
        exitStyle={{ y: -10, opacity: 0 }}
        elevate
        animation={['quick', { opacity: { overshootClamping: true } }]}
      >
        <Popover.Arrow borderWidth={1} borderColor="$borderColor" />
        <XStack flexWrap="wrap" justifyContent="flex-start">
          {column.links?.map((link) => (
            <YStack
              key={link._key}
              flexBasis={columnWidth as any}
              flexGrow={1}
              flexShrink={0}
            >
              <PopoverMenuItem link={link} />
            </YStack>
          ))}
        </XStack>
      </Popover.Content>
    </Popover>
  );
}
