import React from 'react';
import { useFilmsFetch } from './hooks/useFilmsFetch';
import { Header } from '../../components/Header';

export const Films = () => {
    const { isFetching, data, error } = useFilmsFetch();

    const errorMessage = error.status === 404 && (
      <p>Not found!</p>
    );

    const loader = isFetching && (
        <p>Loading data from API...</p>
    );

    const url2id = (url) => url.replace('https://swapi.co/api/films/', '');
    const list = isFetching || data.map(({title, url}) => (
        <li key = { url2id(url) }>
            <a href={'/films/' + url2id(url)}>{ title }</a>
        </li>
    ));

    return (
        <>
            <Header>Films</Header>
            { errorMessage }
            { loader }
            <ul>
                { list }
            </ul>
        </>
    )
};
