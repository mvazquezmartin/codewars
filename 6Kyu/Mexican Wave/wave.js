function wave(str) {
  const strLower = str.toLowerCase();
  const myWave = [];
  for (let i = 0; i < strLower.length; i++) {
    const upperLater =
      strLower.slice(0, i) + strLower[i].toUpperCase() + strLower.slice(i + 1);
    myWave.push(upperLater);
  }
  return myWave;
}

function wave2(str) {
  return str
    .split("")
    .map(
      (char, index) =>
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
    );
}

console.log(wave2(" gap "));
