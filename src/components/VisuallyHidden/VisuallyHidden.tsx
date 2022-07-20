import { FC } from 'react';
import * as RadixVisuallyHidden from '@radix-ui/react-visually-hidden';
import { VisuallyHiddenProps } from './types';

export const VisuallyHidden: FC<VisuallyHiddenProps> = ({ children }) => (
  <RadixVisuallyHidden.Root>{children}</RadixVisuallyHidden.Root>
);
