const newP = document.querySelectorAll('p');
if (newP[3].className === 'dolphin') {
  newP[0].textContent = 'pear';
}

if (newP[0].className === 'apple') {
  newP[2].textContent = 'dog';
}

const redApple = document.querySelector('.apple');
redApple.classList.add('red');

const balloonShape = document.querySelector('.balloon');
balloonShape.style.borderRadius = "20%";