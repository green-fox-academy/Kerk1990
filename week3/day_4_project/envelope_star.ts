'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

for (let i: number = 1; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(i * 30, 300);
    ctx.lineTo(canvas.width / 2, 300 + i * 30);
    ctx.strokeStyle = 'red';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(600 + (-i*30), canvas.width /2);
    ctx.lineTo(300, 300 +(i*30));
    ctx.strokeStyle = 'red';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, i * 30);
    ctx.lineTo(300 + i * 30, canvas.height / 2);
    ctx.strokeStyle = '#53D836';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.height /2, 300+(-i*30));
    ctx.lineTo(i * 30, 300);
    ctx.strokeStyle = '#53D836';
    ctx.stroke();
}