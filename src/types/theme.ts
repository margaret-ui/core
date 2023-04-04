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

export type Responsive<T> = T | { [key in Breakpoint]?: T };

export type Size = string | number;
export type Spacing = number;

export type ResponsiveSpacing =
  | number
  | string
  | {
      [key in Breakpoint]?: number | string;
    };

export type CSSValue = string | number;
export type BreakpointCSSValue = {
  [key in Breakpoint]?: CSSValue;
};
export type ResponsiveCSSValue = CSSValue | BreakpointCSSValue;

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

export type ThemeFontStacks = {
  [key: string]: string;
};

export type ColorPalette =
  | string
  | {
      [key: string | number]: string;
    };

export type ColorPaletteWrapper = {
  [key: string]: ColorPalette;
};

export type ColorsOverride = {
  palette: ColorPaletteWrapper;
  ui: ColorPaletteWrapper;
};

export type TabTheme = {
  direction: Responsive<Property.FlexDirection>;
  alignX: Responsive<Property.AlignItems | Property.JustifyContent>;
  padding: Responsive<Size>;
  fontWeight: Property.FontWeight;
  fontSize: Property.FontSize;
  borderRadius: string;
  minWidth: Responsive<Size>;
  maxWidth: Responsive<Size>;
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
  alignY: Responsive<Property.AlignItems | Property.JustifyContent>;
  alignX: Responsive<Property.AlignItems | Property.JustifyContent>;
  tab: TabTheme;
};

export type SpacingHelper = (a?: number) => string;

export type MediaHelper = any;

export type ThemeFontSize = {
  [key: string]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};
