'use strict';
require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/static', express.static('./static'));

const conn = mysql.createConnection({
  host: 'localhost',
  database: 'quizapp',
  user: 'root',
  password: 'password'
});

conn.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('connection established');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/game', (req, res) => {
  const sql = 'SELECT id, question from questions';
  const questionId = [];
  let randomNumber = 0;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(400).json({
        error: 'Internal server ERROR'
      });
      return;
    }
    rows.forEach(e => {
      questionId.push(e.id);
    });
    console.log(questionId);
    randomNumber = Math.floor(Math.random() * questionId.length);

    const sqlRandom = `SELECT questions.id, questions.question, answers.id, answers.question_id, answers.is_correct, answers.answer 
    FROM questions, answers WHERE questions.id = answers.question_id
    AND questions.id = ${questionId[randomNumber]};`;

    conn.query(sqlRandom, (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(400).json({
          error: 'Internal server error'
        });
        return;
      }
      let tempAnswers = data.map(element => {
        return {
          id: element.id,
          answer: element.answer,
          is_correct: element.is_correct,
          question_id: element.question_id
        };
      })
      res.json({
        id: data[0].id,
        question: data[0].question,
        answer: tempAnswers
      });
    });
  });
});

app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));