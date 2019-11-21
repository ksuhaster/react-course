import { studentActions } from "../actions";
import expectExport from "expect";

describe("student actions:", () => {
    test("setStudent", () => {
        expectExport(studentActions.setStudent()).toMatchSnapshot();
    });
});
