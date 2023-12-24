function noOdds( values ){
  return values.filter((e)=> e%2 === 0)
}

console.log(noOdds([0,1,2,3]))
