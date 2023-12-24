function divCon(x) {
  const sumNumbers = x.reduce((sum, el) => (typeof el === 'number' ? sum + el : sum), 0);
  const sumStrings = x.reduce((sum, el) => (typeof el === 'string' ? sum - Number(el) : sum), 0);
  return sumNumbers + sumStrings;
}

function divCon2(x) {
  return x.reduce((sum, el) => {
    return typeof el === 'number' ? sum + el : sum - Number(el);
  }, 0);
}

console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
