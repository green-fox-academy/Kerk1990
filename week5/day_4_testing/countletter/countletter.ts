export function countLetter(str) {
  return str.split('').reduce(function (obj, s) {
    obj[s] = (obj[s] || 0) + 1;
    return obj;
  }, {});
}
console.log(countLetter('banana'));