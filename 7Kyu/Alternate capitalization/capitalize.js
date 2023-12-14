function capitalize(s) {
  const sArray = s.split("");

  const capitalizeAtIndex = (index) =>
    sArray.map((e, i) => (i % 2 === index ? e.toUpperCase() : e)).join("");

  return [capitalizeAtIndex(0), capitalizeAtIndex(1)];
}

console.log(capitalize("abcdefghi"));
