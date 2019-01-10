
const questionSpace = document.querySelector('.dataspace');
let score = document.querySelector('.score');
let counter = 0;

const displayRandomQuestion = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/game');
  xhr.onload = () => {
    if (xhr.status === 200) {
      questionSpace.innerHTML = '';
      const response = JSON.parse(xhr.responseText);
      let newQuestion = document.createElement('h2');
      newQuestion.innerHTML = response.question;
      questionSpace.appendChild(newQuestion);
      console.log(response);
      
      response.answers.forEach(e => {
        let newButton = document.createElement('button');
        console.log(e.answer)
        newButton.innerText = e.answer;
        newButton.addEventListener('click', () => {
          // let allButtons = document.querySelectorAll('button');
          // allButtons.forEach(button => {
          //   button.setAttribute('enabled', 'true');
          // });
          newButton.setAttribute('style', 'border: 2px inset gray');
          if (e.is_correct === 1) {
            setTimeout(() => {
              newButton.setAttribute('style', 'background-color: #26AE60');
              let scoreBefore = score.textContent;
              score.textContent = parseInt(scoreBefore) + 1;
            }, 1500)
          } else {
            setTimeout(() => {
              newButton.setAttribute('style', 'background-color: #ED8668');
            }, 1500)
          }
          setTimeout(() => {
            displayRandomQuestion();
          }, 3000);
        });
        questionSpace.appendChild(newButton);
      });
    }
  }
  xhr.send();
}
displayRandomQuestion();