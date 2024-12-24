import { ssvToNumbers } from "../../api/utilities.ts";
import { AocUi } from "./components/aoc-ui.tsx";
import { puzzle1RealData, puzzle1TestData } from "./data/day01-p1.ts";
import { puzzle2TestData } from "./data/day01-p2.ts";

export function Day01() {
    const testAnswer1: string = GetAoCDay01Puzzle1(true);
    const realAnswer1: string = GetAoCDay01Puzzle1(false);
    const testAnswer2: string = GetAoCDay01Puzzle2(true);
    const realAnswer2: string = GetAoCDay01Puzzle2(false);

    return (
        <AocUi 
            dayString="01" 
            testAnswer1={testAnswer1} 
            realAnswer1={realAnswer1} 
            testAnswer2={testAnswer2} 
            realAnswer2={realAnswer2} />
    );
}


function GetAoCDay01Puzzle1(useTestData: boolean) {
    const dataset = ssvToNumbers(useTestData ? puzzle1TestData : puzzle1RealData);
    
    const badRows = dataset.filter(i => isNaN(i[0]) || isNaN(i[1])); 
    if(badRows && badRows.length > 0) {
        console.log(JSON.stringify(badRows));
        throw new Error("Invalid data");
    }
    const left = dataset.map(i => i[0]).sort();
    const right = dataset.map(i => i[1]).sort();
    const distances: number[] = [];
    for(let i = 0; i < left.length; i++) {
        distances[distances.length] = Math.abs(left[i] - right[i]);
    }

    const totaldist = distances.reduce((acc, i) => {
        return acc + i;
    }, 0);

    return `${totaldist}`; // -- ${JSON.stringify(distances)}`;
}

function GetAoCDay01Puzzle2(useTestData: boolean) {
    const dataset = ssvToNumbers(useTestData ? puzzle1TestData : puzzle1RealData);
    
    const badRows = dataset.filter(i => isNaN(i[0]) || isNaN(i[1])); 
    if(badRows && badRows.length > 0) {
        console.log(JSON.stringify(badRows));
        throw new Error("Invalid data");
    }
    const left = dataset.map(i => i[0]).sort();
    const right = dataset.map(i => i[1]).sort();
    const results: number[] = [];
    for(let i = 0; i < left.length; i++) {
        const count = (right.filter(j => j === left[i]) || []).length;
        results[results.length] = count * left[i];
    }

    const total = results.reduce((acc, i) => {
        return acc + i;
    }, 0);

    return `${total}`;
}
