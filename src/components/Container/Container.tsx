import styled from 'styled-components';
import { ContainerProps } from './types';

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: ${({ theme }) => theme.container?.sizes?.default};
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme }) => theme.spacing(1)};

  ${({ theme }) =>
    theme?.media?.tablet &&
    `
      padding: ${theme.spacing(2)};
    `};

  ${({ size, theme }) =>
    size &&
    theme?.container?.sizes?.[size] &&
    `
      width: ${theme?.container?.sizes?.[size]};
    `};
`;

export default Container;
