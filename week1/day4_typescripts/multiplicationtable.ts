'use strict';

let number: number = 15;

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

let result: number = number;
let a: number = 1;

for (let j: number = 0; j < 10; j ++) {
    console.log(a + " * " + number + " = " + result);
    result += number
    a ++;
}