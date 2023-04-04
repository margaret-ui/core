import { ButtonTheme } from './types';

export const buttonTheme: ButtonTheme = {
  variant: {
    solid: {
      fontWeight: '600',
      fontSize: '18px',
      borderRadius: '30px',
      alignY: 'center',
      alignX: 'center',
      transition: 'background 150ms ease',

      background: 'var(--ui-primary)',
      color: 'var(--colors-white)',

      backgroundHover: 'var(--ui-primary-light)',
      colorHover: 'var(--colors-white)',

      backgroundFocus: 'var(--ui-primary-light)',
      boxShadowFocus: 'outlinePrimary',

      opacityDisabled: 0.4,
    },
    outline: {
      fontWeight: '600',
      fontSize: '18px',
      borderRadius: 'default',
      alignY: 'center',
      alignX: 'center',
      transition: 'background 150ms ease',

      background: 'var(--colors-white)',
      color: 'var(--ui-primary)',
      boxShadow: '0 0 0 2px var(--ui-primary)',

      backgroundHover: 'var(--ui-primary-background)',

      backgroundFocus: '',
      colorFocus: '',
      boxShadowFocus:
        '0 0 0 2px var(--ui-primary), var(--shadows-primary-outline)',

      opacityDisabled: 0.4,
    },
    ghost: {
      fontWeight: '600',
      fontSize: '18px',
      borderRadius: '30px',
      alignY: 'center',
      alignX: 'center',
      transition: 'background 150ms ease',

      color: 'var(--ui-primary)',

      backgroundHover: 'var(--ui-primary-background)',

      backgroundFocus: '',
      colorFocus: '',
      boxShadowFocus: '',
      transformFocus: '',
      textDecorationFocus: '',

      opacityDisabled: 0.4,
    },
    link: {
      fontWeight: '600',
      fontSize: '18px',
      borderRadius: '30px',
      alignY: 'center',
      alignX: 'center',
      transition: 'background 150ms ease',

      color: 'var(--ui-primary)',

      colorHover: 'var(--ui-primary)',
      textDecorationHover: 'underline',

      backgroundFocus: '',
      colorFocus: '',
      boxShadowFocus: '',
      transformFocus: '',
      textDecorationFocus: '',

      textDecorationDisabled: 'none',
      opacityDisabled: 0.4,
    },
  },
  sizes: {
    bare: {
      paddingVertical: 0,
      paddingHorizontal: 0,
      fontSize: '1rem',
    },
    small: {
      paddingVertical: 0.5,
      paddingHorizontal: 0.75,
      fontSize: '0.875rem',
    },
    default: {
      paddingVertical: 0.75,
      paddingHorizontal: 1,
      fontSize: '1rem',
      minWidth: '2.5rem',
    },
    large: {
      paddingVertical: 1,
      paddingHorizontal: 1.5,
      fontSize: '1.125rem',
      minWidth: '3rem',
    },
  },
};
