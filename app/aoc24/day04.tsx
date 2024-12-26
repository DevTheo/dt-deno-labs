import { AocUi } from "./components/aoc-ui.tsx";
//import { realData, testData, testData2 } from "./data/day00-data.ts";

export function Day04() {
    const testAnswer1: string = "0"; //solvePuzzle1(true);
    const realAnswer1: string = "0"; //solvePuzzle1(false);
    const testAnswer2: string = "0"; //solvePuzzle2(true);
    const realAnswer2: string = "0"; //solvePuzzle2(false);

    return (
        <AocUi 
            dayString="04" 
            testAnswer1={testAnswer1} 
            realAnswer1={realAnswer1} 
            testAnswer2={testAnswer2} 
            realAnswer2={realAnswer2} />
    );
}
