
//import { ssvToNumbers } from "../../api/utilities.ts";
import { AocUi } from "./components/aoc-ui.tsx";
import { realData, testData, testData2 } from "./data/day03-data.ts";

export function Day03() {
    const testAnswer1: string = solvePuzzle1(true);
    const realAnswer1: string = solvePuzzle1(false);
    const testAnswer2: string = solvePuzzle2(true);
    const realAnswer2: string = solvePuzzle2(false);

    return (
        <AocUi 
            dayString="03" 
            testAnswer1={testAnswer1} 
            realAnswer1={realAnswer1} 
            testAnswer2={testAnswer2} 
            realAnswer2={realAnswer2} />
    );
}

const reMul = /mul\((\d+),(\d+\))/gm; 
const reParser = /(mul\(\d+,\d+\))|(do\(\))|(don't\(\))/gm;
const reDo = /(do)\(\)/;
const reDont = /(don't)\(\)/;

const solvePuzzle1 = (useTestData: boolean) => {
    const data = useTestData ? testData : realData;
    
    const matches = data.matchAll(reMul);
    let sum = 0;
    for (const match of matches) {
        const num1 = parseInt(match[1], 10);
        const num2 = parseInt(match[2], 10);
        sum += num1 * num2;
    }
    return sum.toString();
}


const solvePuzzle2 = (useTestData: boolean) => {
    const data = useTestData ? testData2 : realData;

    const matches = data.matchAll(reParser);
    let processing = true;
    let sum = 0;
    for (const match of matches) {
        if(reDo.test(match[0].toString())) {
            processing = true;
        } else if(reDont.test(match[0].toString())) {
            processing = false;
        } else if (processing) { // mul operation
            const mulOps = match[0].toString().matchAll(reMul);
            for (const mulOp of mulOps) {
                const num1 = parseInt(mulOp[1]);
                const num2 = parseInt(mulOp[2]);
                sum += num1 * num2;    
            }
        }
    }
    return sum.toString();
}