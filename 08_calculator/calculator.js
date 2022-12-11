const add = function(_num1, _num2) {
	return _num1 + _num2;
};

const subtract = function(_num1, _num2) {
	return _num1 - _num2
};

const sum = function(_nums) {
	let sum = 0;
  for (let num of _nums) {
    sum += num;
  }
  return sum;
};

const multiply = function(_nums) {
  let product = 1;
  for (let num of _nums) {
    product *= num;
  }
  return product;
};

const power = function(_num1, _num2) {
	return _num1 ** _num2;
};

const factorial = function(_num) {
	if (_num <= 0) return 1;
  let fact = 1;
  for (let i = 1; i <= _num; i++) {
    fact *= i;
  }
  return fact;
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
