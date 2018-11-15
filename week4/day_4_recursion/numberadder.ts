// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function sumTo(n) {
  if (n == 1) return 1;

  return n + sumTo(n - 1);
}

console.log(sumTo(10));