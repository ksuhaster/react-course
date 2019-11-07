// Types
import { types } from './types';

export const studentActions = Object.freeze({
    setName: (payload) => {
        return {
            type: types.SET_NAME,
            payload
        }
    }
});