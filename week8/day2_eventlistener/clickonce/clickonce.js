const button = document.querySelector('button');

// First way

// document.addEventListener('click', () => {
//   console.log(Date.now());
//   button.setAttribute('disabled', true);
// });

// Second way

const stopListener = () => {
  console.log(Date.now());
  button.removeEventListener('click', stopListener);
}

button.addEventListener('click', stopListener);