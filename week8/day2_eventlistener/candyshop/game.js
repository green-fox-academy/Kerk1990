const cocktail = '🍸';
let cocktailCounter = 3;
let beerCounter = 0;
let beersPerSec = 0;
let slotRainSpd = 0;

const beers = document.querySelector('.beers');
const cocktail = document.querySelector('.cocktail');
const beerSpeed = document.querySelector('.speed');
const createBeer = document.querySelector('.create-beer');
const buyCocktails = document.querySelector('.buy-cocktails');
const slotMachine = document.querySelector('.slot-machine');

createBeer.addEventListener('click', () => {
  beerCounter++;
  beers.textContent = beerCounter;
});