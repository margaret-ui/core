import styled, { DefaultTheme, StyledComponent } from 'styled-components';
import {
  injectLayoutHelpers,
  injectVisuallyHiddenHelper,
  BoxProps,
} from '../Box';

export const Text: StyledComponent<
  'p',
  DefaultTheme,
  BoxProps,
  any
> = styled.p.attrs<BoxProps>(({ theme, ...props }) => ({
  fontStyles:
    props.fontFamily ||
    props.fontSize ||
    props.fontStretch ||
    props.fontStyle ||
    props.fontVariant ||
    props.fontWeight ||
    props.lineHeight ||
    props.textTransform ||
    props.textDecoration ||
    props.textShadow ||
    props.letterSpacing
      ? props.fontStyles
      : props.fontStyles || theme?.defaultStylesMapping?.[props.as] || 'body',
}))<BoxProps>`
  margin-top: 0;
  margin-bottom: 0;

  ${injectLayoutHelpers}
  ${injectVisuallyHiddenHelper}
`;

export const Heading: StyledComponent<
  'h2',
  DefaultTheme,
  BoxProps,
  any
> = styled(Text).attrs<BoxProps>(({ theme, ...props }) => ({
  fontStyles: props.fontStyles || theme?.defaultStylesMapping?.[props.as],
}))<BoxProps>``;

Heading.defaultProps = {
  as: 'h2',
};
