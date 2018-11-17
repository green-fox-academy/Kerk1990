// Create a method that decrypts reversed-lines.txt

export { };
const fs = require('fs');
function readFile(fileName: string): string {

  try {
    return fs.readFileSync(fileName, 'utf-8');

  }
  catch (e) {
    return null;
  }
}

function reverseLines(fileName:string):string {

  const myFile: string = readFile(fileName);
  if (myFile !== null) {
    let fileArray:string [] =myFile.split('\r\n');
    let reversedText :string =fileArray.map(e => e.split('').reverse().join('')).join('\r\n');
    return reversedText;
  }else {
    return `File not found ${fileName};`
  }
}

console.log(reverseLines('reversed_lines.txt'));