function sumOfMinimums(arr) {
  return arr
    .map((e) => e.sort((num1, num2) => num1 - num2)[0])
    .reduce((acum, current) => acum + current, 0);
}

function sumOfMinimums2(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
}

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
);
