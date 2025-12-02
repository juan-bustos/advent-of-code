import { readInput, writeOutput } from '../utils/utils.js';
const input = readInput("/resources/productIds.txt");
function validateId(input) {
    console.log(input);
    return 42;
}
const result = validateId(input);
writeOutput('day2.txt', result);
export default validateId;
