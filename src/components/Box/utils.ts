import { css } from 'styled-components';
import { setProperty } from '../../utils';
import { BoxProps } from './types';

export const paddingProps = [
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingBlock',
  'paddingBlockStart',
  'paddingBlockEnd',
  'paddingInline',
  'paddingInlineStart',
  'paddingInlineEnd',
  'paddingX',
  'paddingHorizontal',
  'paddingY',
  'paddingVertical',
];

export const marginProps = [
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginBlock',
  'marginBlockStart',
  'marginBlockEnd',
  'marginInline',
  'marginInlineStart',
  'marginInlineEnd',
  'marginHorizontal',
  'marginX',
  'marginY',
  'marginVertical',
];

export const borderProps = [
  'border',
  'borderBlock',
  'borderBlockColor',
  'borderBlockEnd',
  'borderBlockEndColor',
  'borderBlockEndStyle',
  'borderBlockEndWidth',
  'borderBlockStart',
  'borderBlockStartColor',
  'borderBlockStartStyle',
  'borderBlockStartWidth',
  'borderBlockStyle',
  'borderBlockWidth',
  'borderBottom',
  'borderBottomColor',
  'borderBottomStyle',
  'borderBottomWidth',
  'borderCollapse',
  'borderColor',
  'borderImage',
  'borderImageOutset',
  'borderImageRepeat',
  'borderImageSlice',
  'borderImageSource',
  'borderImageWidth',
  'borderInline',
  'borderInlineColor',
  'borderInlineEnd',
  'borderInlineEndColor',
  'borderInlineEndStyle',
  'borderInlineEndWidth',
  'borderInlineStart',
  'borderInlineStartColor',
  'borderInlineStartStyle',
  'borderInlineStartWidth',
  'borderInlineStyle',
  'borderInlineWidth',
  'borderLeft',
  'borderLeftColor',
  'borderLeftStyle',
  'borderLeftWidth',
  'borderRight',
  'borderRightColor',
  'borderRightStyle',
  'borderRightWidth',
  'borderSpacing',
  'borderStyle',
  'borderTop',
  'borderTopColor',
  'borderTopStyle',
  'borderTopWidth',
  'borderWidth',
];

export const borderRadiusProps = [
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderEndEndRadius',
  'borderEndStartRadius',
  'borderStartEndRadius',
  'borderStartStartRadius',
];

export const animationProps = [
  'animation',
  'animationDelay',
  'animationDirection',
  'animationDuration',
  'animationFillMode',
  'animationIterationCount',
  'animationName',
  'animationPlayState',
  'animationTimingFunction',
];

export const positionProps = [
  'position',
  'top',
  'right',
  'bottom',
  'left',
  'inset',
  'zIndex',
];

export const backgroundProps = [
  'background',
  'backgroundAttachment',
  'backgroundBlendMode',
  'backgroundClip',
  'backgroundColor',
  'backgroundImage',
  'backgroundOrigin',
  'backgroundPosition',
  'backgroundPositionX',
  'backgroundPositionY',
  'backgroundRepeat',
  'backgroundSize',
];

export const layoutProps = [
  'all',
  'display',

  ...animationProps,

  'appearance',
  'aspectRatio',
  'clipPath',

  ...positionProps,

  'opacity',

  'outline',
  'outlineColor',
  'outlineOffset',
  'outlineStyle',

  'overflow',
  'overflowX',
  'overflowY',

  'alignContent',
  'alignSelf',
  'alignItems',
  'justifyContent',
  'justifySelf',
  'placeItems',
  'placeContent',
  'placeSelf',

  'objectFit',
  'objectPosition',

  ...paddingProps,
  ...marginProps,

  'accentColor',
  'colorScheme',
  'color',

  ...backgroundProps,

  'backdropFilter',
  'backfaceVisibility',

  'flex',
  'flexGrow',
  'flexShrink',
  'flexBasis',
  'flexWrap',
  'flexFlow',
  'flexDirection',
  'direction',
  'order',
  'gap',

  'width',
  'height',
  'minWidth',
  'minHeight',
  'maxWidth',
  'maxHeight',

  'overflow',
  'overflowX',
  'overflowY',

  'textAlign',
  'textDecoration',
  'textTransform',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontStyles',
  'textStyle',
  'fontWeight',

  'boxShadow',
  'textShadow',

  ...borderProps,
  ...borderRadiusProps,

  'grid',
  'gridArea',
  'gridColumn',
  'gridRow',
  'gridAutoFlow',
  'gridAutoRows',
  'gridAutoColumns',
  'gridColumnStart',
  'gridColumnEnd',
  'gridRowStart',
  'gridRowEnd',
  'gridTemplateRows',
  'gridTemplateColumns',
  'gridTemplateAreas',

  'transition',
  'transform',

  'whiteSpace',
  'wordBreak',
  'wordWrap',
  'textOverflow',

  'willChange',

  'mask',
  'maskBorder',
  'maskBorderMode',
  'maskBorderOutset',
  'maskBorderRepeat',
  'maskBorderSlice',
  'maskBorderSource',
  'maskBorderWidth',
  'maskClip',
  'maskComposite',
  'maskImage',
  'maskMode',
  'maskOrigin',
  'maskPosition',
  'maskRepeat',
  'maskSize',
  'maskType',

  'cursor',
];

export const injectLayoutHelpers = ({ theme, ...props }: BoxProps & any) =>
  (layoutProps.filter(
    property => props[property] !== undefined,
  ) as string[]).map(property =>
    setProperty({
      property,
      theme,
      value: props[property as keyof BoxProps],
    }),
  );

export const injectVisuallyHiddenHelper = ({ visuallyHidden }: BoxProps) =>
  visuallyHidden &&
  css`
    position: absolute !important;
    border: 0 !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    clip-path: inset(50%) !important;
    white-space: nowrap !important;
    word-wrap: normal !important;
  `;
