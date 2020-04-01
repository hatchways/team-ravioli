import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif'
  },
  palette: {
    primary: {
      main: '#4366a7', // Custom Primary
      light: '#314f85', // Light blue
      dark: '#1b3460' // Dark blue
    },
    secondary: {
      main: '#38cc89' // Green
    }
  }
});

// backgroundGrey: '#fafbff',
// dropdownGrey: '#f0f2fa'
