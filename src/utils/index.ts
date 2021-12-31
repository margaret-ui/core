import { css, DefaultTheme } from 'styled-components';
import { isPlainObject } from 'lodash-es';

type FormatPropertyParams = {
  property: string;
  prefix?: string;
};

const formatProperty = ({
  property,
  prefix = '',
}: FormatPropertyParams): string =>
  `${prefix}${prefix ? '-' : ''}${property}`
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

export const setPropertyBreakpoint = ({
  theme,
  value,
  property,
  prefix,
}: FormatPropertyParams & {
  theme: DefaultTheme;
  value: any;
}) => {
  switch (`${prefix}${property}`) {
    case 'marginAuto':
      if (!value) {
        return css``;
      }
      return css`
        margin-left: auto;
        margin-right: auto;
      `;

    case 'marginVertical':
      if (typeof value !== 'number') return css``;
      return css`
        margin-top: ${theme.spacing(value)};
        margin-bottom: ${theme.spacing(value)};
      `;

    case 'marginHorizontal':
      if (typeof value !== 'number') return css``;
      return css`
        margin-left: ${theme.spacing(value)};
        margin-right: ${theme.spacing(value)};
      `;

    case 'paddingVertical':
      if (typeof value !== 'number') return css``;
      return css`
        padding-top: ${theme.spacing(value)};
        padding-bottom: ${theme.spacing(value)};
      `;

    case 'paddingHorizontal':
      if (typeof value !== 'number') return css``;
      return css`
        padding-left: ${theme.spacing(value)};
        padding-right: ${theme.spacing(value)};
      `;

    case 'color':
    case 'backgroundColor':
      return css`
        ${formatProperty({ prefix, property })}: ${theme.colors?.[value] ||
        (isPlainObject(theme?.[value])
          ? theme[value][theme.colorMode]
          : theme[value]) ||
        '#bada55'};
      `;

    case 'borderRadius':
    case 'borderTopLeftRadius':
    case 'borderTopRightRadius':
    case 'borderBottomLeftRadius':
    case 'borderBottomRightRadius':
      return css`
        ${formatProperty({ prefix, property })}: ${theme.borderRadius?.[value]};
      `;

    case 'margin':
    case 'marginTop':
    case 'marginRight':
    case 'marginBottom':
    case 'marginLeft':
    case 'padding':
    case 'paddingTop':
    case 'paddingRight':
    case 'paddingBottom':
    case 'paddingLeft':
    case 'gridGap':
    case 'gridRowGap':
    case 'gridColumnGap':
      return css`
        ${formatProperty({ prefix, property })}: ${value === 'unset'
          ? 'unset'
          : theme.spacing(Number(value))};
      `;

    case 'display':
    case 'position':
    case 'top':
    case 'right':
    case 'bottom':
    case 'left':
    case 'width':
    case 'height':
    case 'minWidth':
    case 'minHeight':
    case 'overflow':
    case 'overflowX':
    case 'overflowY':
    case 'textAlign':
    case 'textDecoration':
    case 'fontWeight':
    case 'fontStyle':
    case 'transition':
    case 'transform':
    case 'flex':
    case 'flexDirection':
    case 'flexGrow':
    case 'flexShrink':
    case 'flexBasis':
    case 'order':
    case 'gridColumn':
    case 'gridRow':
    case 'gridArea':
    case 'gridAutoFlow':
    case 'gridAutoRows':
    case 'gridAutoColumns':
    case 'gridTemplateRows':
    case 'gridTemplateColumns':
    case 'gridTemplateAreas':
      return css`
        ${formatProperty({ prefix, property })}: ${value};
      `;

    default:
      return undefined;
  }
};

export const setProperty = ({
  theme,
  value,
  property,
  prefix = '',
}: FormatPropertyParams & {
  theme: DefaultTheme;
  value: any;
}) => {
  if (!isPlainObject(value)) {
    return setPropertyBreakpoint({
      theme,
      value,
      property,
      prefix,
    });
  }

  return css`
    ${setPropertyBreakpoint({
      theme,
      value: value!.default,
      property,
      prefix,
    })}

    ${Object.keys(value)
      .filter(
        breakpoint => breakpoint !== 'default' && theme.media?.[breakpoint],
      )
      .map(
        breakpoint => theme.media[breakpoint]`
        ${setPropertyBreakpoint({
          theme,
          value: value?.[breakpoint],
          property,
          prefix,
        })}
        `,
      )}
  `;
};
