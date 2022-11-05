import { FC } from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from './types';
import { spacing } from '../../ui/utils';
import { injectLayoutHelpers, layoutProps } from '../Box';
import { injectButtonResetStyles } from './utils';
import { injectStackHelpers, Stack } from '../Stack';

const ButtonWrapper = styled.button.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !layoutProps.includes(prop) && defaultValidatorFn(prop),
})<ButtonProps>`
  position: relative;
  white-space: nowrap;
  line-height: 1;
  height: fit-content;

  ${injectButtonResetStyles}
  ${injectStackHelpers}

  ${({ variant, theme }) =>
    variant &&
    css`
      font-weight: ${theme.button?.variant?.[variant]?.fontWeight};
      font-size: ${theme.button?.variant?.[variant]?.fontSize};
      align-items: ${theme.button?.variant?.[variant]?.alignY};
      justify-content: ${theme.button?.variant?.[variant]?.alignX};
      transition: ${theme.button?.variant?.[variant]?.transition};
      border-radius: ${theme.button?.variant?.[variant]?.borderRadius};

      box-shadow: ${theme.button?.variant?.[variant]?.boxShadow};
      background: ${theme.button?.variant?.[variant]?.background};
      color: ${theme.button?.variant?.[variant]?.color};
      text-decoration: ${theme.button?.variant?.[variant]?.textDecoration};

      &:hover {
        background: ${theme.button?.variant?.[variant]?.backgroundHover};
        color: ${theme.button?.variant?.[variant]?.colorHover};
        box-shadow: ${theme.button?.variant?.[variant]?.boxShadowHover};
        transform: ${theme.button?.variant?.[variant]?.transformHover};
        text-decoration: ${theme.button?.variant?.[variant]
          ?.textDecorationHover};
      }

      &:focus {
        background: ${theme.button?.variant?.[variant]?.backgroundFocus};
        color: ${theme.button?.variant?.[variant]?.colorFocus};
        box-shadow: ${theme.button?.variant?.[variant]?.boxShadowFocus};
        transform: ${theme.button?.variant?.[variant]?.transformFocus};
        text-decoration: ${theme.button?.variant?.[variant]
          ?.textDecorationFocus};
      }

      &:disabled,
      &:disabled:hover,
      &:disabled:focus {
        cursor: not-allowed;
        background: ${theme.button?.variant?.[variant]?.backgroundDisabled ||
          theme.button?.variant?.[variant]?.background ||
          'unset'};
        color: ${theme.button?.variant?.[variant]?.colorDisabled ||
          theme.button?.variant?.[variant]?.color ||
          'unset'};
        box-shadow: ${theme.button?.variant?.[variant]?.boxShadowDisabled ||
          theme.button?.variant?.[variant]?.boxShadow ||
          'unset'};
        opacity: ${theme.button?.variant?.[variant]?.opacityDisabled};
        text-decoration: ${theme.button?.variant?.[variant]
          ?.textDecorationDisabled ||
          theme.button?.variant?.[variant]?.textDecoration ||
          'unset'};
      }
    `}

  ${({ size, theme }) =>
    size &&
    css`
      padding: ${spacing(theme.button?.sizes?.[size]?.paddingVertical)}
        ${spacing(theme.button?.sizes?.[size]?.paddingHorizontal)};
      min-width: ${theme.button?.sizes?.[size]?.minWidth};
      min-height: ${theme.button?.sizes?.[size]?.minHeight};
      font-size: ${theme.button?.sizes?.[size]?.fontSize};
    `}

  ${({ disabled, theme, variant }) =>
    disabled &&
    variant &&
    css`
      &,
      &:hover,
      &:focus {
        cursor: not-allowed;
        background: ${theme.button?.variant?.[variant]?.backgroundDisabled ||
          theme.button?.variant?.[variant]?.background ||
          'unset'};
        color: ${theme.button?.variant?.[variant]?.colorDisabled ||
          theme.button?.variant?.[variant]?.color ||
          'unset'};
        box-shadow: ${theme.button?.variant?.[variant]?.boxShadowDisabled ||
          theme.button?.variant?.[variant]?.boxShadow ||
          'unset'};
        opacity: ${theme.button?.variant?.[variant]?.opacityDisabled};
        text-decoration: ${theme.button?.variant?.[variant]
          ?.textDecorationDisabled ||
          theme.button?.variant?.[variant]?.textDecoration ||
          'unset'};
      }
    `}

  ${injectLayoutHelpers}
`;

const Button: FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  disabled,
  variant = 'solid',
  size = 'default',
  direction = 'row',
  gap = 1,
  alignY = 'center',
  ...props
}) => (
  <ButtonWrapper
    disabled={disabled}
    variant={variant}
    size={size}
    gap={gap}
    direction={direction}
    alignY={alignY}
    {...props}
  >
    {Boolean(leftIcon) && <Stack>{leftIcon}</Stack>}
    {Boolean(leftIcon) || Boolean(rightIcon) ? <div>{children}</div> : children}
    {Boolean(rightIcon) && <Stack>{rightIcon}</Stack>}
  </ButtonWrapper>
);

export default Button;
