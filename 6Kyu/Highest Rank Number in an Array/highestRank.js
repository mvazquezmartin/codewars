function highestRank(arr) {
  const counter = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  return Number(Object.keys(counter).reduce((a, b) =>
    counter[a] > counter[b] ? a : b
  ));
}

console.log(typeof highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));
