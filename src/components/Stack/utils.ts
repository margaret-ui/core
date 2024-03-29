import { css, DefaultTheme } from 'styled-components';
import { Property } from 'csstype';
import {
  find,
  findIndex,
  isPlainObject,
  orderBy,
  entries,
  upperFirst,
} from 'lodash-es';
import { setProperty } from '../../utils';
import { Breakpoint, Responsive } from '../../types';
import { StackProps } from './types';

export const generateAlign = ({
  value,
  direction,
  theme,
  property,
  breakpoint,
}: {
  breakpoint: string;
  property: string;
  direction: {
    [key in Breakpoint]: Property.FlexDirection;
  };
  theme: DefaultTheme;
  value: { [key: string]: Property.AlignItems | Property.JustifyContent };
}) => {
  if (breakpoint === 'default') {
    return (direction?.['default'] || 'row') === 'row'
      ? property === 'alignX'
        ? css`
            justify-content: ${value?.default};
          `
        : css`
            align-items: ${value?.default};
          `
      : property === 'alignX'
      ? css`
          align-items: ${value?.default};
        `
      : css`
          justify-content: ${value?.default};
        `;
  }

  const breakpointSize = theme.breakpoints?.[breakpoint as Breakpoint];
  const sortedBreakpoints = entries(theme.breakpoints)
    .sort((a, b) => b[1] - a[1])
    .filter(breakpoint => breakpoint[1] <= (breakpointSize || 0));

  const directionBreakpoint =
    sortedBreakpoints.filter(
      breakpoint => direction?.[breakpoint?.[0] as Breakpoint] !== undefined,
    )?.[0]?.[0] || 'default';

  const alignBreakpoint =
    sortedBreakpoints.filter(
      breakpoint => value?.[breakpoint?.[0]] !== undefined,
    )?.[0]?.[0] || 'default';

  return (direction?.[directionBreakpoint as Breakpoint] || 'row') === 'row'
    ? property === 'alignX'
      ? css`
          justify-content: ${value?.[alignBreakpoint]};
        `
      : css`
          align-items: ${value?.[alignBreakpoint]};
        `
    : property === 'alignX'
    ? css`
        align-items: ${value?.[alignBreakpoint]};
      `
    : css`
        justify-content: ${value?.[alignBreakpoint]};
      `;
};

export const generateAligns = ({
  value,
  direction,
  theme,
  property,
}: {
  value: Responsive<Property.AlignItems | Property.JustifyContent>;
  direction: Responsive<Property.FlexDirection>;
  theme: DefaultTheme;
  property: 'alignX' | 'alignY';
}) => {
  const correctedValue = (isPlainObject(value)
    ? value
    : { default: value }) as any;
  const correctedDirection = (isPlainObject(direction)
    ? direction
    : { default: direction }) as {
    [key in Breakpoint]: Property.FlexDirection;
  };

  return css`
    ${generateAlign({
      breakpoint: 'default',
      value: correctedValue,
      direction: correctedDirection,
      theme,
      property,
    })}

    ${[...new Set(Object.keys(value).concat(Object.keys(direction)))]
      .sort(
        (breakpointA, breakpointB) =>
          (theme.breakpoints?.[breakpointA as Breakpoint] || 0) -
          (theme.breakpoints?.[breakpointB as Breakpoint] || 0),
      )
      .filter(
        breakpoint => breakpoint !== 'default' && theme.media?.[breakpoint],
      )
      .map(
        breakpoint => theme.media[breakpoint as Breakpoint]`
          ${generateAlign({
            value: correctedValue,
            breakpoint,
            direction: correctedDirection,
            theme,
            property,
          })}
        `,
      )}
  `;
};

export const getStackGapSideFromDirection = (
  direction?: Property.FlexDirection,
) => {
  switch (direction) {
    case 'column':
      return 'top';
    case 'column-reverse':
      return 'bottom';
    case 'row-reverse':
      return 'right';
    case 'row':
    default:
      return 'left';
  }
};

export const generateStackMargin = ({
  theme,
  gap,
  direction,
}: {
  theme: DefaultTheme;
  gap: any;
  direction: Responsive<Property.FlexDirection>;
}) => {
  if (hasFlexGapSupport()) {
    return setProperty({
      theme,
      property: 'gap',
      value: gap,
    });
  }

  if (typeof direction === 'string') {
    return css`
      > * + * {
        ${setProperty({
          theme,
          property:
            'margin' + upperFirst(getStackGapSideFromDirection(direction)),
          value: gap,
        })};
      }
    `;
  }

  if (!isPlainObject(direction)) {
    return '';
  }

  const orderedBreakpoints = [
    { breakpoint: 'default', value: 0 },
    ...orderBy(
      Object.keys(theme.breakpoints ?? {}).map(breakpoint => ({
        breakpoint,
        value: theme.breakpoints?.[breakpoint as Breakpoint],
      })),
      'value',
      'asc',
    ),
  ]
    .map(({ breakpoint }) => breakpoint)
    .reverse();

  return css`
    > * + * {
      ${setProperty({
        theme,
        property:
          'margin' +
          upperFirst(getStackGapSideFromDirection(direction?.default)),
        value: typeof gap !== 'number' ? gap?.default : gap,
      })}
    }

    ${[...new Set([...Object.keys(gap), ...Object.keys(direction)])]
      .sort(
        (breakpointA, breakpointB) =>
          (theme.breakpoints?.[breakpointA as Breakpoint] || 0) -
          (theme.breakpoints?.[breakpointB as Breakpoint] || 0),
      )
      .filter(
        breakpoint => breakpoint !== 'default' && theme.media?.[breakpoint],
      )
      .map(breakpoint => {
        const closestDirectionBreakpoint = find(
          orderBy(Object.keys(direction), targetBreakpoint =>
            findIndex(
              orderedBreakpoints,
              breakpoint => breakpoint === targetBreakpoint,
            ),
          ),
          directionBreakpoint =>
            orderedBreakpoints.indexOf(directionBreakpoint) >=
            orderedBreakpoints.indexOf(breakpoint),
        );
        const closestGapBreakpoint = find(
          orderBy(Object.keys(gap), targetBreakpoint =>
            findIndex(
              orderedBreakpoints,
              breakpoint => breakpoint === targetBreakpoint,
            ),
          ),
          gapBreakpoint =>
            orderedBreakpoints.indexOf(gapBreakpoint) >=
            orderedBreakpoints.indexOf(breakpoint),
        );

        return theme.media[breakpoint as Breakpoint]`
          > * + * {
            ${setProperty({
              theme,
              property: 'margin',
              value: 'unset',
            })}

            ${setProperty({
              theme,
              property:
                'margin' +
                upperFirst(
                  getStackGapSideFromDirection(
                    direction[closestDirectionBreakpoint as Breakpoint],
                  ),
                ),
              value: isPlainObject(gap)
                ? gap?.[closestGapBreakpoint as string]
                : gap,
            })}
          }
        `;
      })}
  `;
};

export const hasFlexGapSupport = () => {
  if (typeof window === 'undefined') {
    return true;
  }

  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode?.removeChild(flex);

  return isSupported;
};

export const injectStackHelpers = css<StackProps>`
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
    generateAligns({
      value: alignX,
      direction: direction as Responsive<Property.FlexDirection>,
      theme,
      property: 'alignX',
    })}

  ${({ alignY, direction, theme }) =>
    alignY !== undefined &&
    generateAligns({
      value: alignY,
      direction: direction as Responsive<Property.FlexDirection>,
      theme,
      property: 'alignY',
    })}
`;
