function bump(x) {
  const countBump = x.split("").filter((e) => e === "n");
  return countBump.length >= 15 ? "Car Dead" : "Woohoo!";
}

console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));
console.log(bump("______n___n_"));
