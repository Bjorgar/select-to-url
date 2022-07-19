import { style } from '@vanilla-extract/css';

import { theme } from '../../../../styles/theme.css';

export const list = style({
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '32px',
  fontFamily: theme.font.secondary,
  color: theme.color.grey[900],
  fontSize: '18px',
  marginRight: '50px',
});
