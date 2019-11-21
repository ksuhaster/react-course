// Types
import { types } from './types';

export const studentActions = Object.freeze({
    setStudent: (payload) => {
        return {
            type: types.SET_STUDENT,
            payload
        }
    }
});