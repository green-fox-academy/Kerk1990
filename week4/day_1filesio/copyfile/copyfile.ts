// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch(e) {
    return null;
  }
}

function writeToFile(fileName: string, data: string): void {
  fs.appendFileSync(fileName, data);
}

function copyFile(fileNameFrom: string, fileNameTo: string): boolean {
  const fileContent: string = readFromFile(fileNameFrom);
  if (fileContent === null) {
    return false;
  } else {
    writeToFile(fileNameTo, fileContent);
    return true;
  }
}

copyFile('mytext1.txt', 'mytext2.txt');
