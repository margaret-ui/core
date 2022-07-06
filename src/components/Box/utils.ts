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
    'fontWeight',
    'fontStyle',

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
    clip: rect(1px, 1px, 1px, 1px) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    width: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
  `;
