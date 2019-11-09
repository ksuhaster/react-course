// Types
import { types } from './types';

export const peopleActions = Object.freeze({
    // Sync
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
    }
});