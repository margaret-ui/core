import { ReactElement } from 'react';
import { Property } from 'csstype';
import { BoxProps } from '../Box';
import { Responsive, ResponsiveSpacing } from '../../types';

export type StackBaseProps = BoxProps & {
  wrap?: Property.FlexWrap;
  gap?: ResponsiveSpacing;
  direction?: Responsive<Property.FlexDirection>;
  alignX?: Responsive<Property.AlignItems | Property.JustifyContent>;
  alignY?: Responsive<Property.AlignItems | Property.JustifyContent>;
};

export type StackProps = StackBaseProps & {
  divider?: ReactElement;
};
