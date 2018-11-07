'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(250, 100);
ctx.stroke();

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 200);
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(250, 200);
ctx.stroke();

ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.moveTo(250, 200);
ctx.lineTo(250, 100);
ctx.stroke();
