import styled from 'styled-components';
import { layoutProps } from '../Box';
import { injectButtonResetStyles } from './utils';

const ButtonReset = styled.button.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !layoutProps.includes(prop) && defaultValidatorFn(prop),
})`
  ${injectButtonResetStyles}
`;

export default ButtonReset;
