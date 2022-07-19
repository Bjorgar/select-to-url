import { theme } from '@src/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const footer = style({
  marginTop: '158px',
  marginBottom: '123px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const heading1 = style({
  fontFamily: theme.font.secondary,
  fontSize: '48px',
  color: theme.color.deepBlue,
  marginBottom: '25px',
  marginTop: 0,
  textAlign: 'center',
  lineHeight: '1.01em',
});

export const arrow = style({
  display: 'inline-block',
  transitionDuration: '0.3s',
  marginLeft: '20px',
});
