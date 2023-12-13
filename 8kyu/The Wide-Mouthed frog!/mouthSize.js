function mouthSize(animal) {
  const lowerCaseAnimal = animal.toLowerCase();

  return lowerCaseAnimal === "alligator" ? "small" : "wide";
}

console.log(mouthSize("alligator"))
console.log(mouthSize("ant bear"))
