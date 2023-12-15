function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  let maxDifference = -1;

  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      const currentDifference = Math.abs(a1[i].length - a2[j].length);
      if (currentDifference > maxDifference) {
        maxDifference = currentDifference;
      }
    }
  }

  return maxDifference;
}

const s1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz",
];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
const s3 = [];

console.log(mxdiflg(s1, s2)); // 13
console.log(mxdiflg(s3, s2)); // -1
