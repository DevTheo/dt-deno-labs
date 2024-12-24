// import { d2p1TestData, d2p1RealData } from "./data/day02-p1.ts";

//import { ssvToNumbers } from "../../api/utilities.ts";
import { AocUi } from "./components/aoc-ui.tsx";

export function Day03() {
    const testAnswer1: string = "0"; //GetAoCDay03Puzzle1(true);
    const realAnswer1: string = "0"; //GetAoCDay03Puzzle1(false);
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
