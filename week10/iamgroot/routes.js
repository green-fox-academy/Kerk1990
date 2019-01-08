const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
  const { somemessage } = req.query;
  if (somemessage) {
    res.status(200).json({
      "recieved": somemessage,
      "translated": "I am Groot!"
    });
  } else {
    res.status(210).json({
      error: "I am Groot!"
    });
  }
});

module.exports = app;
