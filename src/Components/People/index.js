import React from 'react';
import { usePeopleFetch } from './hooks/usePeopleFetch';

export const People = () => {
    const { isFetching, data } = usePeopleFetch();

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
