'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-4d/r4.png]

ctx.fillStyle = '#B610EE';
let size: number = 0;
let position: number = 14;

for (let i: number = 1; i < 7; i++) {
    size = size + 14;
    ctx.fillRect(position, position, size, size);
    ctx.strokeRect(position, position, size, size);
    position = position + size;
}