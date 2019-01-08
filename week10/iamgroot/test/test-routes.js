'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  request(app)
    .get('/groot?somemessage')
    .expect(210)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {
        error: 'I am Groot!'
      }, ' whitout query test');
      t.end();
    });
});

test('groot endpoint', (t) => {
  request(app)
    .get('/groot?somemessage=fdsfdsgfsd')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {
        "recieved": 'fdsfdsgfsd',
        "translated": "I am Groot!"
      }, ' whitout query test');
      t.end();
    });
});

