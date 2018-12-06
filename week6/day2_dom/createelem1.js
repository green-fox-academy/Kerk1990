const greenFox = document.createElement('li');
greenFox.textContent = 'The Green Fox';

const ul = document.querySelector('ul');
ul.appendChild(greenFox);

const lampLighter = document.createElement('li');
lampLighter.textContent = 'The Lamplighter';
ul.appendChild(lampLighter);

const header = document.createElement('h1');
header.textContent = 'I can add elements to the DOM!';

const container = document.querySelector('.container');
container.appendChild(header);

const image = document.createElement('IMG');
image.setAttribute("src", 'https://i.pinimg.com/originals/5f/5d/83/5f5d83919d9e6117c182003f70ed6bbd.jpg');
image.setAttribute('height','400');
image.setAttribute('width','250');
container.appendChild(image);
