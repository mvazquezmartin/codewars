function noBoringZeros(n) {
  const str = n.toString();
  let index = str.length - 1;

  while (str[index] === "0" && index > 0) {
    index--;
  }

  const result = Number(str.slice(0, index + 1));

  return result;
}

console.log(noBoringZeros(-1050));
