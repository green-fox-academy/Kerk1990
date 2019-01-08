'use strict';
const test = require('tape');
const request = require('supertest');
const app = require('../routes');
test('yondu endpoint', (t) => {
  request(app)
    .get('/yondu?distance=100&time=20')
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {
        'distance': '100',
        'time': '20',
        'speed': 5
      });
      t.end();
    });
});

test('yondu endpoint without parameter', (t) => {
  request(app)
    .get('/yondu')
    .expect('Content-type', /json/)
    .expect(210)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {
        'error': 'no data provided'
      });
      t.end();
    });
});

test('yondu endpoint with one parameter', (t) => {
  request(app)
    .get('/yondu?distance=100')
    .expect('Content-type', /json/)
    .expect(210)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {
        'error': 'no data provided'
      });
      t.end();
    });
});