import { Property } from 'csstype';
import { ResponsiveSpacing } from '../../types';

export type BoxProps = {
  display?: Property.Display;

  position?: Property.Position;
  top?: Property.Position;
  right?: Property.Position;
  bottom?: Property.Position;
  left?: Property.Position;

  padding?: ResponsiveSpacing;
  paddingVertical?: ResponsiveSpacing;
  paddingHorizontal?: ResponsiveSpacing;
  paddingTop?: ResponsiveSpacing;
  paddingRight?: ResponsiveSpacing;
  paddingBottom?: ResponsiveSpacing;
  paddingLeft?: ResponsiveSpacing;

  margin?: ResponsiveSpacing;
  marginVertical?: ResponsiveSpacing;
  marginHorizontal?: ResponsiveSpacing;
  marginTop?: ResponsiveSpacing;
  marginRight?: ResponsiveSpacing;
  marginBottom?: ResponsiveSpacing;
  marginLeft?: ResponsiveSpacing;
  marginAuto?: ResponsiveSpacing;

  gap?: ResponsiveSpacing;

  color?: string;
  backgroundColor?: string;
  background?: string;
  backgroundImage?: string;

  flex?: Property.Flex;
  flexGrow?: Property.FlexGrow;
  flexShrink?: Property.FlexShrink;
  flexBasis?: Property.FlexBasis;
  order?: Property.Order;

  width?: Property.Width;
  height?: Property.Height;
  minWidth?: Property.MinWidth;
  minHeight?: Property.MinHeight;

  overflow?: Property.Overflow;
  overflowX?: Property.Overflow;
  overflowY?: Property.Overflow;

  textAlign?: Property.TextAlign;
  textDecoration?: Property.TextDecoration;
  fontWeight?: Property.FontWeight;
  fontStyle?: Property.FontStyle;

  boxShadow?: Property.BoxShadow | string;
  borderRadius?: Property.BorderRadius | string;

  gridArea?: Property.GridArea;
  gridColumnStart?: Property.GridColumnStart;
  gridColumnEnd?: Property.GridColumnEnd;
  gridRowStart?: Property.GridRowStart;
  gridRowEnd?: Property.GridRowEnd;

  transition?: Property.Transition;
  transform?: Property.Transform;
};
