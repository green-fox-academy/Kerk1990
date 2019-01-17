'use strict'
const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express()
const PORT = 3000;

app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'practice'
});

app.use('/static', express.static('static'));

app.use(express.json());

app.listen(PORT, () => { console.log(`App is listening on Port: ${PORT}`) });

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, './static/index.html')) });

app.post('/api/orders', (req, res) => {
  const { name, address, base, topping } = req.body;
  if (
    name === undefined || name === '' ||
    address === undefined || address === '' ||
    base === undefined || base === '' ||
    topping === undefined || topping === ''
  ) {
    res.json({ message: 'all fields are required' });
  } else {
    const sqlquery = 'INSERT INTO orders (name, address, base, topping, status) VALUES (?, ?, ?, ?, ?);';
    const status = 'ordered';
    conn.query(sqlquery, [name, address, base, topping, status], (err, rows) => {
      if (err) {
        res.status(500).json({ error: 'internal server error' });
        console.log(err);
        return;
      }
      res.json({
        id: rows.insertId,
        name: name,
        address: address,
        base: base,
        topping: topping,
        status: status
      });
    });
  }
});

app.get('/api/orders/:id', (req, res) => {
  const { id } = req.params;
  const sqlSelect = `SELECT * FROM orders WHERE id = '${id}';`
  conn.query(sqlSelect, (err, rows) => {
    if (err) {
      res.status(500).json({ error: 'internal server error' });
      console.log(err);
      return;
    }
    const order = rows.find(element => element.id == id);
    if (order) {
      res.json({
        id: order.id,
        name: order.name,
        address: order.address,
        base: order.base,
        topping: order.topping,
        status: order.status
      });
    } else {
      res.status(404).send('Sorry wrong id');
    }
  });
});

app.get('/api/orders', (req, res) => {
  const { type, status } = req.query;
  if (type && status) {
    if ((status === 'ordered' || status === 'inprogress' || status === 'done') && (type === 'all' || type === 'vegetarian')) {
      if (type === 'all') {
        const sqlall = `SELECT * FROM orders WHERE status = '${status}';`
        conn.query(sqlall, (err, rows) => {
          if (err) {
            res.status(500).json({ error: 'internal server error' });
            console.log(err);
            return;
          }
          res.json(rows);
        })
      }
    } else {
      res.status(400).send('wrong status or type')
    }
  } else {
    res.status(400).send('wrong query params');
  }
});

app.patch('/api/orders/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  if (id && (status === 'ordered' || status === 'inprogress' || status === 'done')) {
    const sqlquery = 'SELECT * FROM orders;'
    conn.query(sqlquery, (err, rows) => {
      if (err) {
        res.status(500).json({ error: 'internal server error' });
        console.log(err);
        return;
      }
      if (rows.find(element => element.id == id)) {
        const sqlupdate = `UPDATE orders SET status = '${status}' WHERE id ='${id}';`
        conn.query(sqlupdate, (err) => {
          if (err) {
            res.status(500).json({ error: 'internal server error' });
            console.log(err);
            return;
          } else {
            res.json({ message: `Updated the order status for ${status} where id = ${id}` });
          }
        });
      } else {
        res.status(400).send('wrong id');
      }
    });
  } else {
    res.status(400).send('wrong status');
  }
});

// app.delete('/orders', (req, res) => {
//   const { id } = req.body;
//   const sql = 'SELECT * FROM orders;';
//   conn.query(sql, (err, rows) => {
//     if (err) {
//       console.log(err.message);
//       res.status(500).json({
//         error: 'Internal server error'
//       });
//       return;
//     }
//     if (rows.find(data => data.id === id)) {
//       conn.query(`DELETE FROM orders WHERE id = '${id}';`, (err, data) => {
//         if (err) {
//           console.log(err.message);
//           res.status(500).json({
//             error: 'Internal server error'
//           });
//           return;
//         }
//         res.json({
//           message: 'Succesfully deleted'
//         });
//       });
//     } else {
//       res.json({
//         message: 'Wrong ID'
//       });
//     }
//   });

// });

app.delete('/orders/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const ids = `SELECT * FROM orders`;
  conn.query(ids, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    if (data.find(row => row.id == id)) {
      conn.query(`SELECT * FROM orders WHERE id = '${id}';`, (err, row) => {
        if (err) {
          console.log(err.message);
          res.status(500).json({
            error: 'Internal server error'
          });
          return;
        }
        if (row[0].status == status) {
          conn.query(`DELETE FROM orders WHERE id = '${id}';`, (err, deleted) => {
            if (err) {
              console.log(err.message);
              res.status(500).json({
                error: 'Internal server error'
              });
              return;
            }
            res.status(204).json({
              message: 'Successfully deleted'
            });
          });
        } else {
          res.status(403).json({
            error: 'Wrong status'
          });
        }
      })
    } else {
      res.status(404).json({
        error: 'not existing ID'
      });
    }
  });
});