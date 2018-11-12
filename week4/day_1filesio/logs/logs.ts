// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
    try {
      return fs.readFileSync('logs.txt', 'utf-8');
    } catch(e) {
      console.log(e.message);
      return 'Unable to read file: logs.txt';
    }
  }
console.log(readFromFile('logs.txt'));




function ratio(fileName: string): number {
    let gets: number = 0;
    let posts: number = 0;
    let fileContent = readFromFile(fileName).split('\r\n');
    if (fileContent !== null) {
      fileContent.forEach(e => {
        if (e.includes('GET')) {
          gets++;
        } else if (e.includes('POST')) {
          posts++;
        }
      });
    }
    return gets / posts;
  }
  console.log(ratio('log.txt'));