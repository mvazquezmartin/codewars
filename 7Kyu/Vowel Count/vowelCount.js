function getCount(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  const rta = str
    .toLowerCase()
    .split("")
    .filter((e) => vowel.includes(e));
  return rta.length;
}

function getCount2(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

console.log(getCount("abracadabra"));
