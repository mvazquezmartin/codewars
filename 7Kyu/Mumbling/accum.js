function accum1(s) {
  const arrString = s.split("");
  const rta = [];
  for (let i = 0; i < arrString.length; i++) {
    const charUpper = arrString[i].toUpperCase();
    const quantityChar =
      charUpper +
      (charUpper === arrString[i]
        ? arrString[i].toLowerCase().repeat(i)
        : arrString[i].repeat(i));
    rta.push(quantityChar);
  }
  return rta.join("-");
}

function accum(s) {
  return s
    .split("")
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join("-");
}

console.log(accum("MjtkuBovqrU"));
