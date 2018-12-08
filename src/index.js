import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'

import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import MyProvider from './Data/Provider';
import {theme} from './style';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <MyProvider>
            <App />
        </MyProvider>
    </ThemeProvider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();




