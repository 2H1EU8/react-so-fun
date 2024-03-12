import { createTheme } from "@mui/material";
import Inter from './fonts/Inter-Regular.ttf'

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#2A85FF",
      contrastText: "#FCFCFC"
    },
    info: {
      main: "#2A85FF",
      light: "#B1E5FC"
    },
    success: {
      main: "#83BF6E",
      light: "#B5E4CA"
    },
    error: {
      main: "#FF6A55",
      light: "#FFBC99"
    },
    warning: {
      main: "#FFD88D",
    },
    background: {
      default: "#1A1D1F",
      paper: "#111315",
    },
    text: {
      primary: "#6F767E",
      secondary: "#FCFCFC"
    },
  },
  typography: {
    fontFamily: "Inter, Arial"
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
            src: local('Inter'), local('Inter-Regular'), url(${Inter}) format('tff');
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        body {
          color: #fcfcfc
          font-family: 'Inter', sans-serif;
        }
      `,
    },
  },
});
