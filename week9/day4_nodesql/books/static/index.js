'use strict'

const sendHTTPRequest = (url, method, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.send();
}
const tablebody = document.querySelector('table');
const URL = '/bookinfo';
sendHTTPRequest(URL, 'GET', (response) => {
  console.log(response);
  response.forEach(e => {
    let newTabRow = document.createElement('tr');
    tablebody.appendChild(newTabRow);
    let newTitle = document.createElement('td');
    newTabRow.appendChild(newTitle);
    newTitle.innerText = e.book_name;
    let newAuthor = document.createElement('td');
    newTabRow.appendChild(newAuthor);
    newAuthor.innerText = e.aut_name;
    let newPub = document.createElement('td');
    newTabRow.appendChild(newPub);
    newPub.innerText = e.pub_name;
    let newCat = document.createElement('td');
    newTabRow.appendChild(newCat);
    newCat.innerText = e.cate_descrip;
    let newPrice = document.createElement('td');
    newTabRow.appendChild(newPrice);
    newPrice.innerText = e.book_price;
  })
});
