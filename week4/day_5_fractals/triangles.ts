'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let size = 500;

function trianglePoints(Ax, Ay, Bx, By, Cx, Cy, d, ctx) {
  if (d > 0) {
    let pointAx = (Bx + Cx) / 2;
    let pointAy = (By + Cy) / 2;

    let pointBx = (Ax + Cx) / 2;
    let pointBy = (Ay + Cy) / 2;

    let pointCx = (Ax + Bx) / 2;
    let pointCy = (Ay + By) / 2;

    let d2 = d - 1;
    trianglePoints(Ax, Ay, pointBx, pointBy, pointCx, pointCy, d2, ctx);
    trianglePoints(pointCx, pointCy, pointAx, pointAy, Bx, By, d2, ctx);
    trianglePoints(pointBx, pointBy, pointAx, pointAy, Cx, Cy, d2, ctx);
  }
  else {
    ctx.save();
    ctx.translate(canvas.width , canvas.height );
    ctx.rotate(Math.PI );
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
ctx.fillStyle = 'white';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();




