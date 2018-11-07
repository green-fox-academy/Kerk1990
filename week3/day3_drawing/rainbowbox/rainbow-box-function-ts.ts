'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

function coloredSquare(size: number, color: string): void {
    let x: number = (canvas.width - size) / 2;
    let y: number = (canvas.height - size) / 2;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}
let colorList: string[] = ['#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF', '#FF0040'];

for (let i: number = 7; i > 0; i--) {
    let squareSize: number = (canvas.height / 7 * i);
    coloredSquare(squareSize, colorList[7 - i]);
}

