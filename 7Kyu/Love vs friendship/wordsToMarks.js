function wordsToMarks(string) {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  let res = 0;

  for (const char of string) {
    const value = letters.indexOf(char);
    res += value + 1;
  }

  return res;
}

console.log(wordsToMarks("friends"));
