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
import { generateResponsiveDividerDirectionFromResponsiveFlexDirection } from '../Divider';
import { StackBaseProps, StackProps } from './types';
import { injectStackHelpers } from './utils';

const StackBase = styled.div<StackBaseProps>`
  ${injectLayoutHelpers}
  ${injectVisuallyHiddenHelper}
  ${injectStackHelpers}
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
