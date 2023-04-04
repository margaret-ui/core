import {
  dividerTheme,
  avatarTheme,
  containerTheme,
  dropdownMenuTheme,
  buttonTheme,
  typographyTheme,
} from '../components';
import { tooltipTheme } from '../components/Tooltip';

export const theme = {
  borderRadius: {
    none: '0',
    square: '0',
    small: '4px',
    default: '6px',
    large: '12px',
    full: '999em',
  },

  breakpoints: {
    desktop: 1200,
    medium: 1000,
    tablet: 750,
  },

  shadows: {
    elevation1: '0 2px 8px var(--colors-shades-100)',
    elevation2: '0 6px 12px var(--colors-shades-200)',
    elevation3: '0 12px 24px var(--colors-shades-200)',
    elevation4:
      '0 12px 24px var(--colors-shades-200), 0 24px 48px var(--colors-shades-200)',

    outlinePrimary: '0 0 0 4px var(--colors-primaryAlpha-400)',
  },

  avatar: avatarTheme,
  button: buttonTheme,
  divider: dividerTheme,
  container: containerTheme,
  dropdownMenu: dropdownMenuTheme,
  tooltip: tooltipTheme,

  ...typographyTheme,
};
