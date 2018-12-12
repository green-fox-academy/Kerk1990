let beers = 0;
let cocktails = '';
let cocktailCounter = 0;
let beersPerSec = 0;

const beersCount = document.querySelector('.beers');
const cocktails = document.querySelector('.cocktail');
const beerSpeed = document.querySelector('.speed');
const createBeer = document.querySelector('.create-beer');
const buyCocktails = document.querySelector('.buy-cocktails');
const slotMachine = document.querySelector('.slot-machine');

const addBeers = () => {
  beers++;
  beerCount.textContent = beers;
}

const cocktailsPerSec = () => {
  beers += beersPerSec;
  beersCount.textContent = beers;
}

