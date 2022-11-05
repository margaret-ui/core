import { Property } from 'csstype';
import { Breakpoint, ResponsiveSpacing } from '../../types';

export type BoxProps = {
  display?: Property.Display | { [key in Breakpoint]?: Property.Display };

  position?: Property.Position | { [key in Breakpoint]?: Property.Position };
  top?: Property.Top | { [key in Breakpoint]?: Property.Top };
  right?: Property.Right | { [key in Breakpoint]?: Property.Right };
  bottom?: Property.Bottom | { [key in Breakpoint]?: Property.Bottom };
  left?: Property.Left | { [key in Breakpoint]?: Property.Left };
  inset?: Property.Inset | { [key in Breakpoint]?: Property.Inset };

  border?: Property.Border | { [key in Breakpoint]?: Property.Border };
  borderBlock?:
    | Property.BorderBlock
    | { [key in Breakpoint]?: Property.BorderBlock };
  borderBlockColor?:
    | Property.BorderBlockColor
    | { [key in Breakpoint]?: Property.BorderBlockColor };
  borderBlockEnd?:
    | Property.BorderBlockEnd
    | { [key in Breakpoint]?: Property.BorderBlockEnd };
  borderBlockEndColor?:
    | Property.BorderBlockEndColor
    | { [key in Breakpoint]?: Property.BorderBlockEndColor };
  borderBlockEndStyle?:
    | Property.BorderBlockEndStyle
    | { [key in Breakpoint]?: Property.BorderBlockEndStyle };
  borderBlockEndWidth?:
    | Property.BorderBlockEndWidth
    | { [key in Breakpoint]?: Property.BorderBlockEndWidth };
  borderBlockStart?:
    | Property.BorderBlockStart
    | { [key in Breakpoint]?: Property.BorderBlockStart };
  borderBlockStartColor?:
    | Property.BorderBlockStartColor
    | { [key in Breakpoint]?: Property.BorderBlockStartColor };
  borderBlockStartStyle?:
    | Property.BorderBlockStartStyle
    | { [key in Breakpoint]?: Property.BorderBlockStartStyle };
  borderBlockStartWidth?:
    | Property.BorderBlockStartWidth
    | { [key in Breakpoint]?: Property.BorderBlockStartWidth };
  borderBlockStyle?:
    | Property.BorderBlockStyle
    | { [key in Breakpoint]?: Property.BorderBlockStyle };
  borderBlockWidth?:
    | Property.BorderBlockWidth
    | { [key in Breakpoint]?: Property.BorderBlockWidth };
  borderBottom?:
    | Property.BorderBottom
    | { [key in Breakpoint]?: Property.BorderBottom };
  borderBottomColor?:
    | Property.BorderBottomColor
    | { [key in Breakpoint]?: Property.BorderBottomColor };
  borderBottomLeftRadius?:
    | Property.BorderBottomLeftRadius
    | { [key in Breakpoint]?: Property.BorderBottomLeftRadius };
  borderBottomRightRadius?:
    | Property.BorderBottomRightRadius
    | { [key in Breakpoint]?: Property.BorderBottomRightRadius };
  borderBottomStyle?:
    | Property.BorderBottomStyle
    | { [key in Breakpoint]?: Property.BorderBottomStyle };
  borderBottomWidth?:
    | Property.BorderBottomWidth
    | { [key in Breakpoint]?: Property.BorderBottomWidth };
  borderCollapse?:
    | Property.BorderCollapse
    | { [key in Breakpoint]?: Property.BorderCollapse };
  borderColor?:
    | Property.BorderColor
    | { [key in Breakpoint]?: Property.BorderColor };
  borderEndEndRadius?:
    | Property.BorderEndEndRadius
    | { [key in Breakpoint]?: Property.BorderEndEndRadius };
  borderEndStartRadius?:
    | Property.BorderEndStartRadius
    | { [key in Breakpoint]?: Property.BorderEndStartRadius };
  borderImage?:
    | Property.BorderImage
    | { [key in Breakpoint]?: Property.BorderImage };
  borderImageOutset?:
    | Property.BorderImageOutset
    | { [key in Breakpoint]?: Property.BorderImageOutset };
  borderImageRepeat?:
    | Property.BorderImageRepeat
    | { [key in Breakpoint]?: Property.BorderImageRepeat };
  borderImageSlice?:
    | Property.BorderImageSlice
    | { [key in Breakpoint]?: Property.BorderImageSlice };
  borderImageSource?:
    | Property.BorderImageSource
    | { [key in Breakpoint]?: Property.BorderImageSource };
  borderImageWidth?:
    | Property.BorderImageWidth
    | { [key in Breakpoint]?: Property.BorderImageWidth };
  borderInline?:
    | Property.BorderInline
    | { [key in Breakpoint]?: Property.BorderInline };
  borderInlineColor?:
    | Property.BorderInlineColor
    | { [key in Breakpoint]?: Property.BorderInlineColor };
  borderInlineEnd?:
    | Property.BorderInlineEnd
    | { [key in Breakpoint]?: Property.BorderInlineEnd };
  borderInlineEndColor?:
    | Property.BorderInlineEndColor
    | { [key in Breakpoint]?: Property.BorderInlineEndColor };
  borderInlineEndStyle?:
    | Property.BorderInlineEndStyle
    | { [key in Breakpoint]?: Property.BorderInlineEndStyle };
  borderInlineEndWidth?:
    | Property.BorderInlineEndWidth
    | { [key in Breakpoint]?: Property.BorderInlineEndWidth };
  borderInlineStart?:
    | Property.BorderInlineStart
    | { [key in Breakpoint]?: Property.BorderInlineStart };
  borderInlineStartColor?:
    | Property.BorderInlineStartColor
    | { [key in Breakpoint]?: Property.BorderInlineStartColor };
  borderInlineStartStyle?:
    | Property.BorderInlineStartStyle
    | { [key in Breakpoint]?: Property.BorderInlineStartStyle };
  borderInlineStartWidth?:
    | Property.BorderInlineStartWidth
    | { [key in Breakpoint]?: Property.BorderInlineStartWidth };
  borderInlineStyle?:
    | Property.BorderInlineStyle
    | { [key in Breakpoint]?: Property.BorderInlineStyle };
  borderInlineWidth?:
    | Property.BorderInlineWidth
    | { [key in Breakpoint]?: Property.BorderInlineWidth };
  borderLeft?:
    | Property.BorderLeft
    | { [key in Breakpoint]?: Property.BorderLeft };
  borderLeftColor?:
    | Property.BorderLeftColor
    | { [key in Breakpoint]?: Property.BorderLeftColor };
  borderLeftStyle?:
    | Property.BorderLeftStyle
    | { [key in Breakpoint]?: Property.BorderLeftStyle };
  borderLeftWidth?:
    | Property.BorderLeftWidth
    | { [key in Breakpoint]?: Property.BorderLeftWidth };
  borderRight?:
    | Property.BorderRight
    | { [key in Breakpoint]?: Property.BorderRight };
  borderRightColor?:
    | Property.BorderRightColor
    | { [key in Breakpoint]?: Property.BorderRightColor };
  borderRightStyle?:
    | Property.BorderRightStyle
    | { [key in Breakpoint]?: Property.BorderRightStyle };
  borderRightWidth?:
    | Property.BorderRightWidth
    | { [key in Breakpoint]?: Property.BorderRightWidth };
  borderSpacing?:
    | Property.BorderSpacing
    | { [key in Breakpoint]?: Property.BorderSpacing };
  borderStartEndRadius?:
    | Property.BorderStartEndRadius
    | { [key in Breakpoint]?: Property.BorderStartEndRadius };
  borderStartStartRadius?:
    | Property.BorderStartStartRadius
    | { [key in Breakpoint]?: Property.BorderStartStartRadius };
  borderStyle?:
    | Property.BorderStyle
    | { [key in Breakpoint]?: Property.BorderStyle };
  borderTop?: Property.BorderTop | { [key in Breakpoint]?: Property.BorderTop };
  borderTopColor?:
    | Property.BorderTopColor
    | { [key in Breakpoint]?: Property.BorderTopColor };
  borderTopLeftRadius?:
    | Property.BorderTopLeftRadius
    | { [key in Breakpoint]?: Property.BorderTopLeftRadius };
  borderTopRightRadius?:
    | Property.BorderTopRightRadius
    | { [key in Breakpoint]?: Property.BorderTopRightRadius };
  borderTopStyle?:
    | Property.BorderTopStyle
    | { [key in Breakpoint]?: Property.BorderTopStyle };
  borderTopWidth?:
    | Property.BorderTopWidth
    | { [key in Breakpoint]?: Property.BorderTopWidth };
  borderWidth?:
    | Property.BorderWidth
    | { [key in Breakpoint]?: Property.BorderWidth };

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

  flex?: Property.Flex | { [key in Breakpoint]?: Property.Flex };
  flexGrow?: Property.FlexGrow | { [key in Breakpoint]?: Property.FlexGrow };
  flexShrink?:
    | Property.FlexShrink
    | { [key in Breakpoint]?: Property.FlexShrink };
  flexBasis?: Property.FlexBasis | { [key in Breakpoint]?: Property.FlexBasis };
  flexWrap?: Property.FlexWrap | { [key in Breakpoint]?: Property.FlexWrap };
  order?: Property.Order | { [key in Breakpoint]?: Property.Order };

  width?: Property.Width | { [key in Breakpoint]?: Property.Width };
  height?: Property.Height | { [key in Breakpoint]?: Property.Height };
  minWidth?: Property.MinWidth | { [key in Breakpoint]?: Property.MinWidth };
  minHeight?: Property.MinHeight | { [key in Breakpoint]?: Property.MinHeight };

  overflow?: Property.Overflow | { [key in Breakpoint]?: Property.Overflow };
  overflowX?: Property.Overflow | { [key in Breakpoint]?: Property.Overflow };
  overflowY?: Property.Overflow | { [key in Breakpoint]?: Property.Overflow };

  fontFamily?:
    | Property.FontFamily
    | { [key in Breakpoint]?: Property.FontFamily }
    | any;
  fontStretch?:
    | Property.FontStretch
    | { [key in Breakpoint]?: Property.FontStretch }
    | any;
  fontVariant?:
    | Property.FontVariant
    | { [key in Breakpoint]?: Property.FontVariant }
    | any;
  fontWeight?:
    | Property.FontWeight
    | { [key in Breakpoint]?: Property.FontWeight }
    | any;
  fontStyle?:
    | Property.FontStyle
    | { [key in Breakpoint]?: Property.FontStyle }
    | any;
  fontSize?:
    | Property.FontSize
    | { [key in Breakpoint]?: Property.FontSize }
    | any;
  letterSpacing?:
    | Property.LetterSpacing
    | { [key in Breakpoint]?: Property.LetterSpacing };
  lineHeight?:
    | Property.LineHeight
    | { [key in Breakpoint]?: Property.LineHeight }
    | any;
  textAlign?:
    | Property.TextAlign
    | { [key in Breakpoint]?: Property.TextAlign }
    | any;
  textDecoration?:
    | Property.TextDecoration
    | { [key in Breakpoint]?: Property.TextDecoration }
    | any;
  textTransform?:
    | Property.TextTransform
    | { [key in Breakpoint]?: Property.TextTransform | any }
    | any;
  textShadow?:
    | Property.TextShadow
    | { [key in Breakpoint]?: Property.TextShadow | string }
    | any;

  fontStyles?: any;
  textStyle?: any;

  boxShadow?:
    | Property.BoxShadow
    | { [key in Breakpoint]?: Property.BoxShadow | string }
    | string;
  borderRadius?:
    | Property.BorderRadius
    | { [key in Breakpoint]?: Property.BorderRadius | string }
    | string;

  gridArea?: Property.GridArea | { [key in Breakpoint]?: Property.GridArea };
  gridColumnStart?:
    | Property.GridColumnStart
    | { [key in Breakpoint]?: Property.GridColumnStart };
  gridColumnEnd?:
    | Property.GridColumnEnd
    | { [key in Breakpoint]?: Property.GridColumnEnd };
  gridRowStart?:
    | Property.GridRowStart
    | { [key in Breakpoint]?: Property.GridRowStart };
  gridRowEnd?:
    | Property.GridRowEnd
    | { [key in Breakpoint]?: Property.GridRowEnd };
  gridColumn?:
    | Property.GridColumn
    | { [key in Breakpoint]?: Property.GridColumn };
  gridRow?: Property.GridRow | { [key in Breakpoint]?: Property.GridRow };
  gridAutoFlow?:
    | Property.GridAutoFlow
    | { [key in Breakpoint]?: Property.GridAutoFlow };
  gridAutoRows?:
    | Property.GridAutoRows
    | { [key in Breakpoint]?: Property.GridAutoRows };
  gridAutoColumns?:
    | Property.GridAutoColumns
    | { [key in Breakpoint]?: Property.GridAutoColumns };
  gridTemplateRows?:
    | Property.GridTemplateRows
    | { [key in Breakpoint]?: Property.GridTemplateRows };
  gridTemplateColumns?:
    | Property.GridTemplateColumns
    | { [key in Breakpoint]?: Property.GridTemplateColumns };
  gridTemplateAreas?:
    | Property.GridTemplateAreas
    | { [key in Breakpoint]?: Property.GridTemplateAreas };

  transition?:
    | Property.Transition
    | { [key in Breakpoint]?: Property.Transition };
  transform?: Property.Transform | { [key in Breakpoint]?: Property.Transform };

  zIndex?:
    | Property.ZIndex
    | string
    | { [key in Breakpoint]?: Property.ZIndex | string };

  visuallyHidden?: boolean;

  gridGap?:
    | Property.GridGap
    | { [key in Breakpoint]?: Property.GridGap | string }
    | string;
  gridRowGap?:
    | Property.GridRowGap
    | { [key in Breakpoint]?: Property.GridRowGap | string }
    | string;
  gridColumnGap?:
    | Property.GridColumnGap
    | { [key in Breakpoint]?: Property.GridColumnGap | string }
    | string;
  maxWidth?:
    | Property.MaxWidth
    | { [key in Breakpoint]?: Property.MaxWidth | string }
    | string;
  maxHeight?:
    | Property.MaxHeight
    | { [key in Breakpoint]?: Property.MaxHeight | string }
    | string;
  flexDirection?:
    | Property.FlexDirection
    | { [key in Breakpoint]?: Property.FlexDirection | string }
    | string;
  flexFlow?:
    | Property.FlexFlow
    | { [key in Breakpoint]?: Property.FlexFlow | string }
    | string;
  alignSelf?:
    | Property.AlignSelf
    | { [key in Breakpoint]?: Property.AlignSelf | string }
    | string;
  alignItems?:
    | Property.AlignItems
    | { [key in Breakpoint]?: Property.AlignItems | string }
    | string;
  justifyContent?:
    | Property.JustifyContent
    | { [key in Breakpoint]?: Property.JustifyContent | string }
    | string;
  justifySelf?:
    | Property.JustifySelf
    | { [key in Breakpoint]?: Property.JustifySelf | string }
    | string;
  placeItems?:
    | Property.PlaceItems
    | { [key in Breakpoint]?: Property.PlaceItems | string }
    | string;
  placeContent?:
    | Property.PlaceContent
    | { [key in Breakpoint]?: Property.PlaceContent | string }
    | string;
  placeSelf?:
    | Property.PlaceSelf
    | { [key in Breakpoint]?: Property.PlaceSelf | string }
    | string;
  objectFit?:
    | Property.ObjectFit
    | { [key in Breakpoint]?: Property.ObjectFit | string }
    | string;
  objectPosition?:
    | Property.ObjectPosition
    | { [key in Breakpoint]?: Property.ObjectPosition | string }
    | string;
  opacity?:
    | Property.Opacity
    | { [key in Breakpoint]?: Property.Opacity | string }
    | string;
  grid?:
    | Property.Grid
    | { [key in Breakpoint]?: Property.Grid | string }
    | string;
  outline?:
    | Property.Outline
    | { [key in Breakpoint]?: Property.Outline | string }
    | string;
  outlineColor?:
    | Property.OutlineColor
    | { [key in Breakpoint]?: Property.OutlineColor | string }
    | string;
  outlineOffset?:
    | Property.OutlineOffset
    | { [key in Breakpoint]?: Property.OutlineOffset | string }
    | string;
  outlineStyle?:
    | Property.OutlineStyle
    | { [key in Breakpoint]?: Property.OutlineStyle | string }
    | string;
  whiteSpace?:
    | Property.WhiteSpace
    | { [key in Breakpoint]?: Property.WhiteSpace | string }
    | string;
  wordBreak?:
    | Property.WordBreak
    | { [key in Breakpoint]?: Property.WordBreak | string }
    | string;
  wordWrap?:
    | Property.WordWrap
    | { [key in Breakpoint]?: Property.WordWrap | string }
    | string;
  textOverflow?:
    | Property.TextOverflow
    | { [key in Breakpoint]?: Property.TextOverflow | string }
    | string;
  cursor?:
    | Property.Cursor
    | { [key in Breakpoint]?: Property.Cursor | string }
    | string;
  clipPath?:
    | Property.ClipPath
    | { [key in Breakpoint]?: Property.ClipPath | string }
    | string;
  backgroundOrigin?:
    | Property.BackgroundOrigin
    | { [key in Breakpoint]?: Property.BackgroundOrigin | string }
    | string;
  backgroundPosition?:
    | Property.BackgroundPosition
    | { [key in Breakpoint]?: Property.BackgroundPosition | string }
    | string;
  backgroundPositionX?:
    | Property.BackgroundPositionX
    | { [key in Breakpoint]?: Property.BackgroundPositionX | string }
    | string;
  backgroundPositionY?:
    | Property.BackgroundPositionY
    | { [key in Breakpoint]?: Property.BackgroundPositionY | string }
    | string;
  backgroundRepeat?:
    | Property.BackgroundRepeat
    | { [key in Breakpoint]?: Property.BackgroundRepeat | string }
    | string;
  backgroundSize?:
    | Property.BackgroundSize
    | { [key in Breakpoint]?: Property.BackgroundSize | string }
    | string;
  backdropFilter?:
    | Property.BackdropFilter
    | { [key in Breakpoint]?: Property.BackdropFilter | string }
    | string;
  backdropVisibility?:
    | Property.BackdropVisibility
    | { [key in Breakpoint]?: Property.BackdropVisibility | string }
    | string;
  backgroundAttachment?:
    | Property.BackgroundAttachment
    | { [key in Breakpoint]?: Property.BackgroundAttachment | string }
    | string;
  backgroundBlendMode?:
    | Property.BackgroundBlendMode
    | { [key in Breakpoint]?: Property.BackgroundBlendMode | string }
    | string;
  backgroundClip?:
    | Property.BackgroundClip
    | { [key in Breakpoint]?: Property.BackgroundClip | string }
    | string;
  accentColor?:
    | Property.AccentColor
    | { [key in Breakpoint]?: Property.AccentColor | string }
    | string;
  colorScheme?:
    | Property.ColorScheme
    | { [key in Breakpoint]?: Property.ColorScheme | string }
    | string;
  alignContent?:
    | Property.AlignContent
    | { [key in Breakpoint]?: Property.AlignContent | string }
    | string;
  animation?:
    | Property.Animation
    | { [key in Breakpoint]?: Property.Animation | string }
    | string;
  animationDelay?:
    | Property.AnimationDelay
    | { [key in Breakpoint]?: Property.AnimationDelay | string }
    | string;
  animationDirection?:
    | Property.AnimationDirection
    | { [key in Breakpoint]?: Property.AnimationDirection | string }
    | string;
  animationDuration?:
    | Property.AnimationDuration
    | { [key in Breakpoint]?: Property.AnimationDuration | string }
    | string;
  animationFillMode?:
    | Property.AnimationFillMode
    | { [key in Breakpoint]?: Property.AnimationFillMode | string }
    | string;
  animationIterationCount?:
    | Property.AnimationIterationCount
    | { [key in Breakpoint]?: Property.AnimationIterationCount | string }
    | string;
  animationName?:
    | Property.AnimationName
    | { [key in Breakpoint]?: Property.AnimationName | string }
    | string;
  animationPlayState?:
    | Property.AnimationPlayState
    | { [key in Breakpoint]?: Property.AnimationPlayState | string }
    | string;
  animationTimingFunction?:
    | Property.AnimationTimingFunction
    | { [key in Breakpoint]?: Property.AnimationTimingFunction | string }
    | string;
  appearance?:
    | Property.Appearance
    | { [key in Breakpoint]?: Property.Appearance | string }
    | string;
  aspectRatio?:
    | Property.AspectRatio
    | { [key in Breakpoint]?: Property.AspectRatio | string }
    | string;
  all?: Property.All | { [key in Breakpoint]?: Property.All | string } | string;
  willChange?:
    | Property.WillChange
    | { [key in Breakpoint]?: Property.WillChange | string }
    | string;
  mask?:
    | Property.Mask
    | { [key in Breakpoint]?: Property.Mask | string }
    | string;
  maskBorder?:
    | Property.MaskBorder
    | { [key in Breakpoint]?: Property.MaskBorder | string }
    | string;
  maskBorderMode?:
    | Property.MaskBorderMode
    | { [key in Breakpoint]?: Property.MaskBorderMode | string }
    | string;
  maskBorderOutset?:
    | Property.MaskBorderOutset
    | { [key in Breakpoint]?: Property.MaskBorderOutset | string }
    | string;
  maskBorderRepeat?:
    | Property.MaskBorderRepeat
    | { [key in Breakpoint]?: Property.MaskBorderRepeat | string }
    | string;
  maskBorderSlice?:
    | Property.MaskBorderSlice
    | { [key in Breakpoint]?: Property.MaskBorderSlice | string }
    | string;
  maskBorderSource?:
    | Property.MaskBorderSource
    | { [key in Breakpoint]?: Property.MaskBorderSource | string }
    | string;
  maskBorderWidth?:
    | Property.MaskBorderWidth
    | { [key in Breakpoint]?: Property.MaskBorderWidth | string }
    | string;
  maskClip?:
    | Property.MaskClip
    | { [key in Breakpoint]?: Property.MaskClip | string }
    | string;
  maskComposite?:
    | Property.MaskComposite
    | { [key in Breakpoint]?: Property.MaskComposite | string }
    | string;
  maskImage?:
    | Property.MaskImage
    | { [key in Breakpoint]?: Property.MaskImage | string }
    | string;
  maskMode?:
    | Property.MaskMode
    | { [key in Breakpoint]?: Property.MaskMode | string }
    | string;
  maskOrigin?:
    | Property.MaskOrigin
    | { [key in Breakpoint]?: Property.MaskOrigin | string }
    | string;
  maskPosition?:
    | Property.MaskPosition
    | { [key in Breakpoint]?: Property.MaskPosition | string }
    | string;
  maskRepeat?:
    | Property.MaskRepeat
    | { [key in Breakpoint]?: Property.MaskRepeat | string }
    | string;
  maskSize?:
    | Property.MaskSize
    | { [key in Breakpoint]?: Property.MaskSize | string }
    | string;
  maskType?:
    | Property.MaskType
    | { [key in Breakpoint]?: Property.MaskType | string }
    | string;

  as?: any;
};
