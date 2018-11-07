'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.


let left = 0;
for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j += 2) {
        let startX = j * 50;
        if (i % 2 == 0) startX = (j + 1) * 50;
        ctx.fillRect(startX + left, (i * 50), 50, 50);
    }
}
