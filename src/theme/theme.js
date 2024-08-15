import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A2A5E', // Dark blue
      light: '#1A3A6E',
      dark: '#051A4E',
    },
    secondary: {
      main: '#F7931A', // Bitcoin orange
      light: '#F9A94A',
      dark: '#D57D0A',
    },
    background: {
      default: '#0A1929',
      paper: '#0F2744',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0BEC5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: 'none',
          fontSize: '1.1rem',
          padding: '10px 30px',
        },
      },
    },
  },
});

export default theme;