import React, { useState } from 'react';
import { X, ChevronDown } from '@tamagui/lucide-icons';
import {
  Button,
  ScrollView,
  Sheet,
  Square,
  Text,
  XStack,
  YStack,
} from 'tamagui';
import { useNavbar, useMobileEntries } from './NavbarContext';

/**
 * Full-screen mobile menu. Reads registered entries from context
 * and renders them in registration order (preserving navbar layout order).
 *
 * Automatically rendered by NavbarRoot — no need to use directly.
 */
export function NavbarMobileOverlay() {
  const { mobileOpen, setMobileOpen } = useNavbar();
  const entries = useMobileEntries();

  return (
    <Sheet
      modal
      open={mobileOpen}
      onOpenChange={setMobileOpen}
      snapPoints={[100]}
      position={0}
      dismissOnSnapToBottom
      animation="quick"
      zIndex={100}
    >
      <Sheet.Frame
        padding="$4"
        paddingTop="$2"
        backgroundColor="$background"
      >
        {/* Close button */}
        <XStack justifyContent="flex-end" paddingBottom="$2">
          <Button
            circular
            chromeless
            size="$3"
            onPress={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          >
            <Button.Icon>
              <X size={20} />
            </Button.Icon>
          </Button>
        </XStack>

        <ScrollView showsVerticalScrollIndicator={false}>
          <YStack gap="$0.5" paddingBottom="$6">
            {entries.map((entry) => {
              if (entry.type === 'item') {
                return (
                  <YStack
                    key={entry.data.id}
                    paddingVertical="$2.5"
                    paddingHorizontal="$3"
                  >
                    {entry.data.node}
                  </YStack>
                );
              }

              return (
                <MobileAccordion
                  key={entry.data.id}
                  trigger={entry.data.trigger}
                  items={entry.data.items}
                  onNavigate={() => setMobileOpen(false)}
                />
              );
            })}
          </YStack>
        </ScrollView>
      </Sheet.Frame>
    </Sheet>
  );
}

// ── Mobile Accordion ──────────────────────────────────────────────────

function MobileAccordion({
  trigger,
  items,
  onNavigate,
}: {
  trigger: React.ReactNode;
  items: React.ReactNode[];
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <YStack>
      <XStack
        alignItems="center"
        justifyContent="space-between"
        paddingVertical="$2.5"
        paddingHorizontal="$3"
        onPress={() => setExpanded((prev) => !prev)}
      >
        <Text fontSize="$4" color="$color12">
          {trigger}
        </Text>
        <Square animation="quick" rotate={expanded ? '180deg' : '0deg'}>
          <ChevronDown size={16} color="$color10" />
        </Square>
      </XStack>

      {expanded && (
        <YStack paddingLeft="$4" gap="$0.5">
          {items.map((item, index) => (
            <YStack
              key={index}
              paddingVertical="$2"
              paddingHorizontal="$3"
              onPress={onNavigate}
            >
              {item}
            </YStack>
          ))}
        </YStack>
      )}
    </YStack>
  );
}
