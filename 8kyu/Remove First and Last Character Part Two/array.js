function array(string) {
  const arr = string.split(",");
  if (arr.length <= 2) return null;
  return arr.slice(1, arr.length - 1).join(" ");
}

const a = "A1,B2,C3,D4,E5";
const b = "A,1,23,456,78,9,Z";
const c = "";

console.log(array(a));
