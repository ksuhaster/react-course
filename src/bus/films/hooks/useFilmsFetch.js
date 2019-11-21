import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { filmsActions } from '../actions';


export const useFilmsFetch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filmsActions.fetchAsync());
    }, [dispatch]);

    const {data, isFetching, error } = useSelector((state) => state.films);

    return {
        data,
        isFetching,
        error
    }
};