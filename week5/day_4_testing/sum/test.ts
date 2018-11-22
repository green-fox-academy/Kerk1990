let test = require('tape')
import { Sum } from './sum';

'use strict'

test('testing sum', t => {
  let numbers: Sum = new Sum
  t.equal(numbers.sum([1, 33, 666]), 700);
  t.end();
})
test('testing sum', t => {
  let nullArr: Sum = new Sum
  t.equal(nullArr.sum([42]), 42);
  t.end();
})
test('testing sum', t => {
  let emptyList: Sum = new Sum
  t.equal(emptyList.sum([]), 0);
  t.end();
})
test('testing sum', t => {
  let nullArr: Sum = new Sum
  t.equal(nullArr.sum([null]), 0);
  t.end();
})
test('testing sum', t => {
  let stringArr: Sum = new Sum
  t.notEqual(stringArr.sum(['anything']), NaN);
  t.end();
})