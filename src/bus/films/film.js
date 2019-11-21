import React from 'react';
import { useFilmFetch } from './hooks/useFilmFetch';
import { Header } from '../../components/Header';
import { useParams } from 'react-router-dom';
import './styles.scss';

export const Film = () => {

    const { id } = useParams();

    const {data, isFetching, error} = useFilmFetch(id);
    const {
        title,
        episode_id,
        opening_crawl,
        director,
        producer,
        release_date,
    } = data;

    const errorMessage = error.status === 404 && (
        <p>Not found!</p>
    );

    const loader = isFetching && (
        <p>Loading data from API...</p>
    );

    const pyramid = (str) => {
        if (typeof str !== 'string') {
            return null;
        }
        let arr = str.split(/\s+/);
        let index = 0;
        let len = arr.length;
        let i=0;
        while (index < len) {
            index = index + 3 + i + 2 * i;
            arr.splice(index, 0, '\n');
            i++;
        }
        str = arr.join(' ');
        return <div className="pre-wrap">{ str }</div>;
    };

    const filmCard = isFetching || (
        <>
            <h3>{episode_id}. { title }</h3>

            director: { director }<br />
            producer: { producer }<br />
            release_date: { release_date }<br />
            <br />
            { pyramid(opening_crawl) }<br />

        </>
    );

    return (
        <>
            <Header>Film</Header>
            { errorMessage }
            { loader }
            { filmCard }
        </>
    )
};
