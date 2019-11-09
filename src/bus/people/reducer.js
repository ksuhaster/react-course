// Types
import { types } from './types';

const initialState = {
    data: []
};

export const peopleReducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case types.PEOPLE_FILL:
            return { ...state, data: payload };

        default:
            return state;
    }
};