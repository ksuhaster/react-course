import React from 'react';
import { usePersonFetch } from './hooks/usePersonFetch';
import { Header } from '../../components/Header';
import { useParams } from 'react-router-dom';

export const Person = () => {

    const { id } = useParams();

    const {data, isFetching, error} = usePersonFetch(id);
    const {
        name,
        birth_year,
        gender,
        height,
        eye_color,
        hair_color,
        skin_color,
        mass
    } = data;

    const errorMessage = error.status === 404 && (
        <p>Not found!</p>
    );

    const loader = isFetching && (
        <p>Loading data from API...</p>
    );

    const personCard = isFetching || (
        <>
            name: { name }<br />
            birth_year: { birth_year }<br />
            gender: { gender }<br />
            height: { height }<br />
            eye_color: { eye_color }<br />
            hair_color: { hair_color }<br />
            skin_color: { skin_color }<br />
            mass: { mass }<br />
        </>
    );

    return (
        <>
            <Header>Person</Header>
            { errorMessage }
            { loader }
            { personCard }
        </>
    )
};
