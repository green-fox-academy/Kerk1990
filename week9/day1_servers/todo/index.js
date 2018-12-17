const express = require('express');
const app = express();
const PORT = 3000;
const todos = [
  '(╯°□°）╯︵ ┻━┻',
  'apologize',
  '┬─┬ノ( o _ oノ)',
];

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('home', {
    todos
  });
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});