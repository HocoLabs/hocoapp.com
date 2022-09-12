import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';
import theme from "./src/styles/theme";

export const wrapRootElement = ({ element }) => {
  const muiTheme = createTheme(theme);
  return <ThemeProvider theme={muiTheme}>{element}</ThemeProvider>;
};