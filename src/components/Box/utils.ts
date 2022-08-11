import { css } from 'styled-components';
import { setProperty } from '../../utils';
import { BoxProps } from './types';

export const injectLayoutHelpers = ({ theme, ...props }: BoxProps & any) =>
  (([
    'display',

    'position',
    'top',
    'right',
    'bottom',
    'left',
    'inset',
    'zIndex',

    'opacity',

    'outline',
    'outlineColor',
    'outlineOffset',
    'outlineStyle',

    'overflow',
    'overflowX',
    'overflowY',

    'padding',
    'paddingVertical',
    'paddingHorizontal',
    'paddingY',
    'paddingX',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',

    'margin',
    'marginVertical',
    'marginHorizontal',
    'marginX',
    'marginY',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginAuto',

    'color',
    'backgroundColor',
    'background',
    'backgroundImage',

    'flex',
    'flexGrow',
    'flexShrink',
    'flexBasis',
    'flexWrap',
    'flexFlow',
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
    'fontWeight',

    'boxShadow',
    'textShadow',
    'borderRadius',

    'gridArea',
    'gridColumnStart',
    'gridColumnEnd',
    'gridRowStart',
    'gridRowEnd',

    'transition',
    'transform',

    'whiteSpace',
    'wordBreak',
    'wordWrap',
    'textOverflow',

    'cursor',
  ] as const).filter(
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
    clip: rect(1px, 1px, 1px, 1px) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    width: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
  `;
