"use client";

import React from 'react';
import {
  Sheet, SheetProps 
} from 'tamagui';
import { useDropdownMenu } from './DropdownMenu';

export interface DropdownMenuContentProps extends Omit<SheetProps, 'open' | 'onOpenChange'> {
  align?: 'start' | 'center' | 'end';
  children: React.ReactNode;
}

export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({ 
  align = 'center',
  children,
  ...props 
}) => {
  const { open, setOpen } = useDropdownMenu();

  return (
    <Sheet
      modal={false}
      open={open}
      onOpenChange={setOpen}
      snapPoints={[0]}
      position={0}
      dismissOnSnapToBottom
      {...props}
    >
      <Sheet.Overlay />
      <Sheet.Frame
        padding="$4"
        justifyContent="flex-start"
        alignItems={align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : 'center'}
        space="$2"
      >
        {children}
      </Sheet.Frame>
    </Sheet>
  );
}; 