function revrot(str, sz) {
  if (sz <= 0 || str === "" || sz > str.length) {
    return "";
  }

  const chunks = [];
  for (let i = 0; i < str.length; i += sz) {
    const chunk = str.slice(i, i + sz);
    
    if (chunk.length === sz) {
      const sumOfCubes = chunk.split('').reduce((sum, digit) => sum + Math.pow(parseInt(digit), 3), 0);

      if (sumOfCubes % 2 === 0) {
        chunks.push(chunk.split('').reverse().join(''));
      } else {
        chunks.push(chunk.slice(1) + chunk[0]);
      }
    }
  }

  return chunks.join('');
}

console.log(revrot("66443875", 8)); // "64438756"
console.log(revrot("664438769", 8)); // "67834466"
console.log(revrot("123456779", 8)); // "23456771"
console.log(revrot("", 8)); // ""
console.log(revrot("123456779", 0)); // ""