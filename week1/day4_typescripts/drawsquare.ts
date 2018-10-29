'use strict';
export {}

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let object: string = "%";
let emptyNum: number = 3;
let space: string = " ";
let columns: number = 6;


for ( let j: number = 0; j <= lineCount; j ++){
    if (j == 0 || j == lineCount) {
        console.log(object.repeat(columns));
    } else {
        console.log(object + space.repeat(columns - 2) + object);
    }
}