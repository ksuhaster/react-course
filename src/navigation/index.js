import React from 'react';
import {
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import { News } from '../Components/News';
import { NewsOne } from '../Components/NewsOne';
import { Header } from '../Components/Header';
import { Unknown } from '../Components/Unknown';
import { book } from './book';

export const Routes = () => (
    <>
        <Route
            component = { Header }
            path = { book.root }
        />
        <AuthButton />
        <Switch>
            <PrivateRoute path = { book.news_one }>
                <NewsOne />
            </PrivateRoute>
            <Route
                exact
                component = { News }
                path = { book.news }
            />
            <Route
                component = { Unknown }
                path = { book.unknown }
            />
           <Redirect to = {book.unknown } />
        </Switch>
    </>
)

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  
  function AuthButton() {
    let history = useHistory();
  
    return fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    );
  }
  
  // A wrapper for <Route> that redirects to the login
  // screen if you're not yet authenticated.
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  
  function LoginPage() {
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
      fakeAuth.authenticate(() => {
        history.replace(from);
      });
    };
  
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    );
  }