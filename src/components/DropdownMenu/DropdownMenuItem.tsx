"use client";

import React from 'react';
import {
  Button, ButtonProps 
} from 'tamagui';
import { useDropdownMenu } from './DropdownMenu';

export interface DropdownMenuItemProps extends Omit<ButtonProps, 'onPress'> {
  onClick?: () => void;
  children: React.ReactNode;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ 
  onClick,
  children,
  ...props 
}) => {
  const { setOpen } = useDropdownMenu();

  const handlePress = () => {
    onClick?.();
    setOpen(false);
  };

  return (
    <Button
      {...props}
      onPress={handlePress}
      variant="outlined"
      size="$3"
      justifyContent="flex-start"
      width="100%"
      backgroundColor="transparent"
      borderColor="transparent"
      pressStyle={{
        backgroundColor: '$background',
        borderColor: '$borderColor'
      }}
    >
      {children}
    </Button>
  );
}; 