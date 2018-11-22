export function anagram(a: string, b: string): boolean {
  let word1 = a.toLocaleLowerCase().split('').sort().join('').trim();
  let word2 = b.toLocaleLowerCase().split('').sort().join('').trim();
  if (word1 === word2) {
    return true;
  } else {
    return false;
  }
}