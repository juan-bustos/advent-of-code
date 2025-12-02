import { readInput, writeOutput } from "../utils/utils.js";

const input = readInput("day2/resources/productIds.txt");

function validateId(input: string): any {
  const productIds = input.trim().split(",");
  const ranges = getIdRangeValues(productIds);
  const invalidIDs: number[] = [];

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

function addInvalidIds(input: number[]): number {
  const initialValue = 0;
  const result = input.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );

  return result;
}

function hasRepeatedSequence(input: number): boolean {
  const inputString = String(input);
  const stringLength = inputString.length;

  for (
    let subStringLength = 1;
    subStringLength <= Math.floor(stringLength / 2);
    subStringLength++
  ) {
    if (stringLength % subStringLength !== 0) continue;

    const times = stringLength / subStringLength;
    // if (times < 2 || times % 2 !== 0) continue; // must repeat at least twice and even number of times

    const slice = inputString.slice(0, subStringLength);
    if (slice.repeat(times) === inputString) {
      return true;
    }
  }

  return false;
}

function getIdRangeValues(input: string[]): [number, number][] {
  return input.map((range) => {
    const [min, max] = range.split("-");
    return [Number(min), Number(max)];
  });
}

// chatGPT approach for better space complexity
//
/**
 * Sum of all invalid IDs in a set of ranges.
 * Invalid = has a repeated sequence of digits (at least 2 repeats)
function sumInvalidIds(input: string): number {
  let total = 0; // Running sum of invalid numbers

  // Split input into ranges like "95-115,220-233"
  const ranges = input.trim().split(",");

  for (const range of ranges) {
    const [min, max] = range.split("-").map(Number);

    // Iterate over every number in the range
    for (let n = min; n <= max; n++) {
      if (hasRepeatedSequence(n)) {
        total += n; // Add to sum directly
      }
    }
  }

  return total;
}

/**
 * Check if a number has a repeated sequence using math only
 * Example: 1212 → repeated "12"
 *          1111 → repeated "1"
 *          123 → no repeated sequence

function hasRepeatedSequence(n: number): boolean {
  let temp = n;
  let digits = 0;

  // 1 Count the number of digits in the number
  while (temp > 0) {
    digits++;
    temp = Math.floor(temp / 10); // remove last digit
  }

  // 2 Try all possible block lengths (substrings of digits)
  for (let blockLen = 1; blockLen <= Math.floor(digits / 2); blockLen++) {
    if (digits % blockLen !== 0) continue; // Block must divide digits evenly

    const repeatCount = digits / blockLen; // How many times the block must repeat
    if (repeatCount < 2) continue;       // Must repeat at least twice

    let isRepeated = true; // Assume the block repeats until proven otherwise
    let numberCopy = n;

    // 3 Extract the last block of digits using modulo
    // Example: n = 1212, blockLen = 2 → last block = 1212 % 100 = 12
    let lastBlock = numberCopy % Math.pow(10, blockLen);

    // 4 Remove the last block from the number
    // Example: 1212 / 100 = 12 → integer division
    numberCopy = Math.floor(numberCopy / Math.pow(10, blockLen));

    // 5 Check all remaining blocks from right to left
    for (let i = 1; i < repeatCount; i++) {
      // Extract next block
      let currentBlock = numberCopy % Math.pow(10, blockLen);

      if (currentBlock !== lastBlock) {
        // If any block differs → not repeated
        isRepeated = false;
        break;
      }

      // Remove the block we just checked
      numberCopy = Math.floor(numberCopy / Math.pow(10, blockLen));
    }

    // 6 If all blocks matched → invalid number
    if (isRepeated) return true;
  }

  return false; // No repeated sequences found
}
*/

const result = validateId(input);
writeOutput("day2.txt", result);

export default validateId;
