import styled, { css } from 'styled-components';
import { SpacingHelper } from '../../types';
import { setProperty } from '../../utils';
import { injectLayoutHelpers, layoutProps } from '../Box';
import { ContainerProps } from './types';

const Container = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !layoutProps.includes(prop) && defaultValidatorFn(prop),
})<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.container?.sizes?.default};
  margin-left: auto;
  margin-right: auto;

  ${({ size, theme }) =>
    size &&
    theme?.container?.sizes?.[size] &&
    `
      max-width: ${theme?.container?.sizes?.[size]};
    `};

  ${injectLayoutHelpers}

  ${({ theme, paddingX, paddingHorizontal }) =>
    setProperty({
      property: 'paddingX',
      theme,
      value: paddingX || paddingHorizontal || theme?.container?.paddingX,
    })}
`;

export default Container;
