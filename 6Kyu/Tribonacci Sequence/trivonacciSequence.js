function tribonacci(signature,n){  
  if (n === 0) {
    return [];
  }
  
  let result = signature.slice();
  
  for (let i = 3; i < n; i++) {
    let nextElement = result[i - 1] + result[i - 2] + result[i - 3];
    result.push(nextElement);
  }
  
  return result.slice(0, n);

}

console.log(tribonacci([3,2,1], 10))