import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import MainNavigation from './navigation/MainNavigation';
import theme from './theme';
import {
    Experimental_CssVarsProvider as CssVarsProvider,
  } from '@mui/material/styles';


function App() {

    return (
        <CssVarsProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <MainNavigation />
            </ThemeProvider>
        </CssVarsProvider>
    );
}

export default App;
