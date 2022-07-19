import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { theme } from '../../../../styles/theme.css';

export const buttonCommon = style({
  display: 'block',
  boxSizing: 'border-box',
  textTransform: 'uppercase',
  fontSize: '18px',
  font: theme.font.secondary,
  color: theme.color.white,
  border: 'none',
  outline: 'none',
  padding: '14px 27px',
  minWidth: '200px',
  cursor: 'pointer',
  borderWidth: '1px',
  borderStyle: 'solid',

  selectors: {
    '&:active': {
      border: 'outset',
    },
  },
});

export const button = styleVariants({
  red: [buttonCommon, {
    backgroundColor: theme.color.button.red,
    borderColor: theme.color.button.red,
    selectors: {
      '&:active': {
        backgroundColor: '#da191f',
      },
    },
  }],
  blue: [buttonCommon, {
    backgroundColor: theme.color.button.blue,
    borderColor: theme.color.button.blue,
    selectors: {
      '&:active': {
        backgroundColor: '#065197',
      },
    },
  }],
});

globalStyle(`${buttonCommon}:hover span`, {
  transform: 'translate(8px)',
});
