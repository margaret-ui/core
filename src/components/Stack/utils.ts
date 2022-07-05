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
import { Breakpoint, ResponsiveFlexDirection } from '../../types';

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
    .filter(breakpoint => breakpoint[1] <= breakpointSize);

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
  value: any;
  direction: any;
  theme: DefaultTheme;
  property: 'alignX' | 'alignY';
}) => {
  const correctedValue = isPlainObject(value) ? value : { default: value };
  const correctedDirection = isPlainObject(direction)
    ? direction
    : { default: direction };

  return css`
    ${generateAlign({
      breakpoint: 'default',
      value: correctedValue,
      direction,
      theme,
      property,
    })}

    ${[...new Set(Object.keys(value).concat(Object.keys(direction)))]
      .sort(
        (breakpointA, breakpointB) =>
          theme.breakpoints?.[breakpointA as Breakpoint] -
          theme.breakpoints?.[breakpointB as Breakpoint],
      )
      .filter(
        breakpoint => breakpoint !== 'default' && theme.media?.[breakpoint],
      )
      .map(
        breakpoint => theme.media[breakpoint as Breakpoint]`
          ${generateAlign({
            value: correctedValue,
            breakpoint,
            direction,
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
  direction: ResponsiveFlexDirection;
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
          theme.breakpoints?.[breakpointA as Breakpoint] -
          theme.breakpoints?.[breakpointB as Breakpoint],
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
