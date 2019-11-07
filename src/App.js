import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { history } from './navigation/history';
import { Routes } from './navigation';
import { store } from './init/store';
import './styles.scss';

export const App = () => {
    return (
        <Provider store={ store }>
            <Router history = { history }>
                <Routes />
            </Router>
        </Provider>
    )
};