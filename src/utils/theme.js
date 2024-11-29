// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#1976d2', 
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#dc004e', 
      contrastText: '#ffffff',
    },
    gray: {
      50: '#fafafa', 
      100: '#f5f5f5', 
      200: '#eeeeee', 
      300: '#e0e0e0', 
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575', 
      700: '#616161', 
      800: '#424242', 
      900: '#212121', 
    },
    green:{
        100:'#e8fccf',
        200:'#96e072',
        300:'#3da35d',
        400:'#3e8914',
        500:'#134611'

    },
    pink:{
      100:'#ff0a54'
    },
    background: {
      default: '#f4f6f8', 
      paper: '#ffffff', 
    },
    text: {
      primary: '#333333', 
      secondary: '#555555', 
    },
  },
});

export default theme;
