export {}

'use strict';

let lineCount: number = 5;

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let object: string = "%";
let space: string = " ";
let spaceBefore: number = 0;
let spaceAfter: number = lineCount - spaceBefore - 3;


for ( let j: number = 1; j <= lineCount; j ++){
    if (j == 1 || j == lineCount) {
        console.log(object.repeat(lineCount));
    } else {
        if (spaceAfter < 0){
            break;
        }
        console.log(object + space.repeat(spaceBefore) + object + space.repeat(spaceAfter) + object);
        spaceBefore ++;
        spaceAfter --;
    }
}