import { peopleActions, personActions} from "../actions";
import expectExport from "expect";

describe("people list actions:", () => {
    // Sync
    test("startFetching", () => {
        expectExport(peopleActions.startFetching()).toMatchSnapshot();
    });
    test("stopFetching", () => {
        expectExport(peopleActions.stopFetching()).toMatchInlineSnapshot(`
      Object {
        "type": "PEOPLE_STOP_FETCHING",
      }
    `);
    });
    test("fill", () => {
        expectExport(peopleActions.fill()).toMatchSnapshot();
    });
    test("setFetchingError", () => {
        expectExport(peopleActions.fill()).toMatchSnapshot();
    });

    // Async
    test("fetchAsync", () => {
        expectExport(peopleActions.fetchAsync()).toMatchSnapshot();
    });
});


describe("one person actions:", () => {
    // Sync
    test("startFetching", () => {
        expectExport(personActions.startFetching()).toMatchSnapshot();
    });
    test("stopFetching", () => {
        expectExport(personActions.stopFetching()).toMatchInlineSnapshot(`
      Object {
        "type": "PERSON_STOP_FETCHING",
      }
    `);
    });
    test("fill", () => {
        expectExport(personActions.fill()).toMatchSnapshot();
    });
    test("setFetchingError", () => {
        expectExport(personActions.fill()).toMatchSnapshot();
    });

    // Async
    test("fetchAsync", () => {
        expectExport(personActions.fetchAsync()).toMatchSnapshot();
    });
});
