function queueTime(customers, n) {
  if (n === 1)
    return customers.length !== 0
      ? customers.reduce((acum, current) => acum + current)
      : 0;

  const tills = Array(n).fill(0);

  console.log(tills);

  for (const time of customers) {
    const nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += time;
  }

  return Math.max(...tills);
}

console.log(queueTime([], 1)); // 0
console.log(queueTime([1, 2, 3, 4], 1)); // 10
console.log(queueTime([2, 3, 10], 2)); // 5;
