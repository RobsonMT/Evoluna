// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,

  colors: {
    black: {
      300: "rgb(18, 18, 20)",
    },
    gray: {
      200: "rgb(179, 182, 185)",
      300: "rgb(172, 166, 166)",
      700: "rgb(59, 59, 59)",
      800: "rgb(67, 64, 64)",
    },
    red: "#E60000",
    yellow: "rgb(255, 235, 0)",
    purple: {
      100: "rgb(112, 80, 149)",
      500: "rgb(116, 78, 214)",
      800: "rgb(136, 27, 168)",
      900: "#f53695",
    },
    pink: "rgb(245, 54, 149)",
    blue: { 50: "rgb(4, 191, 217)", 800: "rgb(0, 68, 149)" },
  },
  fonts: {
    heading: "'Ubuntu', serif;",
    body: "'Ubuntu', serif;",
  },
  fontSizes: {
    xs: ".75rem",
    sm: ".875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  styles: {
    global: {
      body: {},
    },
  },
});
