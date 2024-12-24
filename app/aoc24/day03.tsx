// import { d2p1TestData, d2p1RealData } from "./data/day02-p1.ts";

//import { ssvToNumbers } from "../../api/utilities.ts";
import { AocUi } from "./components/aoc-ui.tsx";
import { realData, testData } from "./data/day03-data.ts";

export function Day03() {
    const testAnswer1: string = solvePuzzle1(true);
    const realAnswer1: string = solvePuzzle1(false);
    const testAnswer2: string = "0"; //GetAoCDay03Puzzle2(true);
    const realAnswer2: string = "0"; //GetAoCDay03Puzzle2(false);

    return (
        <AocUi 
            dayString="03" 
            testAnswer1={testAnswer1} 
            realAnswer1={realAnswer1} 
            testAnswer2={testAnswer2} 
            realAnswer2={realAnswer2} />
    );
}

const re1 = /mul\((\d+),(\d+\))/gm; 
const solvePuzzle1 = (useTestData: boolean) => {
    const data = useTestData ? testData : realData;
    
    const matches = data.matchAll(re1);
    let sum = 0;
    for (const match of matches) {
        const num1 = parseInt(match[1]);
        const num2 = parseInt(match[2]);
        sum += num1 * num2;
    }
    return sum.toString();
}

/*
As you scan through the corrupted memory, you notice that some of the conditional statements are also still intact. If you handle some of the uncorrupted conditional statements in the program, you might be able to get an even more accurate result.

There are two new instructions you'll need to handle:

    The do() instruction enables future mul instructions.
    The don't() instruction disables future mul instructions.

Only the most recent do() or don't() instruction applies. At the beginning of the program, mul instructions are enabled.

For example:

xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))

This corrupted memory is similar to the example from before, but this time the mul(5,5) and mul(11,8) instructions are disabled because there is a don't() instruction before them. The other mul instructions function normally, including the one at the end that gets re-enabled by a do() instruction.

This time, the sum of the results is 48 (2*4 + 8*5).
*/