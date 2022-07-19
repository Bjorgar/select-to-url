import { theme } from '@src/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const form = style({
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.color.grey[200],
  padding: '110px 30px 50px',
  marginTop: '55px',
});

export const input = style({
  boxSizing: 'border-box',
  display: 'block',
  padding: '16px 30px',
  fontFamily: theme.font.primary,
  fontWeight: theme.fontWeight[300],
  fontSize: '16px',
  backgroundColor: theme.color.grey[100],
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.color.deepBlue,
  width: '100%',
  marginBottom: '30px',

  selectors: {
    '&:nth-child(3)': {
      marginBottom: '40px',
    },
  },
});
