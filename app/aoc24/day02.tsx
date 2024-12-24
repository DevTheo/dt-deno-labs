import { d2p1TestData, d2p1RealData } from "./data/day02-p1.ts";

import { ssvToNumbers } from "../../api/utilities.ts";
import { AocUi } from "./components/aoc-ui.tsx";

export function Day02() {
    const testAnswer1: string = GetAoCDay02Puzzle1(true);
    const realAnswer1: string = GetAoCDay02Puzzle1(false);
    const testAnswer2: string = GetAoCDay02Puzzle2(true);
    const realAnswer2: string = GetAoCDay02Puzzle2(false);

    return (
        <AocUi 
            dayString="02" 
            testAnswer1={testAnswer1} 
            realAnswer1={realAnswer1} 
            testAnswer2={testAnswer2} 
            realAnswer2={realAnswer2} />
    );
}

const GetAoCDay02Puzzle1 = (isTest: boolean): string => {
 
    const input = isTest ? d2p1TestData.trim() : d2p1RealData.trim();
    
    const dataset = ssvToNumbers(input);

    const checks = dataset.map(line => {

        const check = CheckLevels(line); 
        return check.valid;
    });
    
    return `${checks.filter(i => i === true).length}`;
};

const CheckLevels = (line: number[]) => {
    let valid = true;
    const details = [] as boolean[];
    const isIncreasing = line[1] > line[0];        
    for (let i = 1; i < line.length; i++) {
        const diff = isIncreasing ? line[i] - line[i-1] : line[i-1] - line[i];
        const check = diff > 0 && diff <= 3; 
        details[details.length] = check; 
        valid &&= check
    }
    return {valid, details};
}

const GetAoCDay02Puzzle2 = (isTest: boolean): string => {
    const input = isTest ? d2p1TestData.trim() : d2p1RealData.trim();
    
    const dataset = ssvToNumbers(input);

    const checks = dataset.map(line => {
        const check = CheckLevels(line); 
        if(check.valid) {
            return true;
        }

        for (let i = 0; i < line.length; i++) {
            const newArr = line.slice(0, i).concat(line.slice(i+1));
            const check2 = CheckLevels(newArr);
            if(check2.valid) {
                return true;
            }
        }
        return false;
      });
    
    return `${checks.filter(i => i === true).length}`;
};