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
  ThemeFontSize,
} from './types';

declare module 'styled-components' {
  export interface DefaultTheme {
    colorMode?: ColorMode;

    borderRadius?: ThemeBorderRadii;
    ui?: any;
    colors?: any;
    fonts?: ThemeFonts;
    fontStacks?: ThemeFontStacks;
    fontStyles?: any;
    breakpoints?: ThemeBreakpoints;
    fontSize?: ThemeFontSize;
    containerSizes?: ThemeSizes;
    avatarSize?: ThemeSizes;

    spacing?: SpacingHelper;
    media?: MediaHelper;
    viewportSizes?: any;

    divider?: DividerTheme;

    [key: string]: any;
  }
}
