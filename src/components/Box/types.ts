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
  paddingY?: ResponsiveSpacing;
  paddingX?: ResponsiveSpacing;
  paddingTop?: ResponsiveSpacing;
  paddingRight?: ResponsiveSpacing;
  paddingBottom?: ResponsiveSpacing;
  paddingLeft?: ResponsiveSpacing;
  paddingBlock?: ResponsiveSpacing;
  paddingBlockStart?: ResponsiveSpacing;
  paddingBlockEnd?: ResponsiveSpacing;
  paddingInline?: ResponsiveSpacing;
  paddingInlineStart?: ResponsiveSpacing;
  paddingInlineEnd?: ResponsiveSpacing;

  margin?: ResponsiveSpacing;
  marginVertical?: ResponsiveSpacing;
  marginHorizontal?: ResponsiveSpacing;
  marginY?: ResponsiveSpacing;
  marginX?: ResponsiveSpacing;
  marginTop?: ResponsiveSpacing;
  marginRight?: ResponsiveSpacing;
  marginBottom?: ResponsiveSpacing;
  marginLeft?: ResponsiveSpacing;
  marginAuto?: ResponsiveSpacing;
  marginBlock?: ResponsiveSpacing;
  marginBlockStart?: ResponsiveSpacing;
  marginBlockEnd?: ResponsiveSpacing;
  marginInline?: ResponsiveSpacing;
  marginInlineStart?: ResponsiveSpacing;
  marginInlineEnd?: ResponsiveSpacing;

  gap?: ResponsiveSpacing;

  color?: string;
  backgroundColor?: string;
  background?: string;
  backgroundImage?: string;

  flex?: Property.Flex;
  flexGrow?: Property.FlexGrow;
  flexShrink?: Property.FlexShrink;
  flexBasis?: Property.FlexBasis;
  flexWrap?: Property.FlexWrap;
  order?: Property.Order;

  width?: Property.Width;
  height?: Property.Height;
  minWidth?: Property.MinWidth;
  minHeight?: Property.MinHeight;

  overflow?: Property.Overflow;
  overflowX?: Property.Overflow;
  overflowY?: Property.Overflow;

  fontFamily?: Property.FontFamily | any;
  fontStretch?: Property.FontStretch | any;
  fontVariant?: Property.FontVariant | any;
  fontWeight?: Property.FontWeight | any;
  fontStyle?: Property.FontStyle | any;
  fontSize?: Property.FontSize | any;
  letterSpacing?: Property.LetterSpacing;
  lineHeight?: Property.LineHeight | any;
  textAlign?: Property.TextAlign | any;
  textDecoration?: Property.TextDecoration | any;
  textTransform?: Property.TextTransform | any;
  textShadow?: Property.TextShadow | any;
  fontStyles?: any;
  textStyle?: any;

  boxShadow?: Property.BoxShadow | string;
  borderRadius?: Property.BorderRadius | string;

  gridArea?: Property.GridArea;
  gridColumnStart?: Property.GridColumnStart;
  gridColumnEnd?: Property.GridColumnEnd;
  gridRowStart?: Property.GridRowStart;
  gridRowEnd?: Property.GridRowEnd;
  gridColumn?: Property.GridColumn;
  gridRow?: Property.GridRow;
  gridAutoFlow?: Property.GridAutoFlow;
  gridAutoRows?: Property.GridAutoRows;
  gridAutoColumns?: Property.GridAutoColumns;
  gridTemplateRows?: Property.GridTemplateRows;
  gridTemplateColumns?: Property.GridTemplateColumns;
  gridTemplateAreas?: Property.GridTemplateAreas;

  transition?: Property.Transition;
  transform?: Property.Transform;

  visuallyHidden?: boolean;

  as?: any;
};
