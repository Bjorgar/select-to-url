import { theme } from '@src/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const main = style({
  marginTop: '280px',
});

export const heading1 = style({
  fontFamily: theme.font.secondary,
  fontSize: '60px',
  color: theme.color.deepBlue,
  marginBottom: '20px',
  textAlign: 'center',
});

export const heading2 = style({
  fontFamily: theme.font.primary,
  fontWeight: theme.fontWeight[300],
  fontSize: '24px',
  color: theme.color.grey[400],
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  marginBottom: '70px',
  textAlign: 'center',
});

export const infoImageWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const info = style({
  width: '560px',
});

export const paragraph = style({
  fontFamily: theme.font.primary,
  fontWeight: theme.fontWeight[400],
  fontSize: '18px',
  lineHeight: '1.6em',
  marginBottom: '40px',
  marginTop: 0,
});

export const img = style({
  width: 'auto',
});
