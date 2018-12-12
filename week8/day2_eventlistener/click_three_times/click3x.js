const button = document.querySelector('button');
const text = document.querySelector('p');
let clickCounter = 0;
let timeCounter = 0;

button.addEventListener('click', e => {
  clickCounter++;
  if (timeCounter === 5000 && clickCounter == 3) {
    text.textContent = 'WAIT 5 SEC AND CLICK 3 TIMES OR CLICK 3 TIMES AND WAIT 5 SEC';
  }
});

setTimeout(() => {
  timeCounter = 5000;
  if (clickCounter == 3) {
    text.textContent = 'WAIT 5 SEC AND CLICK 3 TIMES OR CLICK 3 TIMES AND WAIT 5 SEC';
  }
}, 5000);