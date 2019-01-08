const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  const { distance, time } = req.query;
  if (distance && time) {
    if (time != 0) {
      res.status(200).json({
        "distance": distance,
        "time": time,
        "speed": distance / time
      });
    } else {
      res.status(210).json({
        "error": "time can not be zero"
      });
    }
  } else {
    res.status(210).json({
      "error": "no data provided"
    });
  }
});

module.exports = app;