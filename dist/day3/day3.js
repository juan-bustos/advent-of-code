import { readInput, writeOutput } from "../utils/utils.js";
const input = readInput("day3/resources/tempTest.txt");
function findHighestVoltage(input) {
    const bankRows = input.trim().split('\n');
    for (const bankRow of bankRows) {
        console.log(bankRow);
    }
    return 42;
}
const result = findHighestVoltage(input);
writeOutput("day3.txt", result);
export default findHighestVoltage;
//# sourceMappingURL=day3.js.map