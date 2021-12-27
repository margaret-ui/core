import styled, { css } from 'styled-components';
import { find, findIndex, isPlainObject, keys, orderBy } from 'lodash';
import { setProperty, entries, upperFirst } from '../utils';
import Box from './Box';

const generateAlign = ({ value, direction, theme, property, breakpoint }) => {
  if (breakpoint === 'default') {
    return (direction?.default || 'row') === 'row'
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

  const breakpointSize = theme.breakpoints?.[breakpoint];
  const sortedBreakpoints = entries(theme.breakpoints)
    .sort((a, b) => b[1] - a[1])
    .filter(breakpoint => breakpoint[1] <= breakpointSize);
  const directionBreakpoint =
    sortedBreakpoints.filter(
      breakpoint => direction?.[breakpoint?.[0]] !== undefined,
    )?.[0]?.[0] || 'default';
  const alignBreakpoint =
    sortedBreakpoints.filter(
      breakpoint => value?.[breakpoint?.[0]] !== undefined,
    )?.[0]?.[0] || 'default';

  return (direction?.[directionBreakpoint] || 'row') === 'row'
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

const generateAligns = ({ value, direction, theme, property }) => {
  if (!isPlainObject(value)) {
    value = { default: value };
  }
  if (!isPlainObject(direction)) {
    direction = { default: direction };
  }

  return css`
    ${generateAlign({
      breakpoint: 'default',
      value,
      direction,
      theme,
      property,
    })}
    ${[...new Set(keys(value).concat(keys(direction)))]
      .sort(
        (breakpointA, breakpointB) =>
          theme.breakpoints?.[breakpointA] - theme.breakpoints?.[breakpointB],
      )
      .filter(
        breakpoint =>
          breakpoint !== 'default' && Boolean(theme.media?.[breakpoint]),
      )
      .map(
        breakpoint => theme.media[breakpoint]`
          ${generateAlign({
            value,
            breakpoint,
            direction,
            theme,
            property,
          })}
        `,
      )}
  `;
};

const getStackGapSideFromDirection = direction => {
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

const generateStackMargin = ({ theme, gap, direction }) => {
  if (typeof direction === 'string') {
    return setProperty({
      theme,
      property: 'margin' + upperFirst(getStackGapSideFromDirection(direction)),
      value: gap,
    });
  }

  if (!isPlainObject(direction)) {
    return;
  }

  const orderedBreakpoints = [
    { breakpoint: 'default', value: 0 },
    ...orderBy(
      keys(theme.breakpoints ?? {}).map(breakpoint => ({
        breakpoint,
        value: theme.breakpoints?.[breakpoint],
      })),
      'value',
      'asc',
    ),
  ]
    .map(({ breakpoint }) => breakpoint)
    .reverse();

  return css`
    ${setProperty({
      theme,
      property:
        'margin' + upperFirst(getStackGapSideFromDirection(direction?.default)),
      value: isPlainObject(gap) ? gap?.default : gap,
    })}

    ${[...new Set(keys(gap).concat(keys(direction)))]
      .sort(
        (breakpointA, breakpointB) =>
          theme.breakpoints?.[breakpointA] - theme.breakpoints?.[breakpointB],
      )
      .filter(
        breakpoint =>
          breakpoint !== 'default' && Boolean(theme.media?.[breakpoint]),
      )
      .map(breakpoint => {
        const closestDirectionBreakpoint = find(
          orderBy(keys(direction), targetBreakpoint =>
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
          orderBy(keys(gap), targetBreakpoint =>
            findIndex(
              orderedBreakpoints,
              breakpoint => breakpoint === targetBreakpoint,
            ),
          ),
          gapBreakpoint =>
            orderedBreakpoints.indexOf(gapBreakpoint) >=
            orderedBreakpoints.indexOf(breakpoint),
        );
        return theme.media[breakpoint]`
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
                  direction[closestDirectionBreakpoint],
                ),
              ),
            value: isPlainObject(gap) ? gap?.[closestGapBreakpoint] : gap,
          })}
        `;
      })}
  `;
};

const Stack = styled(Box)`
  display: flex;
  list-style-type: none;
  ${({ wrap }) =>
    wrap === 'wrap' &&
    css`
      flex-wrap: wrap;
    `}

  ${({ gap, gutterSize, theme, direction }) =>
    (gap !== undefined || gutterSize !== undefined) &&
    css`
      > * + * {
        ${generateStackMargin({
          theme,
          gap: gap || gutterSize,
          direction: direction || 'row',
        })};
      }
    `}

  ${({ theme, direction }) =>
    Boolean(direction) &&
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

export default Stack;
