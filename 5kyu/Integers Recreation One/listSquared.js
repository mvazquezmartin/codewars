function listSquared(m, n) {
  function getDivisorsSum(num) {
    let sum = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i * i;
        if (i !== num / i) {
          sum += (num / i) * (num / i);
        }
      }
    }
    return sum;
  }

  const result = [];

  for (let i = m; i <= n; i++) {
    const divisorsSum = getDivisorsSum(i);
    const sqrtSum = Math.sqrt(divisorsSum);

    if (Number.isInteger(sqrtSum)) {
      result.push([i, divisorsSum]);
    }
  }

  return result;
}

console.log(listSquared(1, 246));
