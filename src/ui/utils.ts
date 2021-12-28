import {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { keys, isObject, kebabCase } from 'lodash';
import { colors as defaultColors } from './theme';
import { ColorPalette } from '../types';

export const BASE = 1;
export const spacing = (input = 1) => `${input}rem`;

export const breakpoints = {
  desktop: 1200,
  medium: 1000,
  tablet: 750,
};

export const viewportSizes = { ...breakpoints };

const mediaQuery =
  (...query) =>
  (...rules) =>
    css`
      @media ${css(...query)} {
        ${css(...rules)};
      }
    `;

const cssLock = ({
  valueUnit = '',
  minValue,
  maxValue,
  lowerBreakpoint,
  higherBreakpoint,
}: {
  valueUnit: string;
  minValue: string | number;
  maxValue: string | number;
  lowerBreakpoint: number;
  higherBreakpoint: number;
}): string =>
  `calc((${minValue} * 1${valueUnit}) + (${maxValue} - ${minValue}) * ((100vw - ${
    lowerBreakpoint / 16
  }rem) / (${higherBreakpoint / 16} - ${lowerBreakpoint / 16})))`;

export const injectPalette = ({
  palette,
  prefix,
}: {
  palette: ColorPalette;
  prefix?: string;
}): FlattenSimpleInterpolation =>
  css`
    ${keys(palette).reduce((colors, color) => {
      if (isObject(palette[color])) {
        return [
          ...colors,
          ...keys(palette[color]).reduce(
            (shades, shade) => [
              ...shades,
              `--${prefix}-${color}-${shade}: ${palette[color][shade]};`,
            ],
            [],
          ),
        ];
      }
      return [...colors, `--${prefix}-${kebabCase(color)}: ${palette[color]};`];
    }, [])}
  `;

export type SpacingHelper = (a: number) => string;

export const injectMargaret = ({
  theme,
  colors = {},
}: {
  theme: DefaultTheme;
  colors: ColorPalette;
}): DefaultTheme => {
  theme.colors = {
    ...defaultColors?.palette,
    ...colors?.palette,
  };

  theme.ui = {};

  const uiColors = { ...defaultColors?.ui, ...colors?.ui };

  keys(uiColors).forEach(colorName => {
    theme.ui[colorName] = isObject(colors.ui?.[colorName])
      ? colors.ui?.[colorName]?.[theme.colorMode || 'light']
      : colors.ui?.[colorName];
    theme[colorName] = theme.ui[colorName];
  });

  theme.breakpoints =
    theme.breakpoints || theme.viewportSizes || breakpoints || {};

  theme.spacing = (input = 1) => `${input * 1}rem`;

  theme.media = keys(theme.breakpoints).reduce(
    (media, breakpoint) => ({
      ...media,
      [breakpoint]: mediaQuery`(min-width: ${
        theme.breakpoints?.[breakpoint] / 16
      }em)`,
    }),
    {},
  );

  theme.fontSize = keys(theme.fontStacks).reduce(
    (acc, breakpoint) => ({
      ...acc,
      [breakpoint]: css`
        font-size: ${theme.fontStacks?.[breakpoint]?.sizeMinRem}rem;

        ${theme.media[theme.cssLockLowerBreakpoint || 'tablet']`
          font-size: ${cssLock({
            valueUnit: 'rem',
            minValue: theme.fontStacks?.[breakpoint]?.sizeMinRem,
            maxValue: theme.fontStacks?.[breakpoint]?.sizeMaxRem,
            lowerBreakpoint:
              theme.breakpoints?.[theme.cssLockLowerBreakpoint || 'tablet'],
            higherBreakpoint:
              theme.breakpoints?.[theme.cssLockHigherBreakpoint || 'desktop'],
          })};
        `}

        ${theme.media[theme.cssLockHigherBreakpoint || 'desktop']`
          font-size: ${theme.fontStacks?.[breakpoint]?.sizeMaxRem}rem;
        `}
      `,
    }),
    {},
  );

  theme.lineHeight = keys(theme.fontStacks).reduce(
    (acc, breakpoint) => ({
      ...acc,
      [breakpoint]: css`
        line-height: ${theme.fontStacks?.[breakpoint]?.lineHeightMin}em;

        ${theme.media[theme.cssLockLowerBreakpoint || 'tablet']`
          line-height: ${cssLock({
            minValue: theme.fontStacks?.[breakpoint]?.lineHeightMin,
            maxValue: theme.fontStacks?.[breakpoint]?.lineHeightMax,
            lowerBreakpoint:
              theme.breakpoints?.[theme.cssLockLowerBreakpoint || 'tablet'],
            higherBreakpoint:
              theme.breakpoints?.[theme.cssLockHigherBreakpoint || 'desktop'],
          })};
        `}

        ${theme.media[theme.cssLockHigherBreakpoint || 'desktop']`
          line-height: ${theme.fontStacks?.[breakpoint]?.lineHeightMax}em;
        `}
      `,
    }),
    {},
  );

  theme.fontStyles = keys(theme.fontStacks).reduce(
    (acc, style) => ({
      ...acc,
      [style]: css`
        ${theme.fontSize[style]}
        ${theme.lineHeight[style]}
        ${Boolean(theme.fontStacks?.[style]?.fontWeight) &&
        css`
          font-weight: ${theme.fontStacks[style]?.fontWeight};
        `}
        ${Boolean(theme.fontStacks?.[style]?.color) &&
        css`
          color: ${theme.colors?.[theme.fontStacks[style].color] ||
          theme?.[theme.fontStacks[style].color]};
        `}
        ${Boolean(theme.fontStacks?.[style]?.fontFamily) &&
        css`
          font-family: ${theme.fonts?.[theme.fontStacks[style].fontFamily]};
        `}
      `,
    }),
    {},
  );

  return theme;
};
