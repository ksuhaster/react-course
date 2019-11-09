import React from 'react';
import { Switch, Route, Redirect  } from 'react-router-dom';
import { News } from '../components/News';
import { NewsOne } from '../components/NewsOne';
import { Student } from '../components/Student';
import { StudentRegistration } from '../components/StudentRegistration';
import { Header } from '../components/Header';
import { Unknown } from '../components/Unknown';
import { Login } from '../components/Login';
// Routes
import { book } from './book';

// Layouts
import * as Views from '../views'

// Domains
import { People } from '../bus/people';

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

            <Route exact path = { book.people }>
                <Views.Facade>
                    <People />
                </Views.Facade>
            </Route>

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


