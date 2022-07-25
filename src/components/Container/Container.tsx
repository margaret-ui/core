import styled from 'styled-components';
import { SpacingHelper } from '../../types';
import { injectLayoutHelpers } from '../Box';
import { ContainerProps } from './types';

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: ${({ theme }) => theme.container?.sizes?.default};
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme }) => (theme.spacing as SpacingHelper)(1)};

  ${({ theme }) =>
    theme.media.tablet`
      padding: ${(theme.spacing as SpacingHelper)(2)};
    `};

  ${({ size, theme }) =>
    size &&
    theme?.container?.sizes?.[size] &&
    `
      width: ${theme?.container?.sizes?.[size]};
    `};

  ${injectLayoutHelpers}
`;

export default Container;
