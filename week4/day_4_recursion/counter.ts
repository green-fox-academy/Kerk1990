// Write a recursive function that takes one parameter: n and counts down from n.

let countDown = function (n) {

  if (n > 0) {
    console.log(n);
    return countDown(n - 1);

  } else {
    return n;
  }
};

countDown(10);