import {
  Breakpoint,
  FlexDirection,
  ResponsiveFlexDirection,
} from '../../types';

export type DividerDirection = 'horizontal' | 'vertical';

export type BreakpointDividerDirection = {
  [key in Breakpoint]?: DividerDirection;
};

export type ResponsiveDividerDirection = DividerDirection &
  BreakpointDividerDirection;

const generateDividerDirectionFromFlexDirection = (
  flexDirection: FlexDirection,
): DividerDirection => {
  if (flexDirection === 'column') {
    return 'horizontal';
  }

  return 'vertical';
};

export const generateResponsiveDividerDirectionFromResponsiveFlexDirection = (
  flexDirection: ResponsiveFlexDirection,
): ResponsiveDividerDirection => {
  if (typeof flexDirection === 'string') {
    return generateDividerDirectionFromFlexDirection(flexDirection);
  }

  const output = Object.keys(flexDirection).reduce(
    (acc, breakpoint) => ({
      ...acc,
      [breakpoint]: generateDividerDirectionFromFlexDirection(
        flexDirection[breakpoint as Breakpoint] as FlexDirection,
      ),
    }),
    {},
  );

  return output as ResponsiveDividerDirection;
};
