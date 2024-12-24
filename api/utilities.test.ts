import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { parseSpaceSeparatedValues, ssvToNumbers } from "./utilities.ts";

describe("parseSpaceSeparatedValues", () => {
    [
        { input: "11 2 3", expected: [["11", "2", "3"]] },
        { input: "11    3", expected: [["11","3"]] },
        { input: "1 2 3\n14 5 16", expected: [["1", "2", "3"], ["14", "5", "16"]] },
        { input: "1 2 3\n4 5 6\n17 8 9", expected: [["1", "2", "3"], ["4", "5", "6"], ["17", "8", "9"]] },
    ].forEach(({ input, expected }) =>
        it(`should do splitting properly for ${input.replace(/\n/g, "\\n")}`, () => {
            expect(parseSpaceSeparatedValues(input)).toEqual(expected);
        })
    );
});

describe("ssvToNumbers", () => {
    [
        { input: "42 41 38 36 34 32 29 28", expected: [[42, 41, 38, 36, 34, 32, 29, 28]] },
        { input: "11 2 3", expected: [[11, 2, 3]] },
        { input: "11    3", expected: [[11, 3]] },
        { input: "1 2 3\n14 5 16", expected: [[1, 2, 3], [14, 5, 16]] },
        { input: "1 2 3\n4 5 6\n17 8 9", expected: [[1, 2, 3], [4, 5, 6], [17, 8, 9]] },
    ].forEach(({ input, expected }) =>
        it(`should do splitting properly for ${input.replace(/\n/g, "\\n")}`, () => {
            expect(ssvToNumbers(input)).toEqual(expected);
        })
    )
});