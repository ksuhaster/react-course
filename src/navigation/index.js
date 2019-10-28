import React from 'react';
import { Route } from 'react-router-dom';
import { News } from '../Components/News';
import { book } from './book';

export const Routes = () => (
    <>
        <Route
            component = { News }
            path = { book.news }
        />
    </>
)