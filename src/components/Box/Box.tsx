import styled from 'styled-components';
import { BoxProps } from './types';
import {
  injectLayoutHelpers,
  injectVisuallyHiddenHelper,
  layoutProps,
} from './utils';

const Box = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !layoutProps.includes(prop) && defaultValidatorFn(prop),
})<BoxProps>`
  ${injectLayoutHelpers}
  ${injectVisuallyHiddenHelper}
`;

export default Box;
