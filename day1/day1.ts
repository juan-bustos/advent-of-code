import { readInput, writeOutput } from '../utils/utils.js';

const input = readInput('day1/resources/lockSequence.txt')
// secret entrance
function findPassword(input: string): number[] {
  const passwordSequence: string[] = input.trim().split(/\s+/);
  let zeroCounter: number = 0;
  const dialPositions: number[] = [];
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

function moveDial(current: number, direction: string, steps: number, max = 99): [number, number] {
  const range = max + 1;
  let zeros = 0;
  let newPosition = current;

  for (let i = 0; i < steps; i++) {
    if (direction === "R") {
      newPosition = (newPosition + 1) % range;
    } else {
      newPosition = (newPosition - 1 + range) % range;
    }
    if (newPosition === 0) zeros++;
  }

  return [newPosition, zeros];
}

const output = findPassword(input);
writeOutput("output.txt", output)

export default findPassword;

