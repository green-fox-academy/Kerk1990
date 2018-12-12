const buttons = document.querySelector('nav');
const image = document.querySelector('.img-inspector');
let posX = 0;
let posY = 0;
let zoomSize = 200;

buttons.addEventListener('click', e => {
  if (e.target.dataset.direction === "in") {
    zoomSize += 10;
    image.style.backgroundSize = `${zoomSize}%`;
  }
  if (e.target.dataset.direction === "out" && zoomSize > 100) {
    zoomSize -= 10;
    image.style.backgroundSize = `${zoomSize}%`;
  }
  if (e.target.dataset.direction === "left" && posX > 0) {
    posX -= 10;
    image.style.backgroundPosition = `${posX}% ${posY}%`;
  }
  if (e.target.dataset.direction === "right" && posX < 100) {
    posX += 10;
    image.style.backgroundPosition = `${posX}% ${posY}%`;
  }
  if (e.target.dataset.direction === "up" && posY > 0) {
    posY -= 10;
    image.style.backgroundPosition = `${posX}% ${posY}%`;
  }
  if (e.target.dataset.direction === "down" && posY < 100) {
    posY += 10;
    image.style.backgroundPosition = `${posX}% ${posY}%`;
  }
});