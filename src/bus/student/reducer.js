// Types
import { types } from './types';

const initialState = {
    formIsNew: true,
    firstName: '',
    surname: '',
    password: '',
    confirmpassword: '',
    age: '',
    email: '',
    sex: '',
    speciality: ''
};

export const studentReducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case types.SET_STUDENT:
            return { ...state, ...payload };

        default:
            return state;
    }
}