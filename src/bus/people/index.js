import React from 'react';
import { usePeopleFetch } from './hooks/usePeopleFetch';
import { useLoading } from './hooks/useLoading';

export const People = () => {
    const { isDataLoading } = useLoading();
    const status = isDataLoading && 'NOT READY';

    const { isFetching, data, error } = usePeopleFetch();

    const errorMessage = error.status === 404 && (
      <p>Not found!</p>
    );

    const loader = isFetching && (
        <p>Loading data from API...</p>
    );

    const list = isFetching || data.map(({name}, index) => (
        <li key = { index }><a href={index}>{ name }</a></li>
    ));

    return (
        <>
            <h1>People { status }</h1>
            { errorMessage }
            { loader }
            <ul>
                { list }
            </ul>
        </>
    )
};
