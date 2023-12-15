function nearestSq(n) {
  let sqrtN = Math.sqrt(n);
    
  let lowerSq = Math.floor(sqrtN) ** 2;
  let upperSq = Math.ceil(sqrtN) ** 2;
  
  return n - lowerSq < upperSq - n ? lowerSq : upperSq;
}

console.log(nearestSq(111));
