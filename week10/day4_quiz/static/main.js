
const questionsCont = document.querySelector('.questions');
const score = document.querySelector('.score');
let counter = 0;

const baseUrl = 'http://localhost:3000/game';

const sendHttpRequest = (method, url, callback) => {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.open(method, url);
  xmlRequest.onload = () => {
    if (xmlRequest.status === 200) {
      callback(JSON.parse(xmlRequest.responseText));
    }
  }
  xmlRequest.send();
};