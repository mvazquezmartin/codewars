function warnTheSheep(queue) {
  const reversedQueue = [...queue].reverse();
  if (reversedQueue[0] === "wolf")
    return "Pls go away and stop eating my sheep";
  const index = reversedQueue.findIndex((element) => element === "wolf");
  return `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`;
}

function warnTheSheep2(queue) {
  const wolfIndex = queue.indexOf("wolf");

  if (wolfIndex === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    const sheepNumber = queue.length - wolfIndex - 1;
    return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`;
  }
}

console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
console.log(
  warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])
);
