'use strict';

export function add(a: number, b: number): number {
  return (a + b);
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
};

export function median(pool) {
  pool = pool.sort(function (a, b) { return a - b; });
  let i = pool.length / 2;
  return i % 1 == 1 ? (pool[i - 1] + pool[i]) / 2 : pool[Math.floor(i)];
}

export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i', 'A', 'U', 'O', 'E', 'I'].some(vowel => vowel === character);
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}