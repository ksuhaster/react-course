import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { personActions } from '../actions';


export const usePersonFetch = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(personActions.fetchAsync(id));
    }, [dispatch, id]);

    const {data, isFetching, error} = useSelector((state) => state.person);

    return {
        data,
        isFetching,
        error
    }
};
