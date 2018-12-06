const lastLine = document.querySelector('.animals');
const lines = document.querySelectorAll('p');
lines.forEach(e => {
  (e.innerHTML = lastLine.innerHTML)
});
