import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import { DividerProps } from './types';
import { BreakpointDividerDirection, DividerDirection } from './utils';
import { Breakpoint } from '../../types';

const generateResponsiveBorder = ({
  theme,
  direction = 'horizontal',
}: DividerProps & { theme: DefaultTheme }): FlattenInterpolation<
  ThemeProps<DefaultTheme>
> => {
  if (typeof direction === 'string') {
    switch (direction) {
      case 'vertical': {
        return css`
          width: auto;
          align-self: stretch;
          border-left-width: ${({ theme }) => theme.divider?.borderWidth};
          border-bottom-width: 0;
        `;
      }
      case 'horizontal':
      default:
        return css`
          width: 100%;
          align-self: unset;
          border-left-width: 0;
          border-bottom-width: ${({ theme }) => theme.divider?.borderWidth};
        `;
    }
  }

  return css`
    ${generateResponsiveBorder({
      theme,
      direction: ((direction as BreakpointDividerDirection)?.default ||
        'horizontal') as DividerDirection,
    })};

    ${Object.keys(direction as Breakpoint)
      .filter(
        breakpoint =>
          breakpoint !== 'default' && theme.media?.[breakpoint as Breakpoint],
      )
      .map(
        breakpoint => theme.media[breakpoint as Breakpoint]`
        ${({ theme }: { theme: DefaultTheme }) =>
          generateResponsiveBorder({
            theme,
            direction: direction?.[breakpoint] as DividerDirection,
          })}
      `,
      )}
  `;
};

const Divider = styled.div.attrs({
  role: 'separator',
})<DividerProps>`
  border: none;
  border-width: 0;
  border-style: solid;
  border-color: ${({ theme }) => theme.divider?.borderColor};
  height: auto;
  margin: 0;

  ${generateResponsiveBorder}
}
`;

export default Divider;
