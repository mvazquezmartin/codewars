function arithmetic(a, b, operator) {
  const sign = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/",
  };
  return eval(a + sign[operator] + b);
}

// const arithmetic = (a, b, operator) => ({
//   'add'     : a + b,
//   'subtract': a - b,
//   'multiply': a * b,
//   'divide'  : a / b
// }[operator]);

console.log(arithmetic(5, 2, "add"));
