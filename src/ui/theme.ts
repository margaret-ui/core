import { dividerTheme, avatarTheme, containerTheme } from '../components';

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

  button: {
    transition: 'background 150ms ease',
    borderRadius: '6px',
    alignY: 'center',
    alignX: 'center',
    fontWeight: 600,
    paddingHorizontal: 0,
    paddingVertical: 0,
    minWidth: 0,
    color: 'var(--ui-primary)',
    boxShadow: '',
    colorHover: 'var(--ui-primary-light)',
    boxShadowHover: '',
    colorFocus: '',
    boxShadowFocus: '',

    primary: {
      background: 'var(--ui-primary)',
      color: 'var(--colors-white)',
      boxShadow: '',

      backgroundHover: 'var(--ui-primary-light)',
      colorHover: '',
      transformHover: '',
      boxShadowHover: '',

      backgroundDisabled: 'var(--ui-disabled)',
      colorDisabled: 'var(--colors-gray-400)',
      boxShadowDisabled: '',
      transformDisabled: '',

      paddingHorizontal: '24px',
      paddingVertical: '12px',
      borderRadius: '6px',
      minWidth: '180px',
    },
  },

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

  fontStacks: {
    h1Mega: {
      sizeMinRem: 1.75,
      sizeMaxRem: 2.625,
      lineHeightMin: 1.2,
      lineHeightMax: 1.1,
      fontWeight: 700,
      defaultTag: 'h1',
      fontFamily: 'title',
    },
    h1: {
      sizeMinRem: 1.375,
      sizeMaxRem: 2,
      lineHeightMin: 1.25,
      lineHeightMax: 1.2,
      fontWeight: 700,
      defaultTag: 'h1',
      fontFamily: 'title',
    },
    h2: {
      sizeMinRem: 1.25,
      sizeMaxRem: 1.5,
      lineHeightMin: 1.25,
      lineHeightMax: 1.2,
      fontWeight: 700,
      defaultTag: 'h2',
      fontFamily: 'title',
    },
    heading: {
      sizeMinRem: 1.125,
      sizeMaxRem: 1.25,
      lineHeightMin: 1.4375,
      lineHeightMax: 1.25,
      fontWeight: 700,
      defaultTag: 'h3',
      fontFamily: 'title',
    },
    subHeading: {
      sizeMinRem: 1.0625,
      sizeMaxRem: 1.1875,
      lineHeightMin: 1.2,
      lineHeightMax: 1.3,
      fontWeight: 700,
      defaultTag: 'h4',
      fontFamily: 'title',
    },
    bodyLarge: {
      sizeMinRem: 1.0625,
      sizeMaxRem: 1.1875,
      lineHeightMin: 1.2,
      lineHeightMax: 1.3,
      fontWeight: 400,
      defaultTag: 'span',
      fontFamily: 'body',
    },
    body: {
      sizeMinRem: 1,
      sizeMaxRem: 1,
      lineHeightMin: 1.3125,
      lineHeightMax: 1.5,
      fontWeight: 400,
      fontFamily: 'body',
    },
    bodySmall: {
      sizeMinRem: 0.8125,
      sizeMaxRem: 0.875,
      lineHeightMin: 1.4,
      lineHeightMax: 1.35,
      fontWeight: 400,
      fontFamily: 'body',
    },
    legend: {
      sizeMinRem: 0.8125,
      sizeMaxRem: 0.875,
      lineHeightMin: 1.4,
      lineHeightMax: 1.35,
      fontWeight: 400,
      color: 'textLight',
    },
  },

  breakpoints: {
    desktop: 1200,
    medium: 1000,
    tablet: 750,
  },

  avatar: avatarTheme,

  divider: dividerTheme,

  container: containerTheme,
};
