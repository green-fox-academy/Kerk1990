'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let size = 500;

function trianglePoints(Ax, Ay, Bx, By, Cx, Cy, depth, ctx) {
  if (depth > 0) {
    let pointAx = (Bx + Cx) / 2;
    let pointAy = (By + Cy) / 2;

    let pointBx = (Ax + Cx) / 2;
    let pointBy = (Ay + Cy) / 2;

    let pointCx = (Ax + Bx) / 2;
    let pointCy = (Ay + By) / 2;

    let depth2 = depth - 1;
    trianglePoints(Ax, Ay, pointBx, pointBy, pointCx, pointCy, depth2, ctx);
    trianglePoints(pointCx, pointCy, pointAx, pointAy, Bx, By, depth2, ctx);
    trianglePoints(pointBx, pointBy, pointAx, pointAy, Cx, Cy, depth2, ctx);
  }
  else {
    ctx.save();
    ctx.translate(canvas.width, canvas.height);
    ctx.rotate(Math.PI);
    ctx.moveTo(Ax, Ay);
    ctx.lineTo(Bx, By);
    ctx.lineTo(Cx, Cy);
    ctx.lineTo(Ax, Ay);
    ctx.restore();
  }

}

function drawTriangles(ctx) {
  let midPointX = canvas.width / 2;
  let midPointY = canvas.height / 2;

  let deep = 6;

  let ri = (size / 6) * Math.sqrt(3);
  let ru = (size / 3) * Math.sqrt(3);

  let pointAx = midPointX - (size / 2);
  let pointAy = midPointY + ri;

  let pointBx = midPointX + (size / 2);
  let pointBy = midPointY + ri;

  let pointCx = midPointX;
  let pointCy = midPointY - ru;

  trianglePoints(pointAx, pointAy, pointBx, pointBy, pointCx, pointCy, deep, ctx);
}

drawTriangles(ctx);

let gradient = ctx.createLinearGradient(10, 0, 500, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1 / 6, 'orange');
gradient.addColorStop(2 / 6, 'yellow');
gradient.addColorStop(3 / 6, 'green');
gradient.addColorStop(4 / 6, 'blue');
gradient.addColorStop(5 / 6, 'indigo');
gradient.addColorStop(1, 'violet');
ctx.fillStyle = gradient
ctx.fill();

gradient.addColorStop(0, 'red');
gradient.addColorStop(1 / 6, 'orange');
gradient.addColorStop(2 / 6, 'yellow');
gradient.addColorStop(3 / 6, 'green');
gradient.addColorStop(4 / 6, 'blue');
gradient.addColorStop(5 / 6, 'indigo');
gradient.addColorStop(1, 'violet');
ctx.strokeStyle = gradient;
ctx.stroke();
