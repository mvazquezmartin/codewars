function sumTwoSmallestNumbers(numbers) {  
  const sort = numbers.sort((a,b)=> a-b)
  const sum = sort[0] + sort[1]
  return sum
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))