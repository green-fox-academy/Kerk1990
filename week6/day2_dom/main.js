const king = document.querySelector('#b325');
console.log(king.innerHTML);

const businessLamp = document.querySelectorAll('.big');
businessLamp.forEach(e => {
  console.log(e.innerHTML)
}); 


const newArray = document.querySelector('section');
const conceitedKing = newArray.querySelectorAll('div');
for ( i = 0; i < conceitedKing.length; i++) {
  alert(conceitedKing[i].innerText)
};

const noBusiness = document.querySelectorAll('div');
noBusiness.forEach(e => {
  console.log(e.innerHTML);
})