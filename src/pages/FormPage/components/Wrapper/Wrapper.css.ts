import { theme } from '@src/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const parent = style({
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  width: '100%',
});

export const child = style({
  width: '1140px',
  position: 'relative',
});

export const fixedParent = style([
  parent,
  {
    position: 'fixed',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
    zIndex: '9999',
    backgroundColor: theme.color.white,
  },
]);
