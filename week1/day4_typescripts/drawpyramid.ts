'use strict';
export {}
let lineCount: number = 8;
let pyramidBase: number = (lineCount*2)-1;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let j: number = 1; j <= pyramidBase; j = j + 2){
    let currentLine: string = "";
    for(let spaces: number = 0; spaces <= (pyramidBase-j)/2; spaces++){
        currentLine = currentLine + " ";
    }
     for(let stars: number = 0; stars < j; stars++){
        currentLine = currentLine + "*";
    }
    for(let spaces: number = 0; spaces <= (pyramidBase-j)/2; spaces++){
        currentLine = currentLine + " ";
    } 
    console.log(currentLine);
}
