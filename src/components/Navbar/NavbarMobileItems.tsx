import React, { useState } from 'react';
import { ChevronDown } from '@tamagui/lucide-icons';
import { Button, Separator, Square, Text, YGroup } from 'tamagui';
import { useNavbar } from './NavbarContext';
import type { NavbarItem } from './types';

/**
 * Accordion-style nav items for the mobile sheet.
 * Columns expand/collapse on press; links navigate directly.
 *
 * @example
 * <NavbarMobileItems items={columns} />
 */
export function NavbarMobileItems({ items }: { items?: NavbarItem[] | null }) {
  const { renderIcon } = useNavbar();
  const [expanded, setExpanded] = useState(-1);

  if (!items?.length) return null;

  const toggle = (index: number) => () => {
    setExpanded(expanded === index ? -1 : index);
  };

  return (
    <YGroup alignSelf="center" bordered width="100%" size="$4" borderWidth={0}>
      {items.map((item, index) => (
        <React.Fragment key={item._key}>
          {item.type === 'column' ? (
            <>
              <YGroup.Item>
                <Button
                  chromeless
                  justifyContent="space-between"
                  onPress={toggle(index)}
                >
                  <Text>{item.title}</Text>
                  <Square
                    animation="quick"
                    rotate={index === expanded ? '180deg' : '0deg'}
                  >
                    <ChevronDown size="$1" />
                  </Square>
                </Button>
              </YGroup.Item>
              {index === expanded &&
                item.links?.map((link) => (
                  <YGroup.Item key={link._key}>
                    <Button
                      justifyContent="flex-start"
                      chromeless
                      icon={
                        renderIcon && link.icon
                          ? renderIcon(link.icon)
                          : undefined
                      }
                      role="link"
                      href={link.href || '#'}
                    >
                      {link.name}
                    </Button>
                  </YGroup.Item>
                ))}
            </>
          ) : (
            <YGroup.Item>
              <Button
                chromeless
                role="link"
                justifyContent="space-between"
                href={item.href || '#'}
              >
                {item.name}
              </Button>
            </YGroup.Item>
          )}
          {index < items.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </YGroup>
  );
}
