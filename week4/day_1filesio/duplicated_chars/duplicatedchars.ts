// Create a method that decrypts duplicated-chars.txt

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

function decryptText(fromFile: string) {

  const myFile: string = readFile(fromFile);
  if (myFile !== null) {

    let decryptText: string = '';
    let myFileArray: string[][] = myFile.split('\r\n').map(e => e.split(''));
    for (let row of myFileArray) {
      for (let i: number = 0; i < row.length; i++) {
        if (row[i] === row[i + 1]) {
          row.splice(i, 1);
        }
      }
      decryptText += row.join('') + '\r\n';

    }
    return decryptText;

  } else {
    return `file not found ${fromFile}`;
  }
}

console.log(decryptText('duplicated_chars.txt'));