const form = document.forms.myform;
const selectPets = form.favouritepets;
const selectFact = form.facts;
const signUpButton = document.querySelector('.signup');
const loveCatButton = document.querySelector('.lovecats');
const buttons = document.querySelectorAll('button');

form.addEventListener('change', () => {
  if (selectPets.value === 'dog' || selectPets.value === 'cat' || (selectPets.value === 'fish' && selectFact.value === 'no')) {
    signUpButton.removeAttribute('disabled');
  } else {
    signUpButton.disabled = 'true';
  }

  if (selectFact.value === 'yes') {
    loveCatButton.removeAttribute('disabled');
  } else {
    loveCatButton.disabled = 'true';
  }
});

buttons.forEach(e => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    if (selectFact.value === 'no' && selectPets.value === 'fish') {
      alert('Sigh, we still added you to the cat facts');
    } else {
      alert('Thank you, you successfully signed up for cat facts');
    }
  });
});