import React from 'react';
import { usePersonFetch } from './hooks/usePersonFetch';
import { useLoading } from './hooks/useLoading';
import { Header } from '../../components/Header';
import { useParams } from 'react-router-dom';

export const Person = () => {

    const { id } = useParams();

    const { isDataLoading } = useLoading();
    const status = isDataLoading && 'NOT READY';

    console.log('id before fetch', id);
    const { isFetching, data, error } = usePersonFetch(id);

    const errorMessage = error.status === 404 && (
        <p>Not found!</p>
    );

    const loader = isFetching && (
        <p>Loading data from API...</p>
    );

    console.log('id index.js', id);
    console.log('person index.js', data);
    console.log('error index.js', error);

    return (
        <>
            <Header>Person { status }</Header>
            { errorMessage }
            { loader }
            { (data) ? (
                data.name
            ): null }

        </>
    )
};
