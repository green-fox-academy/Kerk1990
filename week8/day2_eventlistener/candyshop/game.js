const createBeers = document.querySelector('.create-beer');
const numberOfBeers = document.querySelector('.beers');
const beerCreateSpeed = document.querySelector('.speed');
const getCocktails = document.querySelector('.buy-cocktails');
const getWine = document.querySelector('.buy-wines')
const cocktailCount = document.querySelector('.cocktails');
const wineCount = document.querySelector('.wines')
const destroyed = document.querySelector('.get-wasted');
const image = document.getElementById('.image');

let beers = 0;
let cocktails = '';
let wines = '';
let cocktailCounter = 0;
let wineCounter = 0;
let beerPerSec = 0;


const addBeers = () => {
  beers++;
  numberOfBeers.textContent = beers;
}

const beersByTime = () => {
  beers += beerPerSec;
  numberOfBeers.textContent = beers;
}

const wasted = () => {
  beerPerSec = beerPerSec + 1;
  beerCreateSpeed.textContent = beerPerSec;
}

createBeers.addEventListener('click', addBeers);

getCocktails.addEventListener('click', () => {
  if (beers >= 5) {
    cocktails += '🍸';
    cocktailCounter++;
    cocktailCount.textContent = cocktails;
    beers -= 5;
    numberOfBeers.textContent = beers;
  }
})

getWine.addEventListener('click', () => {
  if (beers >= 10) {
    wines += '🍷';
    wineCounter++;
    wineCount.textContent = wines;
    beers -= 10;
    numberOfBeers.textContent = beers;
  }
})

destroyed.addEventListener('click', wasted);

setInterval(beersByTime, 100);