import { JestAssertionError } from "expect";
import "./customMatcher";

describe("toBeNumber matcher", () => {

    it("fails if the value is not a number", () => {

        expect(() => {

            expect(1).toBeNumber();

        }).not.toThrow(JestAssertionError);

    });


    it("fails if the value is not a number", () => {

        expect(() => {

            expect("1").toBeNumber();

        }).toThrow(JestAssertionError);

    });

});
