import { readInput, writeOutput } from "../utils/utils.js";
const input = readInput("day3/resources/batteryBanks.txt");
// For really large numbers (12 digits) we should use BigInt
function maxJoltageKBig(bank, k) {
    const digits = bank.split("").map((d) => Number(d));
    const stack = [];
    const n = digits.length;
    for (let i = 0; i < n; i++) {
        const digit = digits[i];
        while (stack.length > 0 &&
            stack[stack.length - 1] < digit &&
            stack.length - 1 + (n - i) >= k) {
            stack.pop();
        }
        stack.push(digit);
    }
    const selected = stack.slice(0, k);
    return BigInt(selected.join(""));
}
function totalJoltageKBig(input, k = 12) {
    const bankRows = input.trim().split("\n");
    let total = 0n;
    for (const row of bankRows) {
        total += maxJoltageKBig(row, k);
    }
    return total;
}
// go through list of numbers
// if current number is greater than our current high
// we set our current high equal to current number
// if our next number is less than our current number and still higher than our secondHigh we set our secondHight to the current number
// if there are no other numbers greater than our first or second high numbers we are done
// our first highest number has to remain even if there is another high number. We take the first that isn't greater. So for 811111111111119 we should have an output of 89
// but for 987654321 we should have an output of 98
//
const result = totalJoltageKBig(input);
console.log(result);
writeOutput("day3.txt", result);
export default totalJoltageKBig;
//# sourceMappingURL=day3.js.map