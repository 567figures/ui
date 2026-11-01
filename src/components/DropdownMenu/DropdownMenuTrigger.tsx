"use client";

import React from 'react';
import {
  Button, ButtonProps 
} from 'tamagui';
import { useDropdownMenu } from './DropdownMenu';

export interface DropdownMenuTriggerProps extends Omit<ButtonProps, 'onPress'> {
  asChild?: boolean;
  children: React.ReactNode;
}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ 
  asChild = false,
  children,
  ...props 
}) => {
  const { open, setOpen } = useDropdownMenu();

  const handlePress = () => {
    setOpen(!open);
  };

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      onPress: handlePress,
      ...(props as any)
    });
  }

  return (
    <Button
      {...props}
      onPress={handlePress}
    >
      {children}
    </Button>
  );
}; 