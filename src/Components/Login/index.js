import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useLocalStorage } from '../News/useLocalStorage';

export const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [ authenticated, setAuthenticated ] = useLocalStorage('authenticated', false);

    console.log('location.state', location.state);
    let { from } = location.state || { from: { pathname: '/news' } };
    console.log('from', from);

    if (authenticated) {
        history.push('/news');
    } 

    const login = () => {
        setAuthenticated(true);
        history.replace(from);
    }

    return (
        <div>
            <p>You must log in to view the page at {from}</p>
            <button onClick={ login }>Log in</button>
        </div>
    );
};
