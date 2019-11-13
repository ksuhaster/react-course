import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { personActions } from '../actions';


export const usePersonFetch = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect', id);
        dispatch(personActions.fetchAsync(id));
    }, [dispatch, id]);

    const {data, isFetching, error} = useSelector((state) => state.people);

    console.log('person usePersonFetch', data);

    return {
        data,
        isFetching,
        error
    }
};
