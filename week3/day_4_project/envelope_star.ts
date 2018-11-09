'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

for (let i: number = 1; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(i * 30, canvas.height / 2);
    ctx.lineTo(canvas.width / 2, canvas.height / 2 + i * 30);
    ctx.strokeStyle = '#53D836';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.height + (-i * 30), canvas.width / 2);
    ctx.lineTo(canvas.height / 2, canvas.width / 2 + (i * 30));
    ctx.strokeStyle = '#53D836';
    ctx.stroke();
}
for (let j: number = 1; j < 10; j++) {

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, j * 30);
    ctx.lineTo(canvas.width / 2 + j * 30, canvas.height / 2);
    ctx.strokeStyle = '#53D836';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.height / 2, canvas.width / 2 + (-j * 30));
    ctx.lineTo(j * 30, canvas.width / 2);
    ctx.strokeStyle = '#53D836';
    ctx.stroke();
}