import React from 'react';
import { XStack, YStack, Text, H3 } from 'tamagui';
import { useFooter } from './FooterContext';
import type { FooterColumn } from './types';

/**
 * Footer navigation columns. Renders a list of link columns.
 *
 * @example
 * <FooterColumns columns={[{ _key: '1', title: 'Product', links: [...] }]} />
 */
export function FooterColumns({ columns }: { columns?: FooterColumn[] | null }) {
  const { LinkComponent } = useFooter();

  if (!Array.isArray(columns) || columns.length === 0) return null;

  return (
    <XStack gap="$6" $lg={{ gap: '$14', marginRight: 80 }} flex={1}>
      {columns.map((column, index) => (
        <YStack key={`column-${column._key}-${index}`} minWidth={180} flex={1}>
          <H3 marginBottom="$6">{column.title}</H3>
          {column.links && column.links.length > 0 && (
            <YStack gap="$4">
              {column.links.map((link, idx) => (
                <Text key={`${link._key}-${idx}-column-${column._key}`}>
                  <LinkComponent
                    href={link.href ?? '#'}
                    target={link.openInNewTab ? '_blank' : undefined}
                    rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {link.name}
                  </LinkComponent>
                </Text>
              ))}
            </YStack>
          )}
        </YStack>
      ))}
    </XStack>
  );
}
