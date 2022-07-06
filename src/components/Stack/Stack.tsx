import {
  Children,
  FC,
  Fragment,
  useMemo,
  cloneElement,
  ReactElement,
} from 'react';
import styled from 'styled-components';
import { injectLayoutHelpers, injectVisuallyHiddenHelper } from '../Box';
import { generateAligns, generateStackMargin } from './utils';
import { setProperty } from '../../utils';
import { generateResponsiveDividerDirectionFromResponsiveFlexDirection } from '../Divider';
import { StackBaseProps, StackProps } from './types';

const StackBase = styled.div<StackBaseProps>`
  display: flex;
  list-style-type: none;

  ${injectLayoutHelpers}
  ${injectVisuallyHiddenHelper}

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
