const add = function (x, y) {
  return x + y
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (x) {
  return x.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (x) {
  return x.reduce((acc, curr) => acc * curr, 1);
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (x) {
  if (x === 0 || x === 1)
    return 1;
  for (var i = x - 1; i >= 1; i--) {
    x *= i;
  }
  return x;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
