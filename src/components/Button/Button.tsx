import { FC } from 'react';
import ButtonReset from './ButtonReset';
import styled, { css } from 'styled-components';
import { Stack } from '../../components';
import { ButtonProps } from './types';
import { spacing } from '../../ui/utils';

const ButtonWrapper = styled(ButtonReset)<ButtonProps>`
  position: relative;
  display: flex;
  white-space: nowrap;
  line-height: 1;
  height: fit-content;

  ${({ variant, theme }) =>
    variant &&
    `
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
      text-decoration: ${theme.button?.variant?.[variant]?.textDecorationHover};

    }

    &:focus {
      background: ${theme.button?.variant?.[variant]?.backgroundFocus};
      color: ${theme.button?.variant?.[variant]?.colorFocus};
      box-shadow: ${theme.button?.variant?.[variant]?.boxShadowFocus};
      transform: ${theme.button?.variant?.[variant]?.transformFocus};
      text-decoration: ${theme.button?.variant?.[variant]?.textDecorationFocus};
    }

    &:disabled {
      background: ${theme.button?.variant?.[variant]?.backgroundDisabled};
      color: ${theme.button?.variant?.[variant]?.colorDisabled};
      box-shadow: ${theme.button?.variant?.[variant]?.boxShadowDisabled};
      transform: ${theme.button?.variant?.[variant]?.transformDisabled};
      text-decoration: ${theme.button?.variant?.[variant]?.textDecorationDisabled};
      opacity: ${theme.button?.variant?.[variant]?.opacityDisabled};
    }
  `}

  ${({ size, theme }) =>
    size &&
    `
    padding: ${spacing(theme.button?.sizes?.[size]?.paddingVertical)} ${spacing(
      theme.button?.sizes?.[size]?.paddingHorizontal,
    )};
    min-width: ${theme.button?.sizes?.[size]?.minWidth};
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
        background: ${theme.button?.variant?.[variant]?.backgroundDisabled};
        color: ${theme.button?.variant?.[variant]?.colorDisabled};
        box-shadow: ${theme.button?.variant?.[variant]?.boxShadowDisabled};
        opacity: ${theme.button?.variant?.[variant]?.opacityDisabled};
      }
    `}
`;

const Button: FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  disabled,
  variant = 'solid',
  size = 'default',
}) => (
  <ButtonWrapper disabled={disabled} variant={variant} size={size}>
    <Stack gap={1}>
      {Boolean(leftIcon) && <span>{leftIcon}</span>}
      <div>{children}</div>
      {Boolean(rightIcon) && <span>{rightIcon}</span>}
    </Stack>
  </ButtonWrapper>
);

export default Button;
