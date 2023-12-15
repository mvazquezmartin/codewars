function primeFactors(n) {
  const primeFactors = {};

  for (let factor = 2; factor <= n; factor++) {
    while (n % factor === 0) {
      n /= factor;
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
    }
  }

  const result = Object.entries(primeFactors)
    .map(([prime, exponent]) => {
      return exponent > 1 ? `(${prime}**${exponent})` : `(${prime})`;
    })
    .join("");

  return result;
}

console.log(primeFactors(86240));
console.log(primeFactors(7775460)); //(2**2)(3**3)(5)(7)(11**2)(17)
