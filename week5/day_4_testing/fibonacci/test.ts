let test = require('tape')
import { fibonacci } from './fibonacci';

'use strict'

test('testing fibonacci sequence', t => {
  t.deepEqual(fibonacci(0), 0, 'value fo 0 is 0');
  t.end();
})
test('testing fibonacci sequence', t => {
  t.deepEqual(fibonacci(1), 1, 'value of 1 is 1');
  t.end();
})
test('testing fibonacci sequence', t => {
  t.deepEqual(fibonacci(5), 5, 'value of 5 is 5');
  t.end();
})
test('testing fibonacci sequence', t => {
  t.throws (function() {fibonacci(-12)}, 'provide a positive number') 
  t.end()
})