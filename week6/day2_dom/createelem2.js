const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
}];

const ul = document.querySelector('ul');
    const king = document.querySelector('li');
    ul.removeChild(king);

planetData.forEach(e => {
  const newData = document.createElement('li');
  if (e.asteroid) {
    newData.textContent = e.content
  ul.appendChild(newData)
  }
});    

// planetData.forEach(e => {
// const newData = document.createElement('li')
// newData.innerText = e.content;
// newData.classList.add(`${e.category}`);

// });

