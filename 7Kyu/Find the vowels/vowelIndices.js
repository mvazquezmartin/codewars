function vowelIndices(word){
  const vowels = ["a", "e", "i","o", "u", "y"]
  const rta = word.toLowerCase().split("").map((letter, index)=> {
    console.log(letter)
    if(vowels.includes(letter)) return index + 1
  })
  return rta.filter(Number)
}

console.log(vowelIndices("YoMama"))