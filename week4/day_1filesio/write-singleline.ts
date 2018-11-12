// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

export { };

const fs = require('fs');


function readFromFile(fileName: string): string {
    try {
        return fs.readFileSync(fileName, 'utf-8');
    } catch (e) {
        console.log(e.message);
        return 'Unable to write file: my-file.txt';
    }
}

readFromFile('my-file.txt');

function writeToFile(fileName: string, data: string): void {
    fs.appendFileSync(fileName, data);
}

writeToFile('my-file.txt', 'Gabor Kerekes');