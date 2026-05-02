import React from 'react';
import { Anchor, Button } from 'tamagui';
import type { NavbarAction } from './types';

/**
 * Renders CTA buttons / anchors for the navbar.
 *
 * @example
 * <NavbarActions actions={buttons} />
 */
export function NavbarActions({ actions }: { actions?: NavbarAction[] | null }) {
  if (!actions?.length) return null;

  return (
    <>
      {actions.map((action) => (
        <React.Fragment key={action._key}>
          {action.type === 'anchor' ? (
            <Anchor href={action.href ?? undefined}>{action.text}</Anchor>
          ) : (
            <Button
              size="$4"
              borderRadius="$4"
              variant={
                action.variant === 'None'
                  ? undefined
                  : (action.variant as any) ?? undefined
              }
              theme={action.theme ?? undefined}
              role="link"
            >
              <Anchor href={action.href ?? undefined}>{action.text}</Anchor>
            </Button>
          )}
        </React.Fragment>
      ))}
    </>
  );
}
