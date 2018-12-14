const createMoney = document.querySelector('.create-money');
const numberOfMoney = document.querySelector('.money');
const moneyCreateSpeed = document.querySelector('.speed');
const getBeers = document.querySelector('.buy-beers');
const getWine = document.querySelector('.buy-wines')
const beerCount = document.querySelector('.beers');
const wineCount = document.querySelector('.wines')
const destroyed = document.querySelector('.get-wasted');
const image = document.getElementById('.image');

let money = 0;
let beers = '';
let wines = '';
let BeerCounter = 0;
let wineCounter = 0;
let moneyPerSec = 0;


const addMoney = () => {
  money++;
  numberOfMoney.textContent = money;
}

const moneyByTime = () => {
  money += moneyPerSec;
  numberOfMoney.textContent = money;
}

const wasted = () => {
  moneyPerSec = moneyPerSec + 1;
  moneyCreateSpeed.textContent = moneyPerSec;
}

createMoney.addEventListener('click', addMoney);

getBeers.addEventListener('click', () => {
  if (money >= 5) {
    beers += '🍺';
    BeerCounter++;
    beerCount.textContent = beers;
    money -= 5;
    numberOfMoney.textContent = money;
  }
})

getWine.addEventListener('click', () => {
  if (money >= 10) {
    wines += '🍷';
    wineCounter++;
    wineCount.textContent = wines;
    money -= 10;
    numberOfMoney.textContent = money;
  }
})

destroyed.addEventListener('click', wasted);

setInterval(moneyByTime, 100);