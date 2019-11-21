import { peopleReducer, personReducer } from '../reducer';
import { peopleActions, personActions } from '../actions';
import { types } from "../types";


describe('person list reducer:', () => {
    test('should return initial state by default', () => {
        expect(peopleReducer(void 0, {})).toMatchSnapshot();
    });

    // Sync
    test(`should handle ${types.PEOPLE_START_FETCHING} action`, () => {
        expect(peopleReducer(void 0, peopleActions.startFetching())).toMatchSnapshot();
    });
    test(`should handle ${types.PEOPLE_STOP_FETCHING} action`, () => {
        expect(peopleReducer(void 0, peopleActions.stopFetching())).toMatchSnapshot();
    });
    test(`should handle ${types.PEOPLE_SET_FETCHING_ERROR} action`, () => {
        expect(peopleReducer(void 0, peopleActions.setFetchingError())).toMatchSnapshot();
    });
    test(`should handle ${types.PEOPLE_FILL} action`, () => {
        expect(peopleReducer(void 0, peopleActions.fill())).toMatchSnapshot();
    });

    // Async
    test(`should handle ${types.PEOPLE_FETCH_ASYNC} action`, () => {
        expect(peopleReducer(void 0, peopleActions.fetchAsync())).toMatchSnapshot();
    });
});


describe('one person reducer:', () => {
    test('should return initial state by default', () => {
        expect(personReducer(void 0, {})).toMatchSnapshot();
    });

    // Sync
    test(`should handle ${types.PERSON_START_FETCHING} action`, () => {
        expect(personReducer(void 0, personActions.startFetching())).toMatchSnapshot();
    });
    test(`should handle ${types.PERSON_STOP_FETCHING} action`, () => {
        expect(personReducer(void 0, personActions.stopFetching())).toMatchSnapshot();
    });
    test(`should handle ${types.PERSON_SET_FETCHING_ERROR} action`, () => {
        expect(personReducer(void 0, personActions.setFetchingError())).toMatchSnapshot();
    });
    test(`should handle ${types.PERSON_FILL} action`, () => {
        expect(personReducer(void 0, personActions.fill())).toMatchSnapshot();
    });

    // Async
    test(`should handle ${types.PERSON_FETCH_ASYNC} action`, () => {
        expect(personReducer(void 0, personActions.fetchAsync())).toMatchSnapshot();
    });
});
