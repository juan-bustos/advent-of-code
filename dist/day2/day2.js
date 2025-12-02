import { readInput, writeOutput } from "../utils/utils.js";
const input = readInput("day2/resources/productIds.txt");
function validateId(input) {
    const productIds = input.trim().split(",");
    const ranges = getIdRangeValues(productIds);
    const invalidIDs = [];
    for (const [min, max] of ranges) {
        for (let id = min; id <= max; id++) {
            if (hasRepeatedSequence(id)) {
                invalidIDs.push(id);
            }
        }
    }
    const result = { invalidIDs, result: addInvalidIds(invalidIDs) };
    return JSON.stringify(result);
}
function addInvalidIds(input) {
    const initialValue = 0;
    const result = input.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    return result;
}
function hasRepeatedSequence(input) {
    const inputString = String(input);
    const stringLength = inputString.length;
    for (let subStringLength = 1; subStringLength <= Math.floor(stringLength / 2); subStringLength++) {
        if (stringLength % subStringLength !== 0)
            continue;
        const times = stringLength / subStringLength;
        // if (times < 2 || times % 2 !== 0) continue; // must repeat at least twice and even number of times
        const slice = inputString.slice(0, subStringLength);
        if (slice.repeat(times) === inputString) {
            return true;
        }
    }
    return false;
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
//# sourceMappingURL=day2.js.map