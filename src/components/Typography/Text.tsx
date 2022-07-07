import { FC } from 'react';
import styled, { useTheme } from 'styled-components';
import {
  injectLayoutHelpers,
  injectVisuallyHiddenHelper,
  BoxProps,
} from '../Box';

export const Text = styled.p<BoxProps>`
  margin-top: 0;
  margin-bottom: 0;

  ${injectLayoutHelpers}
  ${injectVisuallyHiddenHelper}
`;

export const Heading: FC<BoxProps> = ({ as = 'h2', ...props }) => {
  const theme = useTheme();
  const fontStyles = props.fontStyles || theme?.defaultStylesMapping?.[as];

  return <Text as={as} fontStyles={fontStyles} {...props} />;
};
