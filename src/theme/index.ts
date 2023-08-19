import { createTheme, lighten } from "@mui/material";
import { IExtendedThemeOptions, IExtendedTheme } from "./ExtendedThemeOptions";
import { leastSquaresFit } from "./theme.util";

export const lightColorScheme = {
  palette: {
    mode: 'light',
    primary: {
      default: '#3990FF',
      dark: '#02367D',
    },
    text: {
      default: '#111111',
    },
  },
};

export const darkColorScheme = {
  palette: {
    mode: 'dark',
    primary: {
      default: '#265D97',
      dark: '#132F4C',
      main: '#5090D3',
    },
    text: {
      default: '#ffffff',
    },
  },
};

export const themeConfig: IExtendedThemeOptions = {
  spacing: (factor: number) =>
    ["0", "4px", "8px", "16px", "32px", "64px"][factor],
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme: IExtendedTheme) => ({
        html: {
          display: "flex",
          WebkitFontSmoothing: "auto",
          minHeight: "100%",
        },
        body: {
          overflowX: "hidden",
          overflowY: "auto !important",
          flexGrow: 1,
          minHeight: "100%",
          fontFamily: "MulishRegular, sans-serif",
        },
        /* width */
        "*::-webkit-scrollbar": {
          width: 5,
        },
        /* Track */
        "*::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 5px grey",
          borderRadius: 15,
        },
        /* Handle */
        "*::-webkit-scrollbar-thumb": {
          background: "#f74444",
          borderRadius: 10,
        },
        /* Handle on hover */
        "*::-webkit-scrollbar-thumb:hover": {
          background: lighten('#f74444', 0.5),
        },
      }),
    },
  },
  palette: {
    // Brand Primary colors in 10% shades — dark to light
    primary: {
      main: "#323232",
      900: "#262626",
      800: "#404040",
      700: "#595959",
      600: "#737373",
      500: "#a6a6a6",
      400: "#8c8c8c",
      300: "#a6a6a6",
      200: "#bfbfbf",
      100: "#d9d9d9",
      light: "#f2f2f2",
      dark: "#0d0d0d",
      contrastText: "#ffffff",
    },
    // Brand Secondary colors in 10% shades — dark to light
    secondary: {
      main: "#f74444",
      900: "#180101",
      800: "#490303",
      700: "#ab0707",
      600: "#dc0909",
      500: "#f62323",
      400: "#f85454",
      300: "#fa8585",
      200: "#fcb6b6",
      100: "#fee7e7",
      light: "#fee7e7",
      contrastText: "#000000",
    },
    error: {
      main: "#b00020",
      900: "#b00020",
      800: "#bf152c",
      700: "#cc1d33",
      600: "#de2839",
      500: "#ed323b",
      400: "#e84853",
      300: "#de6c74",
      200: "#ea959b",
      100: "#fbcad2",
      light: "#fdeaee",
      contrastText: "#fff",
    },
    success: {
      main: "#8AC99D",
      900: "#0e6410",
      800: "#298324",
      700: "#35942f",
      600: "#41a63a",
      500: "#4bb543",
      400: "#66c060",
      300: "#82cc7d",
      200: "#a6d9a3",
      100: "#c9e8c7",
      light: "#e8f6e8",
      contrastText: "#fff",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fafafa", // Used by css baseline to set body bg color
      light: "#F9FBFF",
    },
    text: {
      primary: "#313131",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: "DM SANS, sans-serif, Roboto",
    h1: {
      fontSize: leastSquaresFit({ 0: 25, 480: 24, 960: 40 }),
      fontWeight: 600,
    },
    h2: {
      fontSize: leastSquaresFit({ 0: 20, 480: 26, 960: 36 }),
      fontWeight: 600,
    },
    h3: {
      fontSize: leastSquaresFit({ 0: 18, 480: 20, 960: 30 }),
      fontWeight: 600,
    },
    h4: {
      fontSize: leastSquaresFit({ 0: 16, 480: 18, 960: 24 }),
      fontWeight: 600,
    },
    h5: {
      fontSize: leastSquaresFit({ 0: 14, 480: 16, 960: 18 }),
      fontWeight: 600,
    },
    body1: {
      fontWeight: 500,
      fontSize: leastSquaresFit({ 0: 14, 480: 14, 960: 16 }),
    },
    body2: {
      fontWeight: 400,
      fontSize: leastSquaresFit({ 0: 12, 480: 12, 960: 14 }),
    },
    fontSizes: {
      xs: leastSquaresFit({ 0: 10, 480: 10, 960: 12 }),
      sm: leastSquaresFit({ 0: 12, 480: 12, 960: 14 }),
      md: leastSquaresFit({ 0: 14, 480: 14, 960: 16 }),
      lg: leastSquaresFit({ 0: 14, 480: 16, 960: 18 }),
      xlg: leastSquaresFit({ 0: 16, 480: 18, 960: 20 }),
      xxlg: leastSquaresFit({ 0: 20, 480: 24, 960: 30 }),
      link: leastSquaresFit({ 0: 12, 480: 12, 960: 12 }),
    },
  },
};

export default createTheme({
  palette: themeConfig.palette,
  typography: themeConfig.typography,
  spacing: themeConfig.spacing,
  breakpoints: themeConfig.breakpoints,
  components: themeConfig.components,
}) as IExtendedTheme;

  