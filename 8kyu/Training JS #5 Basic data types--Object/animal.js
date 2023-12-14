function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}


console.log(animal({name:"rabbit",legs:4,color:"gray"}))