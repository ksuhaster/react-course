// Types
import { types } from './types';

const initialState = {
    data: [],
    isFetching: false,
    error: false
};

export const peopleReducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case types.PEOPLE_START_FETCHING:
            return { ...state, isFetching: true };
        case types.PEOPLE_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.PEOPLE_SET_FETCHING_ERROR:
            return { ...state, error: payload };
        case types.PEOPLE_FILL:
            return { ...state, data: payload };

        default:
            return state;
    }
};