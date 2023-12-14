function sumPairs(ints, s) {
  const seenNumbers = new Set();

  for (let i = 0; i < ints.length; i++) {
    const complement = s - ints[i];

    if (seenNumbers.has(complement)) {
      return [complement, ints[i]];
    }

    seenNumbers.add(ints[i]);
  }

  return undefined;
}

console.log(sumPairs([11, 3, 7, 5], 10));

