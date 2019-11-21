import { filmsReducer, filmReducer } from '../reducer';
import { filmsActions, filmActions } from '../actions';
import { types } from "../types";


describe('film list reducer:', () => {
    test('should return initial state by default', () => {
        expect(filmsReducer(void 0, {})).toMatchSnapshot();
    });

    // Sync
    test(`should handle ${types.FILMS_START_FETCHING} action`, () => {
        expect(filmsReducer(void 0, filmsActions.startFetching())).toMatchSnapshot();
    });
    test(`should handle ${types.FILMS_STOP_FETCHING} action`, () => {
        expect(filmsReducer(void 0, filmsActions.stopFetching())).toMatchSnapshot();
    });
    test(`should handle ${types.FILMS_SET_FETCHING_ERROR} action`, () => {
        expect(filmsReducer(void 0, filmsActions.setFetchingError())).toMatchSnapshot();
    });
    test(`should handle ${types.FILMS_FILL} action`, () => {
        expect(filmsReducer(void 0, filmsActions.fill())).toMatchSnapshot();
    });

    // Async
    test(`should handle ${types.FILMS_FETCH_ASYNC} action`, () => {
        expect(filmsReducer(void 0, filmsActions.fetchAsync())).toMatchSnapshot();
    });
});


describe('one film reducer:', () => {
    test('should return initial state by default', () => {
        expect(filmReducer(void 0, {})).toMatchSnapshot();
    });

    // Sync
    test(`should handle ${types.FILM_START_FETCHING} action`, () => {
        expect(filmReducer(void 0, filmActions.startFetching())).toMatchSnapshot();
    });
    test(`should handle ${types.FILM_STOP_FETCHING} action`, () => {
        expect(filmReducer(void 0, filmActions.stopFetching())).toMatchSnapshot();
    });
    test(`should handle ${types.FILM_SET_FETCHING_ERROR} action`, () => {
        expect(filmReducer(void 0, filmActions.setFetchingError())).toMatchSnapshot();
    });
    test(`should handle ${types.FILM_FILL} action`, () => {
        expect(filmReducer(void 0, filmActions.fill())).toMatchSnapshot();
    });

    // Async
    test(`should handle ${types.FILM_FETCH_ASYNC} action`, () => {
        expect(filmReducer(void 0, filmActions.fetchAsync())).toMatchSnapshot();
    });
});
