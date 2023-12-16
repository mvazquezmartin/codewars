function longestConsec(strarr, k) {
  if (strarr.length < k || strarr.length === 0 || k <= 0) return "";
  let mostLength = "";

  for (let i = 0; i < strarr.length; i++) {
    const sumLength = strarr.slice(i, k + i).join("");
    if (mostLength.length < sumLength.length) {
      mostLength = sumLength;
    }
  }
  return mostLength;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
); //abigailtheta
