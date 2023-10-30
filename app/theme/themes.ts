"use client";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    smm: true;
    md: true;
    lg: true;
    xl: true;
  }
}
export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      smm: 768,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
});
