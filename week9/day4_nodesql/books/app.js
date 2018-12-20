'use strict'

require('dotenv').config();

const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

conn.connect(err => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Connected to database', '\n');
});

let baseQuery = `select book_name, aut_name, pub_name, cate_descrip, book_price 
FROM book_mast, author, publisher, category  
WHERE book_mast.aut_id = author.aut_id 
AND book_mast.pub_id = publisher.pub_id 
AND book_mast.cate_id = category.cate_id`
app.get('/', (req, res) => {
  conn.query(baseQuery, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});