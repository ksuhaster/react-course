import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { peopleActions } from '../../bus/people/actions';

export const People = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(peopleActions.fetchAsync());
    }, [dispatch]);

    const { data, isFetching } = useSelector((state) => state.people);

    const loader = isFetching && (
        <p>Loading data from API...</p>
    );

    const list = isFetching || data.map(({name}, index) => (
        <li key = { index }><a href={index}>{ name }</a></li>
    ));

    return (
        <>
            <h1>People</h1>
            { loader }
            <ul>
                { list }
            </ul>
        </>
    )
};
