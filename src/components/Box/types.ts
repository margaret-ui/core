import { Property } from 'csstype';
import { Responsive, Spacing } from '../../types';
import { ReactNode } from 'react';

export type BoxProps = {
  children: ReactNode;

  display?: Responsive<Property.Display>;

  position?: Responsive<Property.Position>;
  top?: Responsive<Property.Top>;
  right?: Responsive<Property.Right>;
  bottom?: Responsive<Property.Bottom>;
  left?: Responsive<Property.Left>;
  inset?: Responsive<Property.Inset>;

  border?: Responsive<Property.Border>;
  borderBlock?: Responsive<Property.BorderBlock>;
  borderBlockColor?: Responsive<Property.BorderBlockColor>;
  borderBlockEnd?: Responsive<Property.BorderBlockEnd>;
  borderBlockEndColor?: Responsive<Property.BorderBlockEndColor>;
  borderBlockEndStyle?: Responsive<Property.BorderBlockEndStyle>;
  borderBlockEndWidth?: Responsive<Property.BorderBlockEndWidth>;
  borderBlockStart?: Responsive<Property.BorderBlockStart>;
  borderBlockStartColor?: Responsive<Property.BorderBlockStartColor>;
  borderBlockStartStyle?: Responsive<Property.BorderBlockStartStyle>;
  borderBlockStartWidth?: Responsive<Property.BorderBlockStartWidth>;
  borderBlockStyle?: Responsive<Property.BorderBlockStyle>;
  borderBlockWidth?: Responsive<Property.BorderBlockWidth>;
  borderBottom?: Responsive<Property.BorderBottom>;
  borderBottomColor?: Responsive<Property.BorderBottomColor>;
  borderBottomLeftRadius?: Responsive<Property.BorderBottomLeftRadius>;
  borderBottomRightRadius?: Responsive<Property.BorderBottomRightRadius>;
  borderBottomStyle?: Responsive<Property.BorderBottomStyle>;
  borderBottomWidth?: Responsive<Property.BorderBottomWidth>;
  borderCollapse?: Responsive<Property.BorderCollapse>;
  borderColor?: Responsive<Property.BorderColor>;
  borderEndEndRadius?: Responsive<Property.BorderEndEndRadius>;
  borderEndStartRadius?: Responsive<Property.BorderEndStartRadius>;
  borderImage?: Responsive<Property.BorderImage>;
  borderImageOutset?: Responsive<Property.BorderImageOutset>;
  borderImageRepeat?: Responsive<Property.BorderImageRepeat>;
  borderImageSlice?: Responsive<Property.BorderImageSlice>;
  borderImageSource?: Responsive<Property.BorderImageSource>;
  borderImageWidth?: Responsive<Property.BorderImageWidth>;
  borderInline?: Responsive<Property.BorderInline>;
  borderInlineColor?: Responsive<Property.BorderInlineColor>;
  borderInlineEnd?: Responsive<Property.BorderInlineEnd>;
  borderInlineEndColor?: Responsive<Property.BorderInlineEndColor>;
  borderInlineEndStyle?: Responsive<Property.BorderInlineEndStyle>;
  borderInlineEndWidth?: Responsive<Property.BorderInlineEndWidth>;
  borderInlineStart?: Responsive<Property.BorderInlineStart>;
  borderInlineStartColor?: Responsive<Property.BorderInlineStartColor>;
  borderInlineStartStyle?: Responsive<Property.BorderInlineStartStyle>;
  borderInlineStartWidth?: Responsive<Property.BorderInlineStartWidth>;
  borderInlineStyle?: Responsive<Property.BorderInlineStyle>;
  borderInlineWidth?: Responsive<Property.BorderInlineWidth>;
  borderLeft?: Responsive<Property.BorderLeft>;
  borderLeftColor?: Responsive<Property.BorderLeftColor>;
  borderLeftStyle?: Responsive<Property.BorderLeftStyle>;
  borderLeftWidth?: Responsive<Property.BorderLeftWidth>;
  borderRight?: Responsive<Property.BorderRight>;
  borderRightColor?: Responsive<Property.BorderRightColor>;
  borderRightStyle?: Responsive<Property.BorderRightStyle>;
  borderRightWidth?: Responsive<Property.BorderRightWidth>;
  borderSpacing?: Responsive<Property.BorderSpacing>;
  borderStartEndRadius?: Responsive<Property.BorderStartEndRadius>;
  borderStartStartRadius?: Responsive<Property.BorderStartStartRadius>;
  borderStyle?: Responsive<Property.BorderStyle>;
  borderTop?: Responsive<Property.BorderTop>;
  borderTopColor?: Responsive<Property.BorderTopColor>;
  borderTopLeftRadius?: Responsive<Property.BorderTopLeftRadius>;
  borderTopRightRadius?: Responsive<Property.BorderTopRightRadius>;
  borderTopStyle?: Responsive<Property.BorderTopStyle>;
  borderTopWidth?: Responsive<Property.BorderTopWidth>;
  borderWidth?: Responsive<Property.BorderWidth>;

  padding?: Responsive<Spacing>;
  paddingVertical?: Responsive<Spacing>;
  paddingHorizontal?: Responsive<Spacing>;
  paddingY?: Responsive<Spacing>;
  paddingX?: Responsive<Spacing>;
  paddingTop?: Responsive<Spacing>;
  paddingRight?: Responsive<Spacing>;
  paddingBottom?: Responsive<Spacing>;
  paddingLeft?: Responsive<Spacing>;
  paddingBlock?: Responsive<Spacing>;
  paddingBlockStart?: Responsive<Spacing>;
  paddingBlockEnd?: Responsive<Spacing>;
  paddingInline?: Responsive<Spacing>;
  paddingInlineStart?: Responsive<Spacing>;
  paddingInlineEnd?: Responsive<Spacing>;

  margin?: Responsive<Spacing>;
  marginVertical?: Responsive<Spacing>;
  marginHorizontal?: Responsive<Spacing>;
  marginY?: Responsive<Spacing>;
  marginX?: Responsive<Spacing>;
  marginTop?: Responsive<Spacing>;
  marginRight?: Responsive<Spacing>;
  marginBottom?: Responsive<Spacing>;
  marginLeft?: Responsive<Spacing>;
  marginAuto?: Responsive<Spacing>;
  marginBlock?: Responsive<Spacing>;
  marginBlockStart?: Responsive<Spacing>;
  marginBlockEnd?: Responsive<Spacing>;
  marginInline?: Responsive<Spacing>;
  marginInlineStart?: Responsive<Spacing>;
  marginInlineEnd?: Responsive<Spacing>;

  gap?: Responsive<Spacing>;

  color?: string;
  backgroundColor?: string;
  background?: string;
  backgroundImage?: string;

  flex?: Responsive<Property.Flex>;
  flexGrow?: Responsive<Property.FlexGrow>;
  flexShrink?: Responsive<Property.FlexShrink>;
  flexBasis?: Responsive<Property.FlexBasis>;
  flexWrap?: Responsive<Property.FlexWrap>;
  order?: Responsive<Property.Order>;

  width?: Responsive<Property.Width>;
  height?: Responsive<Property.Height>;
  minWidth?: Responsive<Property.MinWidth>;
  minHeight?: Responsive<Property.MinHeight>;

  overflow?: Responsive<Property.Overflow>;
  overflowX?: Responsive<Property.Overflow>;
  overflowY?: Responsive<Property.Overflow>;

  fontFamily?: Responsive<Property.FontFamily> | any;
  fontStretch?: Responsive<Property.FontStretch> | any;
  fontVariant?: Responsive<Property.FontVariant> | any;
  fontWeight?: Responsive<Property.FontWeight> | any;
  fontStyle?: Responsive<Property.FontStyle> | any;
  fontSize?: Responsive<Property.FontSize> | any;
  letterSpacing?: Responsive<Property.LetterSpacing>;
  lineHeight?: Responsive<Property.LineHeight> | any;
  textAlign?: Responsive<Property.TextAlign> | any;
  textDecoration?: Responsive<Property.TextDecoration> | any;
  textTransform?: Responsive<Property.TextTransform> | any;
  textShadow?: Responsive<Property.TextShadow> | any;

  fontStyles?: any;
  textStyle?: any;

  boxShadow?: Responsive<Property.BoxShadow> | string;
  borderRadius?: Responsive<Property.BorderRadius> | string;

  gridArea?: Responsive<Property.GridArea>;
  gridColumnStart?: Responsive<Property.GridColumnStart>;
  gridColumnEnd?: Responsive<Property.GridColumnEnd>;
  gridRowStart?: Responsive<Property.GridRowStart>;
  gridRowEnd?: Responsive<Property.GridRowEnd>;
  gridColumn?: Responsive<Property.GridColumn>;
  gridRow?: Responsive<Property.GridRow>;
  gridAutoFlow?: Responsive<Property.GridAutoFlow>;
  gridAutoRows?: Responsive<Property.GridAutoRows>;
  gridAutoColumns?: Responsive<Property.GridAutoColumns>;
  gridTemplateRows?: Responsive<Property.GridTemplateRows>;
  gridTemplateColumns?: Responsive<Property.GridTemplateColumns>;
  gridTemplateAreas?: Responsive<Property.GridTemplateAreas>;

  transition?: Responsive<Property.Transition>;
  transform?: Responsive<Property.Transform>;

  zIndex?: Responsive<Property.ZIndex | string>;
  visuallyHidden?: boolean;

  gridGap?: Responsive<Property.GridGap | string>;
  gridRowGap?: Responsive<Property.GridRowGap | string>;
  gridColumnGap?: Responsive<Property.GridColumnGap | string>;

  maxWidth?: Responsive<Property.MaxWidth | string>;
  maxHeight?: Responsive<Property.MaxHeight | string>;

  flexDirection?: Responsive<Property.FlexDirection>;
  flexFlow?: Responsive<Property.FlexFlow>;
  alignSelf?: Responsive<Property.AlignSelf>;
  alignItems?: Responsive<Property.AlignItems>;
  justifyContent?: Responsive<Property.JustifyContent>;
  justifySelf?: Responsive<Property.JustifySelf>;
  placeItems?: Responsive<Property.PlaceItems>;
  placeContent?: Responsive<Property.PlaceContent>;
  placeSelf?: Responsive<Property.PlaceSelf>;
  objectFit?: Responsive<Property.ObjectFit>;
  objectPosition?: Responsive<Property.ObjectPosition>;
  opacity?: Responsive<Property.Opacity>;
  grid?: Responsive<Property.Grid>;
  outline?: Responsive<Property.Outline>;
  outlineColor?: Responsive<Property.OutlineColor>;
  outlineOffset?: Responsive<Property.OutlineOffset>;
  outlineStyle?: Responsive<Property.OutlineStyle>;
  whiteSpace?: Responsive<Property.WhiteSpace>;
  wordBreak?: Responsive<Property.WordBreak>;
  wordWrap?: Responsive<Property.WordWrap>;
  textOverflow?: Responsive<Property.TextOverflow>;
  cursor?: Responsive<Property.Cursor>;
  clipPath?: Responsive<Property.ClipPath>;
  backgroundOrigin?: Responsive<Property.BackgroundOrigin>;
  backgroundPosition?: Responsive<Property.BackgroundPosition>;
  backgroundPositionX?: Responsive<Property.BackgroundPositionX>;
  backgroundPositionY?: Responsive<Property.BackgroundPositionY>;
  backgroundRepeat?: Responsive<Property.BackgroundRepeat>;
  backgroundSize?: Responsive<Property.BackgroundSize>;
  backdropFilter?: Responsive<Property.BackdropFilter>;
  backfaceVisibility?: Responsive<Property.BackfaceVisibility>;
  backgroundAttachment?: Responsive<Property.BackgroundAttachment>;
  backgroundBlendMode?: Responsive<Property.BackgroundBlendMode>;
  backgroundClip?: Responsive<Property.BackgroundClip>;
  accentColor?: Responsive<Property.AccentColor>;
  colorScheme?: Responsive<Property.ColorScheme>;
  alignContent?: Responsive<Property.AlignContent>;
  animation?: Responsive<Property.Animation>;
  animationDelay?: Responsive<Property.AnimationDelay>;
  animationDirection?: Responsive<Property.AnimationDirection>;
  animationDuration?: Responsive<Property.AnimationDuration>;
  animationFillMode?: Responsive<Property.AnimationFillMode>;
  animationIterationCount?: Responsive<Property.AnimationIterationCount>;
  animationName?: Responsive<Property.AnimationName>;
  animationPlayState?: Responsive<Property.AnimationPlayState>;
  animationTimingFunction?: Responsive<Property.AnimationTimingFunction>;
  appearance?: Responsive<Property.Appearance>;
  aspectRatio?: Responsive<Property.AspectRatio>;
  all?: Responsive<Property.All>;
  willChange?: Responsive<Property.WillChange>;
  mask?: Responsive<Property.Mask>;
  maskBorder?: Responsive<Property.MaskBorder>;
  maskBorderMode?: Responsive<Property.MaskBorderMode>;
  maskBorderOutset?: Responsive<Property.MaskBorderOutset>;
  maskBorderRepeat?: Responsive<Property.MaskBorderRepeat>;
  maskBorderSlice?: Responsive<Property.MaskBorderSlice>;
  maskBorderSource?: Responsive<Property.MaskBorderSource>;
  maskBorderWidth?: Responsive<Property.MaskBorderWidth>;
  maskClip?: Responsive<Property.MaskClip>;
  maskComposite?: Responsive<Property.MaskComposite>;
  maskImage?: Responsive<Property.MaskImage>;
  maskMode?: Responsive<Property.MaskMode>;
  maskOrigin?: Responsive<Property.MaskOrigin>;
  maskPosition?: Responsive<Property.MaskPosition>;
  maskRepeat?: Responsive<Property.MaskRepeat>;
  maskSize?: Responsive<Property.MaskSize>;
  maskType?: Responsive<Property.MaskType>;

  as?: any;
};
