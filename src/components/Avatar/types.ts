import { ReactNode } from 'react';
import { ResponsiveSpacing } from '../../types';

export type AvatarTheme = {
  background?: string;
  backgroundLight?: string;
  border?: string;
  color?: string;
  shape: {
    [key: string]: string | number;
  };
  sizes: {
    [key: string]: string | number;
  };
};

export type AvatarProps = {
  imageUrl?: string;
  size?: string;
  fontSize?: number;
  shape?: string;
  name?: string;
  zIndex?: number;
  showBorder?: boolean;
  placeholder?: any;
  children?: ReactNode;
  bg?: string;
  variant?: string;
};

export type AvatarGroupProps = {
  children: any;
  size?: string;
  max?: number;
  spacing?: ResponsiveSpacing | undefined;
  showBorder?: boolean;
  shape?: string;
};
