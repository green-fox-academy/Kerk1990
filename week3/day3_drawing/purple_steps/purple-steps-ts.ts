'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

ctx.fillStyle = '#CC2EFA';

for (let i: number = 1; i < 20; i++) {
  ctx.fillRect(i * 14, i * 14, 14, 14);
  ctx.strokeRect(i * 14, i * 14, 14, 14);
}