import { getlogger, getSectionsSplitOnEmptyLine } from "../../api/utilities.ts";
import { AocUi } from "./components/aoc-ui.tsx";
import { realData, testData1 } from "./data/day05-data.ts";

export function Day05() {
    const testAnswer1: string = solvePuzzle(true);
    const realAnswer1: string = solvePuzzle(false);
    const testAnswer2: string = solvePuzzle(true, false);
    const realAnswer2: string = solvePuzzle(false, false);

    return (
        <AocUi 
            dayString="05" 
            testAnswer1={testAnswer1} 
            realAnswer1={realAnswer1} 
            testAnswer2={testAnswer2} 
            realAnswer2={realAnswer2} />
    );
}

const solvePuzzle = (useTestData: boolean, puzzle1: boolean = true) => {
    //const log = getlogger(!useTestData);
    const data = useTestData ? testData1 : realData;
    const sections = getSectionsSplitOnEmptyLine(data);
    const rules = sections[0].map((line) => line.split("|").map(i => parseInt(i, 10)));
    const updates = sections[1].map((line) => line.split(",").map(i => parseInt(i, 10)));
    let sum = 0;
    for (let i =0; i < updates.length; i++) {
        const update = updates[i];
        const isRightOrder = isInRightOrder(update, rules); 
        if(puzzle1 && isRightOrder)
        {   
            // Remember indexes are in 0 order, so dividing the length by 2 will 
            // yield the proper index
            const middleNum = update[Math.floor((update.length - 1)/ 2)];
            sum += middleNum;
        } else if (!puzzle1 && !isRightOrder) {
            const reordered : number[] = reorderUpdate(update, rules);
            const middleNum = reordered[Math.floor((reordered.length - 1)/ 2)];
            sum += middleNum;
        }
    }
    return sum.toString();
}


const isInRightOrder = (update: number[], rules: number[][]) => {
    let result = true;
    for (const rule of rules) {
        if( update.indexOf(rule[0]) !== -1 && 
            update.indexOf(rule[1]) !== -1 &&
            update.indexOf(rule[1]) < update.indexOf(rule[0])) {
            result = false;
            break;
        }
    }
    return result;
}

function reorderUpdate(update: number[], rules: number[][]): number[] {
    const reordered: number[] = [...update];

    let attempt= 0;
    while (!isInRightOrder(reordered, rules) && attempt < rules.length) {
        for (const rule of rules) {
            const rule0Index = reordered.indexOf(rule[0]);
            const rule1Index = reordered.indexOf(rule[1]);
            
            if( rule0Index !== -1 && 
                rule1Index !== -1 &&
                rule1Index < rule0Index) {
                    reordered[rule1Index] = rule[0];
                    reordered[rule0Index] = rule[1];
                }
            }  
        attempt++;          
    }
    return reordered;
}