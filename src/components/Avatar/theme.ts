import { AvatarTheme } from './types';

export const avatarTheme: AvatarTheme = {
  background: 'var(--ui-primary)',
  backgroundLight: 'var(--ui-primary-light)',
  border: '2px solid #fff',
  color: '#fff',

  shape: {
    default: '100%',
    rounded: '6px',
    square: '0',
  },

  sizes: {
    tiny: '1rem',
    small: '2rem',
    default: '3rem',
    medium: '4rem',
    large: '6rem',
    huge: '8rem',
  },
};
