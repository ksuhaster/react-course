import { combineReducers, createStore } from 'redux';

import { filmsReducer as films, filmReducer as film } from '../../bus/films/reducer';
import { peopleReducer as people, personReducer as person } from '../../bus/people/reducer';
import { studentReducer as student } from '../../bus/student/reducer';

import { store } from '../store';

export const referenceRootReducer = combineReducers({
    films,
    film,
    people,
    person,
    student
});

const referenceStore = createStore(referenceRootReducer);

describe('store:', () => {
    test('should have valid state shape', () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    });
});
