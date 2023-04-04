export const dropdownMenuTheme = {
  content: {
    minWidth: '220px',
    backgroundColor: 'white',
    borderRadius: 'default',
    padding: 0.5,
    boxShadow: 'elevation1',
  },

  item: {
    cursor: 'pointer',
    fontSize: 'callout',
    paddingY: 0.25,
    paddingLeft: 1.5,
    paddingRight: 0.25,
    borderRadius: 'default',
    minHeight: '26px',
    color: 'textLight',

    colorHighlighted: 'text',
    backgroundColorHighlighted: 'var(--colors-primaryAlpha-200)',

    cursorDisabled: 'not-allowed',
    opacityDisabled: 0.5,
  },

  itemIndicator: {
    width: '24px',
  },

  label: {
    color: 'textLighter',
    fontSize: 'callout',
    paddingLeft: 1.5,
  },

  separator: {
    color: 'var(--ui-separator)',
    marginX: 0.25,
    marginY: 0.5,
  },

  rightSlot: {
    textStyle: 'footnote',
    marginLeft: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    border: '',
    paddingX: 0.25,
    borderRadius: 'default',
    color: 'textLight',
    colorHighlighted: 'white',
  },
};
