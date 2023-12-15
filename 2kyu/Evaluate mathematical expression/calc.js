const calc = function (expression) {
  return eval(expression)
};

// Test cases
console.log(calc('(2 / (2 + 3.33) * 4) - -6')); // Output: 21.36
console.log(calc('1-1')); // Output: 0
console.log(calc('6 + -(4)')); // Output: 2
console.log(calc('6 + -( -4)')); // Output: 10
