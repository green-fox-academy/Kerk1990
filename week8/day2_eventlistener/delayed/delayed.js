const button = document.querySelector('button');

button.addEventListener('click', () => {
  setTimeout(() => {
    document.querySelector('p').innerHTML = 'Way too much time';

  },2000);
});