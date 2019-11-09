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
    // Async
    fetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.PEOPLE_FETCH_ASYNC
        });

        dispatch(peopleActions.startFetching());

        const response = await api.people.fetch();
        const { results } = await response.json();

        dispatch(peopleActions.fill(results));
        dispatch(peopleActions.stopFetching());
    }
});