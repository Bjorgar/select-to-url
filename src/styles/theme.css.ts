import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
  font: {
    primary: 'Lato',
    secondary: 'Orelega One',
  },
  fontWeight: {
    300: '300',
    400: '400',
  },
  color: {
    button: {
      blue: '#0659A6',
      red: '#ED1C24',
    },
    deepBlue: '#223066',
    grey: {
      100: '#F9F9F9',
      200: '#ECECEC',
      400: '#7D7D7D',
      900: '#232323',
    },
    white: '#FFF',
  },
});
