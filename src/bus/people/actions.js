// Types
import { types } from './types';

import { api } from '../../api';

export const peopleActions = Object.freeze({
    // Sync
    startFetching: () => {
        return {
            type: types.PEOPLE_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.PEOPLE_STOP_FETCHING,
        }
    },
    fill: (payload) => {
        return {
            type: types.PEOPLE_FILL,
            payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.PEOPLE_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    // Async
    fetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.PEOPLE_FETCH_ASYNC
        });

        dispatch(peopleActions.startFetching());

        const response = await api.people.fetch();
        console.log('response fetchAsync', response);

        if (response.status === 200) {
            const { results } = await response.json();

            dispatch(peopleActions.fill(results));
        } else {
            const error = {
                status: response.status
            };

            dispatch(peopleActions.setFetchingError(error));
        }

        dispatch(peopleActions.stopFetching());
    }
});


export const personActions = Object.freeze({
    // Sync
    startFetching: () => {
        return {
            type: types.PERSON_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.PERSON_STOP_FETCHING,
        }
    },
    fill: (payload) => {
        return {
            type: types.PERSON_FILL,
            payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.PERSON_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    // Async
    fetchAsync: (id) => async (dispatch) => {
        console.log('actions.js fetchAsync', id);
        dispatch({
            type: types.PERSON_FETCH_ASYNC
        });

        dispatch(personActions.startFetching());

        const response = await api.person.fetch(parseInt(id)+1);
        console.log('response fetchAsync', response);

        if (response.status === 200) {
            const { results } = await response.json();

            console.log('results fetchAsync', results);

            dispatch(personActions.fill(results));
            console.log('results fetchAsync', results);
        } else {
            const error = {
                status: response.status
            };

            dispatch(personActions.setFetchingError(error));
        }

        dispatch(personActions.stopFetching());
    }
});