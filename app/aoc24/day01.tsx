import { findTargetHandler } from "hono/utils/handler";
import { puzzle1RealData, puzzle1TestData } from "./data/day01-p1.ts";
import { puzzle2TestData } from "./data/day01-p2.ts";

export function Day01() {
    const testAnswer1: string = GetAoCDay01Puzzle1(true);
    const realAnswer1: string = GetAoCDay01Puzzle1(false);
    const testAnswer2: string = GetAoCDay01Puzzle2(true);
    const realAnswer2: string = GetAoCDay01Puzzle2(false);

    return(
        <div class="row">
            <div id="main" class="s-content__main large-8 column">

                <article class="entry" id="hx-content">

                    <header class="entry__header">
                        <h2 class="entry__title h1">
                            Advent of Code Day 01
                        </h2>
                    </header>
                    
                    <div class="entry__content">
                        <h5>First Puzzle</h5>
                        <ul>
                            <li>Test Answer: {testAnswer1}</li>
                            <li>Real Answer: {realAnswer1}</li>
                        </ul>
                        <h5>Second Puzzle</h5>
                        <ul>
                            <li>Test Answer: {testAnswer2}</li>
                            <li>Real Answer: {realAnswer2}</li>
                        </ul>
                    </div>

                </article> {/* end entry */}

            </div> {/* end main */}
        </div>);
}


function GetAoCDay01Puzzle1(useTestData: boolean) {
    const data = useTestData ? puzzle1TestData : puzzle1RealData;
    const lines = data.split("\n");
    const dataset = lines.map(i => {
        const strings = i.trim().split(" ");
        const num1 = parseInt(strings[0], 10);
        const num2 = parseInt(strings[strings.length - 1], 10);
        return [num1, num2];
    });
    
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
    const data = useTestData ? puzzle2TestData : puzzle1RealData;
    const lines = data.split("\n");
    const dataset = lines.map(i => {
        const strings = i.trim().split(" ");
        const num1 = parseInt(strings[0], 10);
        const num2 = parseInt(strings[strings.length - 1], 10);
        return [num1, num2];
    });
    
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

    return `${total} -- ${JSON.stringify(results)}`;
}
