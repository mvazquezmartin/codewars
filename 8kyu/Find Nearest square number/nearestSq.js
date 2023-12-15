function nearestSq(n) {
  let sqrtN = Math.sqrt(n);

  // Calcular los cuadrados de los números siguiente y anterior
  let lowerSq = Math.floor(sqrtN) ** 2;
  let upperSq = Math.ceil(sqrtN) ** 2;

  // Determinar cuál cuadrado está más cerca
  return n - lowerSq < upperSq - n ? lowerSq : upperSq;
}

console.log(nearestSq(111));
