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

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, 'question.html'));
});

const randomQuestSelector = 'SELECT * FROM questions ORDER BY RAND() LIMIT 1;';
app.get('/api/game', (req, res) => {
  conn.query(randomQuestSelector, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(400).send();
    } else {
      const selectAnswerOptions = 'SELECT * FROM answers WHERE question_id=?;';
      conn.query(selectAnswerOptions, [data[0].id], (err, answersData) => {
        console.log(answersData)
        if (err) {
          console.log(err.message);
          res.status(400).send();
        } else {
          const questionObj = {
            id: data[0].id,
            question: data[0].question,
            answers: answersData
          }
          res.json(questionObj)
        }
      });
    }
  });
});




const selectQuestions = 'SELECT * FROM questions;';
app.get('/api/questions', (req, res) => {
  conn.query(selectQuestions, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(400).send();
    } else {
      res.status(200).json(data);
    }
  });
});

const addNewQuestion = 'INSERT INTO questions (question) VALUES (?);';
app.post('/api/questions', (req, res) => {
  const { question, answers } = req.body;
  conn.query(addNewQuestion, question, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(400).send();
    } else {
      selectQuestionId(question, answers, res);
    }
  });
});

const selectNewQuestionId = 'SELECT id FROM questions WHERE question = ?;';
const selectQuestionId = (question, answers, res) => {
  conn.query(selectNewQuestionId, [question], (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(400).send();
    } else {
      answers.forEach(answer => {
        addNewAnswers(data[0].id, answer, res);
      });
    }
  });
}

const insertNewAnswers = 'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, ?);';
const addNewAnswers = (questionId, answer, res) => {
  conn.query(insertNewAnswers, [questionId, answer.answer, answer.is_correct], (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(400).send();
    } else {
      res.status(200).send();
    }
  });
}

const deleteByIdFromQuestions = 'DELETE FROM questions WHERE id = ?;';
app.delete('/api/questions/:id', (req, res) => {
  const { id } = req.params;
  conn.query(deleteByIdFromQuestions, [id], (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(400).send();
    } else {
      if (data.affectedRows === 0) {
        res.status(404).json({
          message: 'Wrong id used!'
        });
      } else {
        deleteAnswers(id, res);
      }
    }
  });
});

const deleteById = 'DELETE FROM answers WHERE question_id = ?;';
const deleteAnswers = (id, res) => {
  conn.query(deleteById, [id], (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(400).send();
    } else {
      res.status(200).json({
        message: 'Delete was successfull!'
      });
    }
  });
}

app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));