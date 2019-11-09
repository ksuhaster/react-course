import React from 'react';
import { usePeopleFetch } from './hooks/usePeopleFetch';
import { useLoading } from './hooks/useLoading';
import { Header } from '../../components/Header';
import { useParams } from 'react-router-dom';

export const Person = () => {

    const { id } = useParams();

    const { isDataLoading } = useLoading();
    const status = isDataLoading && 'NOT READY';

    const { isFetching, data, error } = usePeopleFetch();

    const errorMessage = error.status === 404 && (
        <p>Not found!</p>
    );

    const loader = isFetching && (
        <p>Loading data from API...</p>
    );

    console.log('id', id);
    console.log('data[id]', data[id]);
    const person = data && data[id];

    return (
        <>
            <Header>Person { status }</Header>
            { errorMessage }
            { loader }

            { (person) ? (
                person.name
            ): null }

        </>
    )
};
