function nbDig(n, d) {
  const rta = [...Array(n + 1).keys()];
  const squares = rta.map((e) => e ** 2);
  return squares
    .join("")
    .split("")
    .filter((e) => Number(e) === d).length;
}

console.log(nbDig(10, 1));
