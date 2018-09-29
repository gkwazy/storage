import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core"
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme(
    {
        palette: {
            type: 'dark',
            primary: {
                main: '#004d40',
            },
            secondary: red,
        },



    }
);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));

