export const parseSpaceSeparatedValues = (input: string) => 
    input.split("\n").map(i => i.trim().split(" ").filter(i => i && i.length > 0));

export const ssvToNumbers = (input: string) => 
    parseSpaceSeparatedValues(input).map(i => i.map(j => parseInt(j, 10)));

export const getSectionsSplitOnEmptyLine = (input: string) =>
{
  const sections = [[]] as string[][];
  const lines = input.trim().split("\n");
  let index = 0;
  while ((lines[index] ?? "").trim().length > 0) {
    sections[0] = [...sections[0], lines[index]];
    index++;
  }
  sections[1] = lines.slice(index+1);
  return sections; 
} 

export const getlogger = (shouldLog: boolean) => (shouldLog) ? 
    console.log : 
    // deno-lint-ignore no-explicit-any
    (_: any) => {  };
