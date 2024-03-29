import { css, DefaultTheme } from 'styled-components';
import { isPlainObject, get } from 'lodash-es';
import { ColorMode, SpacingHelper } from '../types';

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
    case 'marginY':
      if (typeof value !== 'number') return css``;
      return css`
        margin-top: ${(theme.spacing as SpacingHelper)(value)};
        margin-bottom: ${(theme.spacing as SpacingHelper)(value)};
      `;

    case 'marginHorizontal':
    case 'marginX':
      if (typeof value !== 'number') return css``;
      return css`
        margin-left: ${(theme.spacing as SpacingHelper)(value)};
        margin-right: ${(theme.spacing as SpacingHelper)(value)};
      `;

    case 'paddingVertical':
    case 'paddingY':
      if (typeof value !== 'number') return css``;
      return css`
        padding-top: ${(theme.spacing as SpacingHelper)(value)};
        padding-bottom: ${(theme.spacing as SpacingHelper)(value)};
      `;

    case 'paddingHorizontal':
    case 'paddingX':
      if (typeof value !== 'number') return css``;
      return css`
        padding-left: ${(theme.spacing as SpacingHelper)(value)};
        padding-right: ${(theme.spacing as SpacingHelper)(value)};
      `;

    case 'color':
    case 'backgroundColor':
    case 'borderBlockColor':
    case 'borderBlockEndColor':
    case 'borderBlockStartColor':
    case 'borderBottomColor':
    case 'borderInlineColor':
    case 'borderInlineEndColor':
    case 'borderInlineStartColor':
    case 'borderLeftColor':
    case 'borderRightColor':
    case 'borderTopColor':
    case 'fill':
    case 'stroke':
      return css`
        ${formatProperty({ prefix, property })}: ${get(theme.colors, value) ||
          (isPlainObject(get(theme, value))
            ? get(theme, value)[theme.colorMode as ColorMode]
            : get(theme, value)) ||
          value};
      `;

    case 'borderRadius':
    case 'borderTopLeftRadius':
    case 'borderTopRightRadius':
    case 'borderBottomLeftRadius':
    case 'borderBottomRightRadius':
    case 'borderEndEndRadius':
    case 'borderEndStartRadius':
    case 'borderStartEndRadius':
    case 'borderStartStartRadius':
      return css`
        ${formatProperty({ prefix, property })}: ${theme.borderRadius?.[
          value
        ] ?? value};
      `;

    case 'boxShadow':
      return css`
        ${formatProperty({ prefix, property })}: ${theme.shadows?.[value] ??
          value};
      `;

    case 'textShadow':
      if (isPlainObject(theme?.fontStyles?.[value])) {
        return css`
          ${formatProperty({ prefix, property })}: ${theme?.fontStyles?.[
            value
          ]?.[`${prefix}${property}`] ?? value};
        `;
      }
      return css`
        ${formatProperty({ prefix, property })}: ${theme.shadows?.[value] ??
          value};
      `;

    case 'margin':
    case 'marginTop':
    case 'marginRight':
    case 'marginBottom':
    case 'marginLeft':
    case 'marginBlock':
    case 'marginBlockStart':
    case 'marginBlockEnd':
    case 'marginInline':
    case 'marginInlineStart':
    case 'marginInlineEnd':
    case 'padding':
    case 'paddingTop':
    case 'paddingRight':
    case 'paddingBottom':
    case 'paddingLeft':
    case 'paddingBlock':
    case 'paddingBlockStart':
    case 'paddingBlockEnd':
    case 'paddingInline':
    case 'paddingInlineStart':
    case 'paddingInlineEnd':
    case 'gridGap':
    case 'gridRowGap':
    case 'gridColumnGap':
    case 'gap':
      return css`
        ${formatProperty({ prefix, property })}: ${isNaN(value)
          ? value
          : (theme.spacing as SpacingHelper)(Number(value))};
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
    case 'maxWidth':
    case 'maxHeight':
    case 'overflow':
    case 'overflowX':
    case 'overflowY':
    case 'textAlign':
    case 'transition':
    case 'transform':
    case 'flex':
    case 'flexDirection':
    case 'flexFlow':
    case 'flexGrow':
    case 'flexShrink':
    case 'flexBasis':
    case 'flexWrap':
    case 'alignSelf':
    case 'alignItems':
    case 'justifyContent':
    case 'justifySelf':
    case 'placeItems':
    case 'placeContent':
    case 'placeSelf':
    case 'objectFit':
    case 'objectPosition':
    case 'opacity':
    case 'order':
    case 'grid':
    case 'gridArea':
    case 'gridColumn':
    case 'gridRow':
    case 'gridAutoFlow':
    case 'gridAutoRows':
    case 'gridAutoColumns':
    case 'gridColumnStart':
    case 'gridColumnEnd':
    case 'gridRowStart':
    case 'gridRowEnd':
    case 'gridTemplateRows':
    case 'gridTemplateColumns':
    case 'gridTemplateAreas':
    case 'zIndex':
    case 'inset':
    case 'outline':
    case 'outlineColor':
    case 'outlineOffset':
    case 'outlineStyle':
    case 'whiteSpace':
    case 'wordBreak':
    case 'wordWrap':
    case 'textOverflow':
    case 'cursor':
    case 'clipPath':
    case 'backgroundOrigin':
    case 'backgroundPosition':
    case 'backgroundPositionX':
    case 'backgroundPositionY':
    case 'backgroundRepeat':
    case 'backgroundSize':
    case 'backdropFilter':
    case 'backfaceVisibility':
    case 'background':
    case 'backgroundImage':
    case 'backgroundAttachment':
    case 'backgroundBlendMode':
    case 'backgroundClip':
    case 'accentColor':
    case 'colorScheme':
    case 'alignContent':
    case 'animation':
    case 'animationDelay':
    case 'animationDirection':
    case 'animationDuration':
    case 'animationFillMode':
    case 'animationIterationCount':
    case 'animationName':
    case 'animationPlayState':
    case 'animationTimingFunction':
    case 'appearance':
    case 'aspectRatio':
    case 'all':
    case 'border':
    case 'borderBlock':
    case 'borderBlockEnd':
    case 'borderBlockEndStyle':
    case 'borderBlockEndWidth':
    case 'borderBlockStart':
    case 'borderBlockStartStyle':
    case 'borderBlockStartWidth':
    case 'borderBlockStyle':
    case 'borderBlockWidth':
    case 'borderBottom':
    case 'borderBottomStyle':
    case 'borderBottomWidth':
    case 'borderCollapse':
    case 'borderColor':
    case 'borderImage':
    case 'borderImageOutset':
    case 'borderImageRepeat':
    case 'borderImageSlice':
    case 'borderImageSource':
    case 'borderImageWidth':
    case 'borderInline':
    case 'borderInlineEnd':
    case 'borderInlineEndStyle':
    case 'borderInlineEndWidth':
    case 'borderInlineStart':
    case 'borderInlineStartStyle':
    case 'borderInlineStartWidth':
    case 'borderInlineStyle':
    case 'borderInlineWidth':
    case 'borderLeft':
    case 'borderLeftStyle':
    case 'borderLeftWidth':
    case 'borderRight':
    case 'borderRightStyle':
    case 'borderRightWidth':
    case 'borderSpacing':
    case 'borderStyle':
    case 'borderTop':
    case 'borderTopStyle':
    case 'borderTopWidth':
    case 'borderWidth':
    case 'willChange':
    case 'mask':
    case 'maskBorder':
    case 'maskBorderMode':
    case 'maskBorderOutset':
    case 'maskBorderRepeat':
    case 'maskBorderSlice':
    case 'maskBorderSource':
    case 'maskBorderWidth':
    case 'maskClip':
    case 'maskComposite':
    case 'maskImage':
    case 'maskMode':
    case 'maskOrigin':
    case 'maskPosition':
    case 'maskRepeat':
    case 'maskSize':
    case 'maskType':
      return css`
        ${formatProperty({ prefix, property })}: ${value};
      `;

    case 'fontFamily':
      return css`
        ${formatProperty({ prefix, property })}: ${theme?.fontStacks?.[
          theme?.fontStyles?.[value]?.fontStack
        ] ||
          theme?.fontStacks?.[value] ||
          value};
      `;

    case 'fontStretch':
    case 'fontStyle':
    case 'fontVariant':
    case 'fontWeight':
    case 'textDecoration':
    case 'textTransform':
    case 'letterSpacing':
      if (isPlainObject(theme?.fontStyles?.[value])) {
        return css`
          ${formatProperty({ prefix, property })}: ${theme?.fontStyles?.[
            value
          ]?.[`${prefix}${property}`] || value};
        `;
      }
      return css`
        ${formatProperty({ prefix, property })}: ${value};
      `;

    case 'fontSize':
      if (isPlainObject(theme?.fontStyles?.[value])) {
        return css`
          ${formatProperty({ prefix, property })}: ${theme?.fontStyles?.[value]
            ?.fontSizeMax};
          ${formatProperty({ prefix, property })}: clamp(
            ${theme?.fontStyles?.[value]?.fontSizeMin},
            ${theme?.fontStyles?.[value]?.fluidFontSize},
            ${theme?.fontStyles?.[value]?.fontSizeMax}
          );
        `;
      }
      return css`
        ${formatProperty({ prefix, property })}: ${value};
      `;

    case 'fontStyles':
    case 'textStyle':
      return css`
        ${[
          'fontFamily',
          'fontSize',
          'fontStretch',
          'fontStyle',
          'fontVariant',
          'fontWeight',
          'lineHeight',
          'textTransform',
          'textDecoration',
          'textShadow',
          'letterSpacing',
        ].map((property: any): any =>
          setPropertyBreakpoint({ theme, value, property, prefix }),
        )}
      `;

    case 'lineHeight':
      if (isPlainObject(theme?.fontStyles?.[value])) {
        return css`
          ${formatProperty({ prefix, property })}: ${theme?.fontStyles?.[value]
            ?.lineHeightMax};
          ${formatProperty({ prefix, property })}: clamp(
            ${theme?.fontStyles?.[value]?.lineHeightMin},
            ${theme?.fontStyles?.[value]?.fluidLineHeight},
            ${theme?.fontStyles?.[value]?.lineHeightMax}
          );
        `;
      }
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
