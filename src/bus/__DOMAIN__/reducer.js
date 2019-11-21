// Types
import { types } from './types';

const initialState = {
    property: ''
};

export const domainReducer = ( state = initialState, { type } ) => {
    switch (type) {
        case types.DOMAIN_ACTION:
            return { ...state, property: '' };
    
        default:
            return state;
    }
}