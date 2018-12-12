document.addEventListener('keyup', (event) => {
  document.querySelector('h1').textContent = `Last pressed key is : ${event.keyCode}`;
});