import { ReactElement } from 'react';
import { Property } from 'csstype';
import { BoxProps } from '../Box';
import {
  ResponsiveAlignItemsOrJustifyContent,
  ResponsiveFlexDirection,
  ResponsiveSpacing,
} from '../../types';

export type StackBaseProps = BoxProps & {
  wrap?: Property.FlexWrap;
  gap?: ResponsiveSpacing;
  direction?: ResponsiveFlexDirection;
  alignX?: ResponsiveAlignItemsOrJustifyContent;
  alignY?: ResponsiveAlignItemsOrJustifyContent;
};

export type StackProps = StackBaseProps & {
  divider?: ReactElement;
} & any;
