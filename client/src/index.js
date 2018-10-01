import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core"


const theme = createMuiTheme(
    {
        palette: {
            type: 'dark',
            primary: {
                main: '#004d40',
            },
            secondary: {
                main: "#F44336",
                light: "#3F51B5"
            }
        },



    }
);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));

