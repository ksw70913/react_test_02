import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    typocraphy: {
      fontFamily: ['GmarketSansMedium'],
    },
    type: 'dark',
    primary: {
      main: '#2196f3',
      light: 'rgb(77, 171, 245)',
      dark: 'rgb(23, 105, 170)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export default theme;
