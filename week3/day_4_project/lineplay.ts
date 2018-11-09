'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

for (let i: number = 0; i < 20; i++) {
    ctx.beginPath();
    ctx.moveTo(i * 30, 0);
    ctx.lineTo(canvas.width, i * 30);
    ctx.strokeStyle = '#D73EF2';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, i * 30);
    ctx.lineTo(i * 30, canvas.height);
    ctx.strokeStyle = '#53D836';
    ctx.stroke();
}