const button = document.querySelector('button');


document.addEventListener('click', () => {
  console.log(Date.now());
  button.setAttribute('disabled', true);
});