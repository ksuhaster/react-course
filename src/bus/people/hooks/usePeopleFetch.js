import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { peopleActions } from '../actions';

export const usePeopleFetch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(peopleActions.fetchAsync());
    }, [dispatch]);

    const {data, isFetching, error } = useSelector((state) => state.people);

    return {
        data,
        isFetching,
        error
    }
};