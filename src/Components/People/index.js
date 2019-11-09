import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { peopleActions } from '../../bus/people/actions';

export const People = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(peopleActions.fetchAsync());
    }, [dispatch]);

    const { data } = useSelector((state) => state.people);

    const list = data.map(({name}, index) => (
        <li key = { index }>{ name }</li>
    ));

    return (
        <>
            <h1>People</h1>
            <ul>
                { list }
            </ul>
        </>
    )
};
