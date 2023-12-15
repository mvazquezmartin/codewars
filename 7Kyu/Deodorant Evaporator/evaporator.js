function evaporator(content, evap_per_day, threshold) {
  const limitContent = (content * threshold) / 100;
  const evapPerDay = evap_per_day / 100;
  let days = 0;
  let contentCount = content;
  
  while (limitContent < contentCount) {
    contentCount -= contentCount * evapPerDay;
    days++;
  }
  
  return days;
}

console.log((10 * 5) / 100);
console.log((10 * 10) / 100);
console.log(evaporator(10, 10, 5));
