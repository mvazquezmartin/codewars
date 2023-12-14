function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  const directionCounts = {
    n: 0,
    s: 0,
    e: 0,
    w: 0,
  };

  for (let direction of walk) {
    directionCounts[direction]++;
  }

  return (
    directionCounts["n"] === directionCounts["s"] &&
    directionCounts["e"] === directionCounts["w"]
  );
}

console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
