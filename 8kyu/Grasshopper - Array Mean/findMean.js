const findAverage = (nums) => {
  return nums.reduce((acum, current) => acum + current, 0) / nums.length;
};

console.log(findAverage([1, 3, 5, 7]));
