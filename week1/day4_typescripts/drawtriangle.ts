'use strict';

let lineCount: number = 8;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let result: string= "*";

for (let j: number = 1; j <= lineCount; j++) {
    console.log(result); 
    result += "*";
}