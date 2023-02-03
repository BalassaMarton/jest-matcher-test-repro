import { isError } from "@jest/expect-utils";
import { ExpectationResult } from "expect";
import { isRegExp } from "util/types";

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeNumber(): R;
        }
    }
}

expect.extend({

    toBeNumber(this: jest.MatcherContext, received: any): ExpectationResult {

        if (typeof received !== "number") {
            return {
                pass: false,
                message: () => `Expected received to be a number but found ${received}.`
            };
        }
        return {
            pass: true,
            message: () => "Expected received to be a number."
        }
    }
});
