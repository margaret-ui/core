import { Property } from 'csstype';
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

export enum Breakpoint {
  Default = 'default',
  Tablet = 'tablet',
  Medium = 'medium',
  Desktop = 'desktop',
}

export enum Fonts {
  Title = 'title',
  Body = 'body',
  Ui = 'ui',
}

export type Size = string | number;
export type ResponsiveSize =
  | Size
  | {
      [key in Breakpoint]?: Size;
    };

export type Spacing = number;
export type ResponsiveSpacing =
  | number
  | {
      [key in Breakpoint]?: number;
    };

export type FlexDirection = Property.FlexDirection;
export type BreakpointDirection = {
  [key in Breakpoint]?: FlexDirection;
};
export type ResponsiveFlexDirection = FlexDirection | BreakpointDirection;

export type CSSValue = string | number;
export type BreakpointCSSValue = {
  [key in Breakpoint]?: CSSValue;
};
export type ResponsiveCSSValue = CSSValue | BreakpointCSSValue;

export type ResponsiveAlignItemsOrJustifyContent =
  | Property.AlignItems
  | Property.JustifyContent
  | {
      [key in Breakpoint]?: string;
    };

export type ThemeBorderRadii = {
  [key: string]: string;
};

export type ThemeFonts = {
  [key: string]: string;
};

export type ThemeBreakpoints = {
  [key in Breakpoint]?: number;
};

export type ThemeSizes = {
  [key: string]: string;
};

export type ThemeFontStack = {
  sizeMinRem: number;
  sizeMaxRem: number;
  lineHeightMin: number;
  lineHeightMax: number;
  fontFamily: Property.FontFamily;
  fontWeight: Property.FontWeight;
  color: string;
  defaultTag:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'div'
    | 'span'
    | 'p'
    | 'li';
};

export type ThemeFontStacks = {
  [key: string]: ThemeFontStack;
};

export type ThemeLineHeights = {
  [key: string]: ThemeFontStack;
};

export type ColorPalette =
  | string
  | {
      [key: string]: string;
    };

export type ColorPaletteWrapper = {
  [key: string]: ColorPalette;
};

export type ColorsOverride = {
  palette: ColorPalette;
  ui: ColorPalette;
};

export type TabTheme = {
  direction: ResponsiveFlexDirection;
  alignX: ResponsiveFlexDirection;
  padding: ResponsiveSize;
  fontWeight: Property.FontWeight;
  fontSize: Property.FontSize;
  borderRadius: string;
  minWidth: ResponsiveSize;
  maxWidth: ResponsiveSize;
  whiteSpace: Property.WhiteSpace;

  background: string;
  boxShadow: string;
  color: string;

  backgroundHover: string;
  boxShadowHover: string;
  colorHover: string;

  backgroundDisabled: string;
  boxShadowDisabled: string;
  colorDisabled: string;

  backgroundActive: string;
  boxShadowActive: string;
  colorActive: string;
};

export type TabsTheme = {
  margin: Size;
  padding: Size;
  alignY: ResponsiveAlignItemsOrJustifyContent;
  alignX: ResponsiveAlignItemsOrJustifyContent;
  tab: TabTheme;
};

export type SpacingHelper = (a?: number) => string;

export type MediaHelper = any;

export type ThemeFontSize = {
  [key: string]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};
