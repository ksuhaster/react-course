import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { News } from '../Components/News';
import { NewsOne } from '../Components/NewsOne';
import { Header } from '../Components/Header';
import { book } from './book';

export const Routes = () => (
    <>
        <Route
            component = { Header }
            path = { book.root }
        />
        <Switch>
            <Route
                component = { NewsOne }
                path = { book.news_one }
            />
            <Route
                exact
                component = { News }
                path = { book.news }
            />
           <Redirect to =  {book.news } />
        </Switch>
    </>
)