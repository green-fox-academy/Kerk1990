'use strict'
const form = document.querySelector('form');
const display = document.querySelector('.responseContainer');
const radioBtns = document.querySelectorAll('form input[type=radio');


form.onsubmit = () => {
  event.preventDefault();
  const {name, address, base, toppings } = form.elements;

const postReq = new XMLHttpRequest();
postReq.open('POST','api/orders');
postReq.setRequestHeader('Content-Type','application/json');
postReq.send(JSON.stringify({
  name:name.value,
  address:address.value,
  base:base.value,
  topping: toppings.value,
}));
postReq.onload = () => {
  const response = JSON.parse(postReq.responseText);
  render(response);
  name.value = null;
  address.value = null;
  toppings.value = null;
  radioUncheck(radioBtns);
};
};

const render = (data) => {
  const ul = document.createElement('ul');
  const liID = document.createElement('li');

  liID.innerText = `Your order id is: ${data.id}`;

  ul.appendChild(liID);
  display.appendChild(ul);
};

const radioUncheck = (radios) => {
  radios.forEach(e => {
    if (e.checked) {
      e.checked = false;
    }
  });
};