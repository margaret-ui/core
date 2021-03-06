import {
  dividerTheme,
  avatarTheme,
  containerTheme,
  buttonTheme,
  typographyTheme,
} from '../components';

export const theme = {
  borderRadius: {
    none: '0',
    square: '0',
    small: '4px',
    default: '6px',
    large: '12px',
    full: '999em',
  },

  buttonsDefaultAlignX: 'flex-start',
  boxShadowColor: 'var(--ui-separator)',
  boxShadowColorHover: 'var(--ui-separatorDark)',

  tabs: {
    margin: '',
    padding: '',
    alignY: 'center',
    alignX: 'center',
    tab: {
      direction: 'column',
      alignX: 'center',
      padding: '0.5rem 1rem',
      fontWeight: 600,
      fontSize: '1rem',
      borderRadius: '3px',
      minWidth: '100%',
      maxWidth: '162px',
      whiteSpace: 'wrap',

      background: 'var(--ui-primary)',
      boxShadow: '',
      color: 'var(--colors-gray-0)',

      backgroundHover: 'var(--ui-primary-light)',
      boxShadowHover: '0 2px 4px var(--ui-separator)',
      colorHover: 'var(--colors-gray-0)',

      backgroundDisabled: '',
      boxShadowDisabled: '',
      colorDisabled: '',

      backgroundActive: 'var(--ui-primary-light)',
      boxShadowActive: '0 2px 4px var(--ui-separator)',
      colorActive: 'var(--colors-gray-0)',
    },
  },

  mainNav: {
    width: '320px',
    maxWidth: '100%',
    background: {
      mobile: 'var(--colors-red-50)',
      tablet: 'var(--colors-red-50)',
    },
    offCanvasToVisibleBreakpoint: 'tablet',
    boxShadow: '0 4px 4px var(--colors-gray-100)',
    position: 'top',
    height: '80px',
    triggerColor: {
      expanded: 'var(--ui-primary)',
      collapsed: 'var(--ui-text)',
    },
  },

  modal: {
    sizes: {
      default: '500px',
      big: '1100px',
      medium: '800px',
      full: '100%',
    },
    padding: '1rem',
    boxShadow: '0 0 20px var(--ui-separator)',
    borderRadius: '6px',
    outline: 'none',
    background: 'var(--colors-white)',
    overlay: {
      background: 'var(--colors-gray-500)',
    },
  },

  card: {
    boxShadow: '0 2px 4px var(--ui-separator)',
    borderRadius: '20px',
  },

  tooltip: {
    fontStyle: 'bodySmall',
    fontSize: '14px',
    fontWeight: '400',
    color: 'var(--colors-white)',
    background: 'var(--ui-primary)',
    borderRadius: '2px',
    paddingVertical: '2px',
    paddingHorizontal: '4px',
    maxWidth: '200px',
  },

  fonts: {
    title:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    ui:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  },

  cssLockLowerBreakpoint: 'tablet',
  cssLockHigherBreakpoint: 'desktop',

  breakpoints: {
    desktop: 1200,
    medium: 1000,
    tablet: 750,
  },

  avatar: avatarTheme,

  divider: dividerTheme,

  container: containerTheme,
  button: buttonTheme,

  shadows: {
    elevation1: '0 2px 8px var(--colors-shades-100)',
    elevation2: '0 6px 12px var(--colors-shades-200)',
    elevation3: '0 12px 24px var(--colors-shades-200)',
    elevation4:
      '0 12px 24px var(--colors-shades-200), 0 24px 48px var(--colors-shades-200)',
  },

  ...typographyTheme,
};
