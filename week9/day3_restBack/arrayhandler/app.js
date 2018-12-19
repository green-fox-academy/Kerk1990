'use strict';
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
app.use(express.json());


app.post('/array', (req, res) => {
  const what = req.body.what;
  const numbers = req.body.numbers;
  if (what == 'sum') {
    res.json({
      result: sum(numbers)
    });
  } else if (what == 'multiply') {
    res.json({
      result: multiply(numbers)
    });
  } else if (what == 'double') {
    res.json({
      result: double(numbers)
    });
  } else res.json({ error: 'Please provide what to do with the numbers!' })
});

const sum = (array) => {
  return array.reduce((a, b) => a + b);
}

const multiply = (array) => {
  return array.reduce((a, b) => a * b);
}

const double = (array) => {
  return array.map(a => a * 2);
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});