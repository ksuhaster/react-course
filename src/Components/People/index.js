import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { peopleActions } from '../../bus/people/actions';

export const People = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(peopleActions.fetchAsync());
    }, [dispatch]);

    return (
        <>
            <h1>People</h1>
        </>
    )
};


