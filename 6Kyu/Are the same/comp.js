function comp(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) return false;

  const arr1 = array1.map((e) => e * e).sort((a, b) => a - b);
  const arr2 = array2.sort((a, b) => a - b);
  
  return arr1.toString() === arr2.toString()
}

let a = [121, 144, 19, 161, 19, 144, 19, 11]  
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

const c = [2,2,3]
const d = [4,9,9]
console.log(comp(c, d));

