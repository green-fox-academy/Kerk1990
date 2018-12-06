const url = document.querySelector('img');
console.log(url.getAttribute('src'));

const newImage = document.querySelector('img');
newImage.setAttribute('src', 'https://imgix.ranker.com/user_node_img/50069/1001379047/original/the-potoo-bird-isn_t-a-single-species-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces');

const newLink = document.querySelector('a');
newLink.setAttribute('href', 'https://greenfoxacademy.com');

const disableButton = document.querySelector('.this-one');
disableButton.disabled = true;
disableButton.textContent = 'Don\'t click me!';