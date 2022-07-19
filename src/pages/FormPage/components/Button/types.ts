import { ReactNode } from 'react';

export interface ButtonProps {
  variant: 'red' | 'blue',
  children: ReactNode,
  classes?: string[],
  onClick?: () => void,
}
