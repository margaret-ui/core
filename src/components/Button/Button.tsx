import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from './types';
import { injectLayoutHelpers, layoutProps, paddingProps } from '../Box';
import { injectButtonResetStyles } from './utils';
import { injectStackHelpers, Stack } from '../Stack';
import { setProperty } from '../../utils';

const VARIANT_PROPS = [
  'fontWeight',
  'fontSize',
  'alignY',
  'alignX',
  'transition',
  'borderRadius',
  'boxShadow',
  'background',
  'backgroundColor',
  'backgroundImage',
  'border',
  'color',
  'textDecoration',
  'opacity',
  'cursor',
];

const SIZE_PROPS = [...paddingProps, 'minWidth', 'minHeight', 'fontSize'];

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
      ${VARIANT_PROPS.map(property =>
        setProperty({
          property,
          theme,
          value: theme.button?.variant?.[variant]?.[property],
        }),
      )};

      &:hover:not(:disabled):not([disabled]) {
        ${VARIANT_PROPS.map(property =>
          setProperty({
            property,
            theme,
            value: theme.button?.variant?.[variant]?.[`${property}Hover`],
          }),
        )};
      }

      &:focus-visible:not(:disabled):not([disabled]),
      &:focus-within:not(:disabled):not([disabled]) {
        ${VARIANT_PROPS.map(property =>
          setProperty({
            property,
            theme,
            value: theme.button?.variant?.[variant]?.[`${property}Focus`],
          }),
        )};
      }

      &:disabled,
      &:disabled:hover,
      &:disabled:focus,
      &:disabled:focus-within,
      &:disabled:focus-visible {
        ${VARIANT_PROPS.map(property =>
          setProperty({
            property,
            theme,
            value: theme.button?.variant?.[variant]?.[`${property}Disabled`],
          }),
        )};
      }
    `}


  ${({ size, theme }) =>
    size &&
    css`
      ${SIZE_PROPS.map(property =>
        setProperty({
          property,
          theme,
          value: theme.button?.sizes?.[size]?.[property],
        }),
      )}
    `}

  ${({ disabled, theme, variant }) =>
    disabled &&
    variant &&
    css`
      &,
      &:hover,
      &:focus {
        ${VARIANT_PROPS.map(property =>
          setProperty({
            property,
            theme,
            value: theme.button?.variant?.[variant]?.[`${property}Disabled`],
          }),
        )}
      }
    `}

  ${injectLayoutHelpers}
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps & any>(
  (
    {
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
    },
    ref,
  ) => {
    return (
      <ButtonWrapper
        disabled={disabled}
        variant={variant}
        size={size}
        gap={gap}
        direction={direction}
        alignY={alignY}
        {...props}
        ref={ref}
      >
        {Boolean(leftIcon) && <Stack>{leftIcon}</Stack>}
        {Boolean(leftIcon) || Boolean(rightIcon) ? (
          <div>{children}</div>
        ) : (
          children
        )}
        {Boolean(rightIcon) && <Stack>{rightIcon}</Stack>}
      </ButtonWrapper>
    );
  },
);

export default Button;
