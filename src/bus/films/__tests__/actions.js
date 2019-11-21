import { filmsActions, filmActions} from "../actions";
import expectExport from "expect";

describe("film list actions:", () => {
    // Sync
    test("startFetching", () => {
        expectExport(filmsActions.startFetching()).toMatchSnapshot();
    });
    test("stopFetching", () => {
        expectExport(filmsActions.stopFetching()).toMatchInlineSnapshot(`
      Object {
        "type": "FILMS_STOP_FETCHING",
      }
    `);
    });
    test("fill", () => {
        expectExport(filmsActions.fill()).toMatchSnapshot();
    });
    test("setFetchingError", () => {
        expectExport(filmsActions.fill()).toMatchSnapshot();
    });

    // Async
    test("fetchAsync", () => {
        expectExport(filmsActions.fetchAsync()).toMatchSnapshot();
    });
});


describe("one film actions:", () => {
    // Sync
    test("startFetching", () => {
        expectExport(filmActions.startFetching()).toMatchSnapshot();
    });
    test("stopFetching", () => {
        expectExport(filmActions.stopFetching()).toMatchInlineSnapshot(`
      Object {
        "type": "FILM_STOP_FETCHING",
      }
    `);
    });
    test("fill", () => {
        expectExport(filmActions.fill()).toMatchSnapshot();
    });
    test("setFetchingError", () => {
        expectExport(filmActions.fill()).toMatchSnapshot();
    });

    // Async
    test("fetchAsync", () => {
        expectExport(filmActions.fetchAsync()).toMatchSnapshot();
    });
});
