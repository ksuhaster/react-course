import { combineReducers } from 'redux';

import { studentReducer as student } from '../bus/student/reducer';

export const rootReducer = combineReducers({
    student
});