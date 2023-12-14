const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears, dogYears;

  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 15 + 9;
    dogYears = 15 + 9;
  } else {
    catYears = 15 + 9 + 4 * (humanYears - 2);
    dogYears = 15 + 9 + 5 * (humanYears - 2);
  }

  return [humanYears, catYears, dogYears];
};

const humanYearsCatYearsDogYears2 = function (y) {
  if (y == 1) return [1, 15, 15];
  if (y == 2) return [2, 24, 24];
  return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
};

console.log(humanYearsCatYearsDogYears(10));
