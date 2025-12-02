import { readInput, writeOutput } from "../utils/utils.js";
const input = readInput("day2/resources/tempTest.txt");
function validateId(input) {
    const productIds = input.trim().split(",");
    const [min, max] = getIdRangeValues(productIds);
    const beginRange = min ? min : -Infinity;
    const maxRange = max ? max : Infinity;
    for (let index = 0; beginRange < maxRange; index++) {
        console.log(index);
    }
    return 42;
}
function getIdRangeValues(input) {
    return input.map((range) => {
        const [min, max] = range.split("-");
        return [Number(min), Number(max)];
    });
}
const result = validateId(input);
writeOutput("day2.txt", result);
export default validateId;
