import 'styled-components';
import {
  ThemeBorderRadii,
  ThemeFonts,
  ThemeFontStacks,
  ThemeBreakpoints,
  ThemeSizes,
  ColorMode,
  ColorPaletteWrapper,
} from './types';
import { SpacingHelper } from './ui';

declare module 'styled-components' {
  export interface DefaultTheme {
    colorMode: ColorMode;

    borderRadius: ThemeBorderRadii;
    ui: ColorPaletteWrapper;
    colors: ColorPaletteWrapper;
    fonts: ThemeFonts;
    fontsStacks: ThemeFontStacks;
    breakpoints: ThemeBreakpoints;
    containerSizes: ThemeSizes;
    avatarSize: ThemeSizes;
    cssLockLowerBreakpoint: string;
    cssLockHigherBreakpoint: string;

    // Helpers
    spacing: SpacingHelper;

    // Colors
    [key: string]: string;
  }
}
