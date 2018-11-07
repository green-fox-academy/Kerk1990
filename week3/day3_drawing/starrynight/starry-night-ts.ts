'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillRect(0, 0, canvas.width, canvas.height);

for (let i = 0; i < 200; i++) {

    let xPos = Math.floor(Math.random() * canvas.width);
    let yPos = Math.floor(Math.random() * canvas.height);
    ctx.fillRect(xPos, yPos, 3, 3);
    ctx.fillStyle = `rgb(${105 + i},${105 + i},${105 + i}`;
}
