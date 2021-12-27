import styled, { css } from 'styled-components';
import { setProperty } from '../utils';

const Box = styled.div`
  ${({ theme, ...props }) =>
    [
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
      'order',

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
    ]
      .filter(property => props?.[property] !== undefined)
      .map(property =>
        setProperty({
          theme,
          property,
          value: props?.[property],
        }),
      )}

  ${({ size }) =>
    size === 'full' &&
    css`
      width: 100%;
    `}

  ${({ size }) =>
    size === 'fit-content' &&
    css`
      width: fit-content;
    `}
`;

export default Box;
