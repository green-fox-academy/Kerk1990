'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

app.use(express.json());

const conn = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'practice',
  port: 3306
});

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.post('/api/orders', (req, res) => {
  const { name, address, base, topping } = req.body;
  if (
    name === undefined || name === '' ||
    address === undefined || address === '' ||
    base === undefined || base === '' ||
    topping === undefined || topping === '') {
    res.json({
      message: 'All fields are required'
    });
  } else {
    conn.query('INSERT INTO orders (name, address, base, topping, status) VALUES (?, ?, ?, ?, ?);', [name, address, base, topping, 'ordered'], (err, rows) => {
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'Internal server error'
        });
        return;
      }
      res.json({
        id: rows.insertId,
        name: name,
        address: address,
        base: base,
        topping: topping,
        status: 'ordered'
      });
    });
  }
});

app.get('/api/orders/:id', (req, res) => {
  const { id } = req.params;
  conn.query(`SELECT * FROM orders WHERE id=${id};`, (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    if (rows.length === 0) {
      res.status(404).json({
        error: "Order ID doesn't exist"
      });
    } else {
      res.json({
        id: rows[0].id,
        name: rows[0].name,
        address: rows[0].address,
        base: rows[0].base,
        topping: rows[0].topping,
        status: rows[0].status
      });
    }
  });
});

app.get('/api/orders', (req, res) => {
  const { type, status } = req.query;
  let sqlQuery = '';
  if (type === undefined || status === undefined ||
    type !== 'vegetarian' && type !== 'all' ||
    status !== 'ordered' && status !== 'inprogress' && status !== 'done') {
    res.status(400).json({
      message: 'Invalid request'
    });
  } else {
    if (type === 'vegetarian') {
      sqlQuery = `SELECT id, name, base, topping, status FROM orders WHERE status='${status}' AND topping='smokedtofu';`;
    } else {
      sqlQuery = `SELECT id, name, base, topping, status FROM orders WHERE status='${status}';`;
    }
    conn.query(sqlQuery, (err, rows) => {
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'Internal server error'
        });
        return;
      }
      res.json(rows);
    });
  }
});

app.patch('/api/orders/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  if (status !== 'ordered' && status !== 'inprogress' && status !== 'done') {
    res.status(400).json({
      error: "Invalid status value. Use: 'ordered', 'inprogress' or 'done'!"
    });
  } else {
    conn.query(`SELECT * FROM orders WHERE id=${id};`, (err, rows) => {
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'Internal server error'
        });
        return;
      }
      if (rows.length === 0) {
        res.status(400).json({
          error: "Order ID doesn't exist"
        });
      } else {
        conn.query(`UPDATE orders SET status='${status}' WHERE id=${id};`, (err, data) => {
          if (err) {
            console.log(err.message);
            res.status(500).json({
              error: 'Internal server error'
            });
            return;
          }
          res.status(200).json({
            message: 'Order status updated'
          });
        });
      }
    });
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});