import {
  Children,
  FC,
  Fragment,
  useMemo,
  cloneElement,
  ReactElement,
  forwardRef,
} from 'react';
import styled from 'styled-components';
import {
  injectLayoutHelpers,
  injectVisuallyHiddenHelper,
  layoutProps,
} from '../Box';
import { generateResponsiveDividerDirectionFromResponsiveFlexDirection } from '../Divider';
import { StackBaseProps, StackProps } from './types';
import { injectStackHelpers } from './utils';

const StackBase = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !layoutProps.includes(prop) && defaultValidatorFn(prop),
})<StackBaseProps>`
  ${injectLayoutHelpers}
  ${injectVisuallyHiddenHelper}
  ${injectStackHelpers}
`;

const Stack: FC<StackProps> = forwardRef(
  ({ children, divider, direction = 'row', ...props }, ref) => {
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
      <StackBase direction={direction} {...props} ref={ref}>
        {childrenArray.map((child, index) => (
          <Fragment key={index}>
            {child}
            {hasDivider && index < childrenArray.length - 1 && augmentedDivider}
          </Fragment>
        ))}
      </StackBase>
    );
  },
);

export default Stack;
