'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawLine(x: number, y: number): void {

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.strokeStyle = "blue";
    ctx.stroke();
}

for (let i: number = 0; i <= 30; i++) {
    drawLine(i * canvas.width / 30, 0);
    drawLine(i * canvas.width / 30, 400);

    for (let j: number = 0; j <= 20; j++) {
        drawLine(0, j * canvas.height / 20);
        drawLine(600, j * canvas.height / 20);

    }
}    