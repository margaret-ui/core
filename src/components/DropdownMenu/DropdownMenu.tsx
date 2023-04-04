import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled, { keyframes } from 'styled-components';
import { css } from 'styled-components';
import { setProperty } from '../../utils';
import {
  paddingProps,
  borderRadiusProps,
  backgroundProps,
  marginProps,
} from '../Box';

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
  'minWidth',
  'width',
  'background',
  'backgroundImage',
  'backgroundColor',
  ...borderRadiusProps,
  ...paddingProps,
  'boxShadow',
  'animationDuration',
];

const injectContentStyles = css`
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  ${({ theme }) =>
    CONTENT_PROPS.map(property =>
      setProperty({
        theme,
        property,
        value: theme.dropdownMenu?.content?.[property],
      }),
    )}

  &[data-state='open'] {
    &[data-side='top'] {
      animation-name: ${slideUpAndFade};
    }
    &[data-side='right'] {
      animation-name: ${slideLeftAndFade};
    }
    &[data-side='bottom'] {
      animation-name: ${slideDownAndFade};
    }
    &[data-side='left'] {
      animation-name: ${slideRightAndFade};
    }
  }
`;

const DropdownMenuContent = styled(DropdownMenu.Content)`
  ${injectContentStyles}
`;

const DropdownMenuSubContent = styled(DropdownMenu.SubContent)`
  ${injectContentStyles}
`;

const DropdownMenuArrow = styled(DropdownMenu.Arrow)`
  fill: white;
`;

const ITEM_PROPS = [
  'fontSize',
  'lineHeight',
  'color',
  'display',
  'alignItems',
  'height',
  'minHeight',
  'borderRadius',

  ...paddingProps,
  ...backgroundProps,

  'textStyle',
  'opacity',
  'cursor',
];

const injectItemStyles = css`
  all: unset;
  box-sizing: border-box;
  user-select: none;
  line-height: 1;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;

  ${({ theme }) =>
    ITEM_PROPS.map(property =>
      setProperty({
        property,
        theme,
        value: theme.dropdownMenu?.item?.[property],
      }),
    )}

  &[data-disabled] {
    pointer-events: none;

    ${({ theme }) =>
      ITEM_PROPS.map(property =>
        setProperty({
          property,
          theme,
          value: theme.dropdownMenu?.item?.[`${property}Disabled`],
        }),
      )}
  }

  &[data-highlighted] {
    ${({ theme }) =>
      ITEM_PROPS.map(property =>
        setProperty({
          property,
          theme,
          value: theme.dropdownMenu?.item?.[`${property}Highlighted`],
        }),
      )}
  }

  &[data-state='open'] {
    ${({ theme }) =>
      ITEM_PROPS.map(property =>
        setProperty({
          property,
          theme,
          value: theme.dropdownMenu?.item?.[`${property}Open`],
        }),
      )}
  }
`;

const DropdownMenuItem = styled(DropdownMenu.Item)`
  ${injectItemStyles}
`;

const DropdownMenuCheckboxItem = styled(DropdownMenu.CheckboxItem)`
  ${injectItemStyles}
`;

const DropdownMenuRadioItem = styled(DropdownMenu.RadioItem)`
  ${injectItemStyles}
`;

const DropdownMenuSubTrigger = styled(DropdownMenu.SubTrigger)`
  ${injectItemStyles}
`;

const DropdownMenuLabel = styled(DropdownMenu.Label)`
  ${({ theme }) =>
    ITEM_PROPS.map(property =>
      setProperty({
        property,
        theme,
        value: theme.dropdownMenu?.label?.[property],
      }),
    )}
`;

const SEPARATOR_PROPS = [...marginProps];

const DropdownMenuSeparator = styled(DropdownMenu.Separator)`
  height: 1px;

  ${({ theme }) =>
    setProperty({
      theme,
      property: 'backgroundColor',
      value: theme.dropdownMenu?.separator?.color,
    })}

  ${({ theme }) =>
    SEPARATOR_PROPS.map(property =>
      setProperty({
        property,
        theme,
        value: theme.dropdownMenu?.separator?.[property],
      }),
    )}
`;

const DropdownMenuItemIndicator = styled(DropdownMenu.ItemIndicator)`
  position: absolute;
  left: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) =>
    setProperty({
      theme,
      property: 'width',
      value: theme.dropdownMenu?.itemIndicator?.width,
    })}
`;

const RIGHT_SLOT_PROPS = [
  'fontSize',
  'color',
  'textStyle',

  ...paddingProps,
  ...borderRadiusProps,
  ...backgroundProps,

  'marginLeft',
  'marginInlineStart',
  'border',
  'boxShadow',
];

const DropdownMenuRightSlot = styled.div`
  margin-left: auto;

  ${({ theme }) =>
    RIGHT_SLOT_PROPS.map(property =>
      setProperty({
        property,
        theme,
        value: theme.dropdownMenu?.rightSlot?.[property],
      }),
    )}

  &[data-highlighted] > & {
    ${({ theme }) =>
      RIGHT_SLOT_PROPS.map(property =>
        setProperty({
          property,
          theme,
          value: theme.dropdownMenu?.rightSlot?.[`${property}Highlighted`],
        }),
      )}
  }

  &[data-disabled] & {
    ${({ theme }) =>
      RIGHT_SLOT_PROPS.map(property =>
        setProperty({
          property,
          theme,
          value: theme.dropdownMenu?.rightSlot?.[`${property}Disabled`],
        }),
      )}
  }
`;

export default {
  Root: DropdownMenu.Root,
  Portal: DropdownMenu.Portal,
  Trigger: DropdownMenu.Trigger,
  RadioGroup: DropdownMenu.RadioGroup,

  Item: DropdownMenuItem,
  Arrow: DropdownMenuArrow,
  Label: DropdownMenuLabel,
  Content: DropdownMenuContent,
  RightSlot: DropdownMenuRightSlot,
  RadioItem: DropdownMenuRadioItem,
  Separator: DropdownMenuSeparator,
  Sub: DropdownMenu.Sub,
  SubContent: DropdownMenuSubContent,
  SubTrigger: DropdownMenuSubTrigger,
  CheckboxItem: DropdownMenuCheckboxItem,
  ItemIndicator: DropdownMenuItemIndicator,
};
