import { getlogger } from "../../api/utilities.ts";
import { AocUi } from "./components/aoc-ui.tsx";
import { testData1, realData } from "./data/day04-data.ts";

export function Day04() {
    const testAnswer1: string = solvePuzzle1(true);
    const realAnswer1: string = solvePuzzle1(false);
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

const solvePuzzle1 = (useTestData: boolean) => {
    const log = getlogger(useTestData);
    const data = useTestData ? testData1 : realData;
    const searchString = "XMAS".split('');
    const searchLength = searchString.length;
    let count = 0;
    const input = data.trim().split("\n").map(ln => ln.trim().split(''));
    const lineLength = input.length;
    for (let linenum = 0; linenum < lineLength; linenum++) {
        const colcount = input[linenum].length;
        for(let colnum = 0; colnum < colcount; colnum++) {
            const canLookRight = colnum <= (colcount - searchLength);
            const canLookLeft = colnum >= searchLength-1;
            const canLookDown = linenum <= (lineLength - searchLength);
            const canLookUp = linenum >= searchString.length-1;

            // search left to right
            if (    
                canLookRight && 
                input[linenum][colnum] === searchString[0] && 
                input[linenum][colnum + 1] === searchString[1] && 
                input[linenum][colnum + 2] === searchString[2] && 
                input[linenum][colnum + 3] === searchString[3]) {
                    count ++;
                    log(`${linenum} ${colnum} l2r`);
            }
            // search right to right
            if (    
                canLookLeft &&
                input[linenum][colnum] === searchString[0] && 
                input[linenum][colnum - 1] === searchString[1] && 
                input[linenum][colnum - 2] === searchString[2] && 
                input[linenum][colnum - 3] === searchString[3]) {
                    count ++;
                    log(`${linenum} ${colnum} r2l`);
            }
            // search up to down
            if (    
                canLookDown &&
                input[linenum][colnum] === searchString[0] && 
                input[linenum + 1][colnum] === searchString[1] && 
                input[linenum + 2][colnum] === searchString[2] && 
                input[linenum + 3][colnum] === searchString[3]) {
                    count ++;
                    log(`${linenum} ${colnum} u2d`);
            }

            // search down to up
            if ( 
                canLookUp &&
                input[linenum][colnum] === searchString[0] && 
                input[linenum - 1][colnum] === searchString[1] && 
                input[linenum - 2][colnum] === searchString[2] && 
                input[linenum - 3][colnum] === searchString[3]) {
                    count ++;
                    log(`${linenum} ${colnum} d2u`);
            }
            // diagonal dnright
            if ( 
                canLookDown && canLookRight &&
                input[linenum][colnum] === searchString[0] && 
                input[linenum + 1][colnum + 1] === searchString[1] && 
                input[linenum + 2][colnum + 2] === searchString[2] && 
                input[linenum + 3][colnum + 3] === searchString[3]) {
                    count ++;
                    log(`${linenum} ${colnum} 2dr`);
            }
            // diagonal upright
            if ( 
                canLookUp && canLookRight &&
                input[linenum][colnum] === searchString[0] && 
                input[linenum - 1][colnum + 1] === searchString[1] && 
                input[linenum - 2][colnum + 2] === searchString[2] && 
                input[linenum - 3][colnum + 3] === searchString[3]) {
                    count ++;
                    log(`${linenum} ${colnum} 2ur`);
            }
        
            // diagonal dnleft
            if ( 
                canLookDown && canLookLeft &&
                input[linenum][colnum] === searchString[0] && 
                input[linenum + 1][colnum - 1] === searchString[1] && 
                input[linenum + 2][colnum - 2] === searchString[2] && 
                input[linenum + 3][colnum - 3] === searchString[3]) {
                    count ++;
                    log(`${linenum} ${colnum} 2dl`);
            }
            // diagonal upleft
            if ( 
                canLookUp && canLookLeft &&
                input[linenum][colnum] === searchString[0] && 
                input[linenum - 1][colnum - 1] === searchString[1] && 
                input[linenum - 2][colnum - 2] === searchString[2] && 
                input[linenum - 3][colnum - 3] === searchString[3]) {
                    count ++;
                    log(`${linenum} ${colnum} 2ul`);
            }
        }
    }

    return count.toString();
}

/*
The Elf looks quizzically at you. Did you misunderstand the assignment?

Looking for the instructions, you flip over the word search to find that this isn't actually an XMAS puzzle; it's an X-MAS puzzle in which you're supposed to find two MAS in the shape of an X. One way to achieve that is like this:

M.S
.A.
M.S

Irrelevant characters have again been replaced with . in the above diagram. Within the X, each MAS can be written forwards or backwards.

Here's the same example from before, but this time all of the X-MASes have been kept instead:

.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........

In this example, an X-MAS appears 9 times.
*/