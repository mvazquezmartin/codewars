const isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0;
};
const isSquare2 = (n) => {
  return Number.isInteger(Math.sqrt(n));
};
console.log(isSquare(26));
