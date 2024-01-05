function wave(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
  }

  return result;
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
