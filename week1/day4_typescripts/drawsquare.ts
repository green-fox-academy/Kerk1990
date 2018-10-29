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


for ( let i: number = 0; i <= lineCount; i ++){
    if (i == 0 || i == lineCount) {
        console.log(object.repeat(columns));
    } else {
        console.log(object + space.repeat(columns - 2) + object);
    }
}