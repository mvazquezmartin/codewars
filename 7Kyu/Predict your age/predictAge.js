function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  const ageArr =
    Math.sqrt(
      [age1, age2, age3, age4, age5, age6, age7, age8]
        .map((e) => e * e)
        .reduce((a, b) => a + b)
    ) / 2;
  return Math.floor(ageArr);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45)); // 86
