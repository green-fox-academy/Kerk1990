const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  const { input } = req.query;
  if (input) {
    res.json({
      received: input,
      result: input * 2
    });
  } else {
    res.json({
      error: 'Please provide an input!',
    });
  }
});

app.get('/greeter', (req, res) => {
  const { name, title } = req.query;
  if (name, title) {
    res.json({ welcome_message: `Oh, hi there ${name}, my dear ${title}!` });
  } else if (title) {
    res.json({ error: 'Please provide a name!' });
  } else if (name) {
    res.json({ error: 'Please provide a title!' });
  }
});

app.get('/appenda/:appendTo', (req, res) => {
  const { appendTo } = req.params;
  if (appendTo) {
    res.json({ appended: `${appendTo}a` });
  } else {
    res.json({
      error: '404'
    });
  }
});
sumUntil = (inputNum) => {
  if (inputNum > 0) {
    return inputNum + sumUntil(inputNum - 1);
  } else {
    return 0;
  }
}

multiplyUntil = (inputNum) => {
  if (inputNum > 1) {
    return inputNum * multiplyUntil(inputNum - 1);
  } else {
    return 1;
  }
}
app.post('/dountil/:action',jsonParser,(req, res) => {
  let sumResult = sumUntil(req.body.until);
  let multiResult = multiplyUntil(req.body.until);
  if (req.params.action === 'sum') {
    res.json({
      result: sumResult
    })
  } else if (req.params.action === 'factor') {
    res.json({
      result: multiResult
    })
  } else {
    res.json({
      error: 'Please provide a valid action'
    })
  }
})




app.use('/assets', express.static('assets'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});