const list = ['apple','banana','cat','dog'];
const listElements = document.querySelectorAll('li');

listElements.forEach((e, i) => {
  e.innerText = list[i];
});

const colorUl = document.querySelector('ul');
colorUl.classList.add('limeBackground');