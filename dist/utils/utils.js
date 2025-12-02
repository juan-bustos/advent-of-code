import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..", "..");
export function readInput(pathName) {
    const filePath = resolve(projectRoot, pathName);
    return readFileSync(filePath, 'utf8');
}
export function writeOutput(fileName, output) {
    const outputString = output.join("\n");
    writeFileSync(fileName, outputString + "\n");
}
//# sourceMappingURL=utils.js.map