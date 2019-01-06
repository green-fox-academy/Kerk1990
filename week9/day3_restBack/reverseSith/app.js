'use strict';
const express = require('express');
const app = express();
const PORT = 3300;
const path = require('path');
app.use(express.json());

app.post('/sith', (req, res) => {



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});