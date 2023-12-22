function minSum(arr) {
  const arr1 = arr.sort((a, b) => a - b).slice(0, arr.length / 2);
  const arr2 = arr.sort((a, b) => a - b).slice(arr.length / 2).reverse();
  let rta = 0
  for(let i=0; i<arr1.length;i++){
    rta += arr1[i] * arr2[i]
  }  
  return rta;
}

function minSum2(arr) {
  arr.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    result += arr[i] * arr[j];
  }

  return result;
}

console.log(minSum([12,6,10,26,3,24]))