'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let colors: string[] = ["blue", "green", "red", "orange"];

for (let i: number = 0; i <= 4; i++) {
    ctx.fillStyle = colors[i - 1];
    ctx.fillRect(i * 70, i * 40, i * 20, i * 20);
}
