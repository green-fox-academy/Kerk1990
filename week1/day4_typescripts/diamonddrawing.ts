export {}
'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let mark: string = "*";
let emptyNum: number = lineCount;
let decrease: number = lineCount;

for ( let i:number = 1; i <= lineCount; i ++){
    if (lineCount % 2 == 0){
        if (decrease < 0){
        break;
        }

        if(i <= lineCount/2){
        let mrk: string = (" ").repeat(emptyNum);
        console.log(mrk + mark);
        mark += "**";
        emptyNum --;   
        } else {
        emptyNum ++;
        let mrk: string = (" ").repeat(emptyNum);
        let addMark: string = ("*").repeat(decrease - 1);
        console.log(mrk + addMark);
        decrease -= 2;
        }
    } else if(lineCount % 2 !== 0){
        if (decrease < 0){
            break;
        }
        if(i <= lineCount/2){
            let mrk: string = (" ").repeat(emptyNum);
            console.log(mrk + mark);
            mark += "**";
            emptyNum --;   
        } else {
            let mrk: string = (" ").repeat(emptyNum);
            let addMark: string = ("*").repeat(decrease);
            console.log(mrk + addMark);
            decrease -= 2;
            emptyNum ++;
        }
    }
}
