import { FC } from 'react';
import { Box, BoxProps } from '../Box';

export const VisuallyHidden: FC<BoxProps> = ({ children, ...props }) => (
  <Box {...props} visuallyHidden>
    {children}
  </Box>
);
