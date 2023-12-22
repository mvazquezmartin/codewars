function alphabetWar(fight) {
  const right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
    count: 0,
  };
  const left = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
    count: 0,
  };

  for (const i of fight) {
    if (left[i]) left.count += left[i];
    if (right[i]) right.count += right[i];
  }

  return right.count === left.count
    ? "Let's fight again"
    : left.count > right.count
    ? "Left side wins!"
    : "Right side wins!";
}

function alphabetWar2(fight) {
  const powers = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
    m: -4,
    q: -3,
    d: -2,
    z: -1,
  };

  const totalPower = fight
    .split("")
    .reduce((sum, letter) => sum + (powers[letter] || 0), 0);

  if (totalPower === 0) {
    return "Let's fight again!";
  } else if (totalPower > 0) {
    return "Left side wins!";
  } else {
    return "Right side wins!";
  }
}

console.log(alphabetWar("sswss"));
