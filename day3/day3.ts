import { readInput, writeOutput } from "../utils/utils.js";

const input = readInput("day3/resources/batteryBanks.txt");

function maxJoltage(bank: string, k: number): bigint {
  const digits: number[] = bank.split("").map((digit) => Number(digit));
  const stack: number[] = [];
  const digitsList = digits.length;

  for (let i = 0; i < digitsList; i++) {
    const digit = digits[i]!;

    while (
      stack.length > 0 &&
      stack[stack.length - 1]! < digit &&
      stack.length - 1 + (digitsList - i) >= k
    ) {
      stack.pop();
    }

    stack.push(digit);
  }

  const selected = stack.slice(0, k);
  return BigInt(selected.join(""));
}

function totalJoltage(input: string, k: number = 12): bigint {
  const bankRows: string[] = input.trim().split("\n");
  let total: bigint = 0n;

  for (const row of bankRows) {
    total += maxJoltage(row, k);
  }

  return total;
}

const result = totalJoltage(input);
writeOutput("day3.txt", result);

export default totalJoltage;
