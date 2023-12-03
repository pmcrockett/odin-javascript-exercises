const add = function(_num1, _num2) {
	return _num1 + _num2;
};

const subtract = function(_num1, _num2) {
	return _num1 - _num2
};

const sum = function(_nums) {
  return _nums.reduce((_sum, _num) => _sum += _num, 0);
};

const multiply = function(_nums) {
  return _nums.reduce((_prod, _num) => _prod *= _num, 1);
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
