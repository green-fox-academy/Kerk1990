let test = require('tape')
import { countLetter } from './countletter';

'use strict'

test('testing letter count', t => {
  t.deepEqual(countLetter('banana'), { b: 1, a: 3, n: 2 }, 'counting the letters of string');
  t.end();
})
