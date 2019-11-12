import { combineReducers } from 'redux';

import { studentReducer as student } from '../bus/student/reducer';
import { peopleReducer as people } from '../bus/people/reducer';
import { personReducer as person } from '../bus/people/reducer';

export const rootReducer = combineReducers({
    student,
    people,
    person
});