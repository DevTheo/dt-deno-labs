export const parseSpaceSeparatedValues = (input: string) => 
    input.split("\n").map(i => i.trim().split(" ").filter(i => i && i.length > 0));

export const ssvToNumbers = (input: string) => 
    parseSpaceSeparatedValues(input).map(i => i.map(j => parseInt(j, 10)));

export const getlogger = (shouldLog: boolean) => (shouldLog) ? 
    console.log : 
    // deno-lint-ignore no-explicit-any
    (_: any) => {  };
