function solve(s) {
  const withOutVowels = s
    .split(/[aeiou]/)
    .filter((subarray) => subarray !== "");
  const consonantValues = withOutVowels
    .map((subarray) => subarray.split(""))
    .map((e) =>
      e.reduce((a, b) => a + b.charCodeAt(0) - "a".charCodeAt(0) + 1, 0)
    );
  return Math.max(...consonantValues);
}

console.log(solve("zodiacs"));
