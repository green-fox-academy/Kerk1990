
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

const renderQuestion = (data) => {
  questionsCont.innerHTML = '';
  const h2 = document.createElement('h2');
  h2.innerText = data.question;

  const ul = document.createElement('ul');
  data.answer.forEach(e => {
    const li = document.createElement('li');
    li.classList.add('answerButton');
    li.setAttribute('data-iscorrect', element.is_correct);
    li.innerText = e.answer;
    ul.appendChild(li);
  });

  questionsCont.appendChild(h2);
  questionsCont.appendChild(ul);

  score.innerText = `Score: ${counter}`
}