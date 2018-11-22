let test = require('tape')
import { anagram } from './anagram';

'use strict'

test('testing anagram', t => {
  t.equal(anagram('KuTyA', 'kutya'), true);
  t.end();
})
test('testing anagram', t => {
  t.equal(anagram('Valami', 'Valami'), true);
  t.end();
})
test('testing anagram', t => {
  t.equal(anagram('MAcska', 'EmbEr'), false);
  t.end();
})