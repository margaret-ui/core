import { ReactNode } from 'react';
import {
  ResponsiveSpacing,
  ResponsiveAlignItemsOrJustifyContent,
} from '../../types';

export type ButtonProps = {
  variant?: 'solid' | 'outline' | 'ghost' | 'link' | string;
  size?: 'bare' | 'small' | 'default' | 'large';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: any;
};

export type ButtonTheme = {
  variant: {
    solid: {
      fontWeight?: string;
      fontSize?: string | number;
      borderRadius?: string | number;
      alignY?: ResponsiveAlignItemsOrJustifyContent;
      alignX?: ResponsiveAlignItemsOrJustifyContent;
      transition?: string;
      background?: string;
      color?: string;
      boxShadow?: string;
      textDecoration?: string;

      backgroundHover?: string;
      colorHover?: string;
      boxShadowHover?: string;
      transformHover?: string;
      textDecorationHover?: string;

      backgroundFocus?: string;
      colorFocus?: string;
      boxShadowFocus?: string;
      transformFocus?: string;
      textDecorationFocus?: string;

      backgroundDisabled?: string;
      colorDisabled?: string;
      boxShadowDisabled?: string;
      transformDisabled?: string;
      textDecorationDisabled?: string;
      opacityDisabled?: number;
    };
    outline: {
      fontWeight?: string;
      fontSize?: string | number;
      borderRadius?: string | number;
      alignY?: ResponsiveAlignItemsOrJustifyContent;
      alignX?: ResponsiveAlignItemsOrJustifyContent;
      transition?: string;
      background?: string;
      color?: string;
      boxShadow?: string;
      textDecoration?: string;

      backgroundHover?: string;
      colorHover?: string;
      boxShadowHover?: string;
      transformHover?: string;
      textDecorationHover?: string;

      backgroundFocus?: string;
      colorFocus?: string;
      boxShadowFocus?: string;
      transformFocus?: string;
      textDecorationFocus?: string;

      backgroundDisabled?: string;
      colorDisabled?: string;
      boxShadowDisabled?: string;
      transformDisabled?: string;
      textDecorationDisabled?: string;
      opacityDisabled?: number;
    };
    ghost: {
      fontWeight?: string;
      fontSize?: string | number;
      borderRadius?: string | number;
      alignY?: ResponsiveAlignItemsOrJustifyContent;
      alignX?: ResponsiveAlignItemsOrJustifyContent;
      transition?: string;
      background?: string;
      color?: string;
      boxShadow?: string;
      textDecoration?: string;

      backgroundHover?: string;
      colorHover?: string;
      boxShadowHover?: string;
      transformHover?: string;
      textDecorationHover?: string;

      backgroundFocus?: string;
      colorFocus?: string;
      boxShadowFocus?: string;
      transformFocus?: string;
      textDecorationFocus?: string;

      backgroundDisabled?: string;
      colorDisabled?: string;
      boxShadowDisabled?: string;
      transformDisabled?: string;
      textDecorationDisabled?: string;
      opacityDisabled?: number;
    };
    link: {
      fontWeight?: string;
      fontSize?: string | number;
      borderRadius?: string | number;
      alignY?: ResponsiveAlignItemsOrJustifyContent;
      alignX?: ResponsiveAlignItemsOrJustifyContent;
      transition?: string;
      background?: string;
      color?: string;
      boxShadow?: string;
      textDecoration?: string;

      backgroundHover?: string;
      colorHover?: string;
      boxShadowHover?: string;
      transformHover?: string;
      textDecorationHover?: string;

      backgroundFocus?: string;
      colorFocus?: string;
      boxShadowFocus?: string;
      transformFocus?: string;
      textDecorationFocus?: string;

      backgroundDisabled?: string;
      colorDisabled?: string;
      boxShadowDisabled?: string;
      transformDisabled?: string;
      textDecorationDisabled?: string;
      opacityDisabled?: number;
    };
  };
  sizes: {
    bare: {
      paddingVertical?: ResponsiveSpacing | undefined;
      paddingHorizontal?: ResponsiveSpacing | undefined;
      minWidth?: string | number;
      fontSize?: string | number;
    };
    small: {
      paddingVertical?: ResponsiveSpacing | undefined;
      paddingHorizontal?: ResponsiveSpacing | undefined;
      minWidth?: string | number;
      fontSize?: string | number;
    };
    default: {
      paddingVertical?: ResponsiveSpacing | undefined;
      paddingHorizontal?: ResponsiveSpacing | undefined;
      minWidth?: string | number;
      fontSize?: string | number;
    };
    large: {
      paddingVertical?: ResponsiveSpacing | undefined;
      paddingHorizontal?: ResponsiveSpacing | undefined;
      minWidth?: string | number;
      fontSize?: string | number;
    };
  };
};
