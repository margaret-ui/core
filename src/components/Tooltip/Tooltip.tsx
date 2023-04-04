import * as Tooltip from '@radix-ui/react-tooltip';
import styled, { keyframes } from 'styled-components';
import { setProperty } from '../../utils';
import { backgroundProps, borderRadiusProps, paddingProps } from '../Box';

const slideUpAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2px);
  }  

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideRightAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-2px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideDownAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-2px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideLeftAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(2px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const CONTENT_PROPS = [
  ...borderRadiusProps,
  ...backgroundProps,
  ...paddingProps,

  'fontSize',
  'lineHeight',
  'color',
  'userSelect',
  'boxShadow',
];

const TooltipContent = styled(Tooltip.Content)`
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state='delayed-open'] {
    &[data-side='top'] {
      animationname: ${slideDownAndFade};
    }
    &[data-side='right'] {
      animationname: ${slideLeftAndFade};
    }
    &[data-side='bottom'] {
      animationname: ${slideUpAndFade};
    }
    &[data-side='left'] {
      animationname: ${slideRightAndFade};
    }
  }

  ${({ theme }) =>
    CONTENT_PROPS.map(property =>
      setProperty({
        theme,
        property,
        value: theme.tooltip?.content?.[property],
      }),
    )}
`;

const TooltipArrow = styled(Tooltip.Arrow)`
  ${({ theme }) =>
    setProperty({
      theme,
      property: 'fill',
      value: theme.tooltip?.content?.backgroundColor,
    })}
`;

export default {
  Provider: Tooltip.Provider,
  Root: Tooltip.Root,
  Trigger: Tooltip.Trigger,
  Portal: Tooltip.Portal,
  Content: TooltipContent,
  Arrow: TooltipArrow,
};
