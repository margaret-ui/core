import 'styled-components';
import { DividerTheme } from './components';
import {
  ThemeBorderRadii,
  ThemeFonts,
  ThemeFontStacks,
  ThemeBreakpoints,
  ThemeSizes,
  ColorMode,
  MediaHelper,
  SpacingHelper,
  ThemeLineHeights,
  ThemeFontSize,
} from './types';

declare module 'styled-components' {
  export interface DefaultTheme {
    colorMode: ColorMode;

    borderRadius?: ThemeBorderRadii;
    ui: any;
    colors: any;
    fonts: ThemeFonts;
    fontStacks: ThemeFontStacks;
    breakpoints: ThemeBreakpoints;
    lineHeight: ThemeLineHeights;
    fontSize: ThemeFontSize;
    containerSizes: ThemeSizes;
    avatarSize: ThemeSizes;
    cssLockLowerBreakpoint: string;
    cssLockHigherBreakpoint: string;

    // Helpers
    spacing: SpacingHelper;
    media: MediaHelper;
    fontStyles: any;
    viewportSizes: any;

    // Components
    divider: DividerTheme;

    [key: string]: any;
  }
}
