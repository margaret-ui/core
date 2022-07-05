import {
  Children,
  FC,
  Fragment,
  useMemo,
  cloneElement,
  ReactElement,
} from 'react';
import { Property } from 'csstype';
import styled from 'styled-components';
import { Box, BoxProps } from '../Box';
import { generateAligns, generateStackMargin } from './utils';
import { setProperty } from '../../utils';
import {
  ResponsiveAlignItemsOrJustifyContent,
  ResponsiveFlexDirection,
  ResponsiveSpacing,
} from '../../types';
import { generateResponsiveDividerDirectionFromResponsiveFlexDirection } from '../Divider';

type StackBaseProps = BoxProps & {
  wrap?: Property.FlexWrap;
  gap?: ResponsiveSpacing;
  direction?: ResponsiveFlexDirection;
  alignX?: ResponsiveAlignItemsOrJustifyContent;
  alignY?: ResponsiveAlignItemsOrJustifyContent;
};

type StackProps = StackBaseProps & {
  divider?: ReactElement;
} & any;

const StackBase = styled(Box)<StackBaseProps>`
  display: flex;
  list-style-type: none;

  ${({ gap, theme, direction }) =>
    gap !== undefined &&
    generateStackMargin({
      theme,
      gap,
      direction: direction || 'row',
    })}

  ${({ theme, direction }) =>
    direction &&
    setProperty({
      theme,
      property: 'Direction',
      value: direction,
      prefix: 'flex',
    })}

  ${({ alignX, direction, theme }) =>
    alignX !== undefined &&
    generateAligns({ value: alignX, direction, theme, property: 'alignX' })}

  ${({ alignY, direction, theme }) =>
    alignY !== undefined &&
    generateAligns({ value: alignY, direction, theme, property: 'alignY' })}
`;

const Stack: FC<StackProps> = ({
  children,
  divider,
  direction = 'row',
  ...props
}) => {
  const childrenArray = Children.toArray(children);
  const hasDivider = Boolean(divider);

  const dividerDirection = useMemo(() => {
    return generateResponsiveDividerDirectionFromResponsiveFlexDirection(
      direction,
    );
  }, [direction]);

  const augmentedDivider = useMemo(() => {
    if (!divider) {
      return null;
    }
    return cloneElement(divider as ReactElement, {
      direction: dividerDirection,
    });
  }, [dividerDirection]);

  return (
    <StackBase direction={direction} {...props}>
      {childrenArray.map((child, index) => (
        <Fragment key={index}>
          {child}
          {hasDivider && index < childrenArray.length - 1 && augmentedDivider}
        </Fragment>
      ))}
    </StackBase>
  );
};

export default Stack;
