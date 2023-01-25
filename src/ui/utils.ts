import { css, DefaultTheme } from 'styled-components';
import { keys, isObject, kebabCase } from 'lodash-es';
import { colors as defaultColors } from './colors';
import { Breakpoint, ColorsOverride } from '../types';

export const BASE = 1;
export const spacing = (input = 1) => `${input}rem`;

const mediaQuery: any = (...query: any[]): any => (...rules: any[]): any =>
  css`
      @media ${css.apply(null, query as any)} {
        ${css.apply(null, rules as any)})};
      }
    `;

export const injectPalette = ({
  palette,
  prefix,
}: {
  palette: any;
  prefix?: string;
}) =>
  css`
    ${keys(palette).reduce((colors: any, color: any) => {
      if (isObject(palette[color])) {
        return [
          ...colors,
          ...keys(palette[color]).reduce(
            (shades, shade) =>
              [
                ...shades,
                `--${prefix}-${color}-${shade}: ${palette[color][shade]};`,
              ] as any,
            [],
          ),
        ];
      }
      return [...colors, `--${prefix}-${kebabCase(color)}: ${palette[color]};`];
    }, [])}
  `;

export const injectMargaret = ({
  theme,
  colors = { palette: {}, ui: {} },
}: {
  theme: Omit<DefaultTheme, 'spacing' | 'media'>;
  colors: ColorsOverride;
}): DefaultTheme => {
  theme.colors = {
    ...defaultColors?.palette,
    ...colors?.palette,
  };

  theme.ui = {};

  const uiColors = { ...defaultColors?.ui, ...colors?.ui };

  keys(uiColors).forEach(colorName => {
    theme.ui[colorName] = isObject(colors.ui?.[colorName])
      ? colors.ui?.[colorName]?.[(theme.colorMode || 'light') as any]
      : colors.ui?.[colorName];
    theme[colorName] = theme.ui[colorName];
  });

  theme.spacing = (input = 1) => `${input * 1}rem`;

  theme.media = keys(theme.breakpoints).reduce(
    (media, breakpoint) => ({
      ...media,
      [breakpoint]: mediaQuery`(min-width: ${(theme.breakpoints?.[
        breakpoint as Breakpoint
      ] as number) / 16}em)`,
    }),
    {},
  );

  return theme;
};
