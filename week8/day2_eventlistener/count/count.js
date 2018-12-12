const button = document.querySelector('button');

button.addEventListener('click', () => {
document.querySelector('p').textContent = document.querySelector('ul').childElementCount;
});