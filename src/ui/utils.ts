import { css, DefaultTheme } from 'styled-components';
import { keys, isObject, kebabCase } from 'lodash-es';
import { colors as defaultColors } from './colors';
import { Breakpoint } from '../types';

export const BASE = 1;
export const spacing = (input = 1) => `${input}rem`;

const mediaQuery: any = (...query: any[]): any => (...rules: any[]): any =>
  css`
      @media ${css.apply(null, query as any)} {
        ${css.apply(null, rules as any)})};
      }
    `;

const cssLock = ({
  valueUnit = '',
  minValue,
  maxValue,
  lowerBreakpoint,
  higherBreakpoint,
}: {
  valueUnit?: string;
  minValue: string | number;
  maxValue: string | number;
  lowerBreakpoint?: number;
  higherBreakpoint?: number;
}): string =>
  `calc((${minValue} * 1${valueUnit}) + (${maxValue} - ${minValue}) * ((100vw - ${(lowerBreakpoint ||
    0) / 16}rem) / (${(higherBreakpoint || 0) / 16} - ${(lowerBreakpoint || 0) /
    16})))`;

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
  colors = {},
}: {
  theme: DefaultTheme;
  colors: any;
}): DefaultTheme => {
  theme.colors = {
    ...defaultColors?.palette,
    ...(colors?.palette as {}),
  };

  theme.ui = {};

  const uiColors = { ...defaultColors?.ui, ...(colors?.ui as {}) };

  keys(uiColors).forEach(colorName => {
    (theme.ui as any)[colorName] = isObject(colors.ui?.[colorName])
      ? colors.ui?.[colorName]?.[(theme.colorMode || 'light') as any]
      : colors.ui?.[colorName];
    (theme as any)[colorName] = theme.ui[colorName];
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

  // theme.fontSize = keys(theme.fontStacks).reduce(
  //   (acc, breakpoint) => ({
  //     ...acc,
  //     [breakpoint]: css`
  //       font-size: ${theme.fontStacks?.[breakpoint]?.sizeMinRem}rem;

  //       ${theme.media[theme.cssLockLowerBreakpoint || 'tablet']`
  //         font-size: ${cssLock({
  //           valueUnit: 'rem',
  //           minValue: theme.fontStacks?.[breakpoint]?.sizeMinRem,
  //           maxValue: theme.fontStacks?.[breakpoint]?.sizeMaxRem,
  //           lowerBreakpoint:
  //             theme.breakpoints[
  //               theme.cssLockLowerBreakpoint as keyof typeof theme.breakpoints
  //             ],
  //           higherBreakpoint:
  //             theme.breakpoints[
  //               theme.cssLockHigherBreakpoint as keyof typeof theme.breakpoints
  //             ],
  //         })};
  //       `}

  //       ${theme.media[theme.cssLockHigherBreakpoint]`
  //         font-size: ${theme.fontStacks?.[breakpoint]?.sizeMaxRem}rem;
  //       `}
  //     `,
  //   }),
  //   {},
  // );

  // theme.lineHeight = keys(theme.fontStacks).reduce(
  //   (acc, breakpoint) => ({
  //     ...acc,
  //     [breakpoint]: css`
  //       line-height: ${theme.fontStacks?.[breakpoint]?.lineHeightMin}em;

  //       ${theme.media[
  //         (theme.cssLockLowerBreakpoint ||
  //           'tablet') as keyof typeof theme.breakpoints
  //       ]`
  //         line-height: ${cssLock({
  //           minValue: theme.fontStacks?.[breakpoint]?.lineHeightMin,
  //           maxValue: theme.fontStacks?.[breakpoint]?.lineHeightMax,
  //           lowerBreakpoint:
  //             theme.breakpoints?.[
  //               theme.cssLockLowerBreakpoint as keyof typeof theme.breakpoints
  //             ],
  //           higherBreakpoint:
  //             theme.breakpoints?.[theme.cssLockHigherBreakpoint as Breakpoint],
  //         })};
  //       `}

  //       ${theme.media[theme.cssLockHigherBreakpoint || 'desktop']`
  //         line-height: ${theme.fontStacks?.[breakpoint]?.lineHeightMax}em;
  //       `}
  //     `,
  //   }),
  //   {},
  // );

  // theme.fontStyles = keys(theme.fontStacks).reduce(
  //   (acc, style) => ({
  //     ...acc,
  //     [style]: css`
  //       ${theme.fontSize[style]}
  //       ${theme.lineHeight[style]}
  //       ${theme.fontStacks?.[style]?.fontWeight &&
  //         css`
  //           font-weight: ${theme.fontStacks[style]?.fontWeight};
  //         `}
  //       ${theme.fontStacks?.[style]?.color &&
  //         css`
  //           color: ${theme.colors?.[theme.fontStacks[style].color] ||
  //             theme?.[theme.fontStacks[style].color]};
  //         `}
  //       ${theme.fontStacks?.[style]?.fontFamily &&
  //         css`
  //           font-family: ${theme.fonts?.[theme.fontStacks[style].fontFamily]};
  //         `}
  //     `,
  //   }),
  //   {},
  // );

  return theme;
};
