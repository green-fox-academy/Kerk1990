'use strict';

const form = document.querySelector('form');
const { name, address, base, topping } = form.elements;
const h3 = document.querySelector('h3');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const postXhr = new XMLHttpRequest();
  postXhr.open('POST', '/api/orders');
  postXhr.setRequestHeader('Content-Type', 'application/json');
  postXhr.send(JSON.stringify({
    name: name.value,
    address: address.value,
    base: base.value,
    topping: topping.value
  }));
  postXhr.onload = () => {
    if (postXhr.status === 200) {
      const order = JSON.parse(postXhr.responseText);
      h3.textContent = `Your order is confirmed. Order ID: ${order.id}.`;
      form.reset();
    }
  }
});