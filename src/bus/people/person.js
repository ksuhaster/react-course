import React from 'react';
import { usePersonFetch } from './hooks/usePersonFetch';
import { useLoading } from './hooks/useLoading';
import { Header } from '../../components/Header';
import { useParams } from 'react-router-dom';

export const Person = () => {

    const { id } = useParams();

    const { isDataLoading } = useLoading();
    const status = isDataLoading && 'NOT READY';

    const {data, isFetching, error} = usePersonFetch(id);

    const errorMessage = error.status === 404 && (
        <p>Not found!</p>
    );

    const loader = isFetching && (
        <p>Loading data from API...</p>
    );

    return (
        <>
            <Header>Person { status }</Header>
            { errorMessage }
            { loader }
            name: { data.name}<br />
            height: { data.height}<br />


        </>
    )
};
