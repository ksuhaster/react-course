import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Routes } from './navigation';
import { history } from './navigation/history';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router history = { history }>
        <Routes />
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
