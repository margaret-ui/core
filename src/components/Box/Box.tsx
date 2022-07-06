import styled from 'styled-components';
import { BoxProps } from './types';
import { injectLayoutHelpers, injectVisuallyHiddenHelper } from './utils';

const Box = styled.div<BoxProps>`
  ${injectLayoutHelpers}
  ${injectVisuallyHiddenHelper}
`;

export default Box;
