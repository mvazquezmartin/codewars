function dataReverse(data) {
  const rta = []
  for(let i=0; i<data.length; i+=8){
    const subarray = data.slice(i, i+8)
    rta.push(subarray)
  }
  return rta.reverse().flat()
}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))