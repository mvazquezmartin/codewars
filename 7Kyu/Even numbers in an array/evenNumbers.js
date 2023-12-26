function evenNumbers(array, number) {
  const arr = array.reverse();
  const rta = [];
  for (let i = 0; i < arr.length; i++) {
    if (rta.length === number) break;
    if (arr[i] % 2 === 0) {
      rta.push(arr[i]);
    }
  }
  return rta.reverse();
}

function evenNumbers2(array, number) {
  return array.filter((num) => num % 2 === 0).slice(-number);
}

console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
