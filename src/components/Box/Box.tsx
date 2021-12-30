import styled from 'styled-components';
import { setProperty } from '../../utils';
import { BoxProps } from './types';

const Box = styled.div<BoxProps>`
  ${({ theme, ...props }) =>
    (
      (
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
        ] as const
      ).filter(property => props[property] !== undefined) as string[]
    ).map(property =>
      setProperty({
        property,
        theme,
        value: props[property as keyof BoxProps],
      }),
    )}
`;

export default Box;
