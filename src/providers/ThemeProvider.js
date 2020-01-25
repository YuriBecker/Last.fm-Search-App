import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { CssBaseline, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme();

const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <>
        <CssBaseline />
        {children}
      </>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
