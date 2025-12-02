import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, '../day1/resources/lockSequence.txt');
const input = readFileSync(filePath, 'utf8');
// secret entrance
function findPassword(input) {
    const passwordSequence = input.trim().split(/\s+/);
    let zeroCounter = 0;
    const dialPositions = [];
    let currentDial = 50;
    for (const step of passwordSequence) {
        const match = step.match(/([LR])(\d+)/);
        if (match) {
            const [, direction, value] = match;
            const [newDial, zerosInStep] = moveDial(currentDial, String(direction), Number(value));
            zeroCounter += zerosInStep;
            currentDial = newDial;
            dialPositions.push(currentDial);
        }
    }
    console.log(`Zeros encountered: ${zeroCounter}`);
    return dialPositions;
}
function moveDial(current, direction, steps, max = 99) {
    const range = max + 1;
    let zeros = 0;
    let newPosition = current;
    for (let i = 0; i < steps; i++) {
        if (direction === "R") {
            newPosition = (newPosition + 1) % range;
        }
        else {
            newPosition = (newPosition - 1 + range) % range;
        }
        if (newPosition === 0)
            zeros++;
    }
    return [newPosition, zeros];
}
const output = findPassword(input);
const outputString = output.join("\n");
writeFileSync("output.txt", outputString + "\n");
export default findPassword;
//# sourceMappingURL=day1.js.map