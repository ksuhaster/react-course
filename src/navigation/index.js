import React from 'react';
import { Switch, Route, Redirect  } from 'react-router-dom';
import { News } from '../Components/News';
import { NewsOne } from '../Components/NewsOne';
import { Student } from '../Components/Student';
import { StudentRegistration } from '../Components/StudentRegistration';
import { People } from '../bus/people';
import { Header } from '../Components/Header';
import { Unknown } from '../Components/Unknown';
import { Login } from '../Components/Login';
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
            <Route
                exact
                component = { Student }
                path = { book.student }
            />
            <Route
                exact
                component = { StudentRegistration }
                path = { book.student_registration }
            />
            <Route
                exact
                component = { People }
                path = { book.people }
            />
            <Route
                component = { Unknown }
                path = { book.unknown }
            />
            <Route
                component = { Login }
                path = { book.login }
            />
           <Redirect to = {book.unknown } />
        </Switch>
    </>
)


