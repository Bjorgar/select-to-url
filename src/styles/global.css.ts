import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  boxSizing: 'border-box',
  margin: '0',
  padding: '0',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});
