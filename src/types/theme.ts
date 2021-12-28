import { Property } from 'csstype';

type Size = string | number;
type ResponsiveSize =
  | Size
  | {
      [key: string]: Size;
    };

export type Spacing = number;
export type ResponsiveSpacing =
  | number
  | {
      [key: string]: number;
    };

export type ResponsiveFlexDirection =
  | Property.FlexDirection
  | {
      [key: string | number]: Property.FlexDirection;
    };

export type CSSValue = string | number;

export type ResponsiveCSSValue = {
  [key: string]: CSSValue;
};

export type ResponsiveAlignItemsOrJustifyContent =
  | Property.AlignItems
  | Property.JustifyContent
  | {
      [key: string]: Property.AlignItems | Property.JustifyContent;
    };

export type ThemeBorderRadii = {
  [key: string]: string;
};

export type ThemeFonts = {
  [key: string]: string;
};

export type ThemeBreakpoints = {
  [key: string]: number;
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

export type ColorPalette = {
  [key: string]: string | ColorPalette;
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
