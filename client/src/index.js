import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core"
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme(
    {
        palette: {
            type: 'dark',
            primary: {
                main: '#004d40',
            },
            secondary: indigo,
        },

    }
);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));

