let test = require('tape')
import { apple } from './apples';

'use strict'

test('testing object apple', t => {
  t.equal(apple.getApple(), 'apple', 'getApple returns with apple');
  t.notEqual(apple.getApple(), 'apple2', 'getApple returns not with apple2');
  t.end();
})