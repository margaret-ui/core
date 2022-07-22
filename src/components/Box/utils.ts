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

    'padding',
    'paddingVertical',
    'paddingHorizontal',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',

    'margin',
    'marginVertical',
    'marginHorizontal',
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
    'order',
    'gap',

    'width',
    'height',
    'minWidth',
    'minHeight',

    'overflow',
    'overflowX',
    'overflowY',

    'textAlign',
    'textDecoration',
    'fontFamily',
    'fontSize',
    'fontStyle',
    'fontStyles',
    'fontWeight',

    'boxShadow',
    'borderRadius',

    'gridArea',
    'gridColumnStart',
    'gridColumnEnd',
    'gridRowStart',
    'gridRowEnd',

    'transition',
    'transform',
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
    position: absolute !important;
    border: 0 !important;
    width: 1 !important;
    height: 1 !important;
    padding: 0 !important;
    margin: -1 !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    word-wrap: normal !important;
  `;
