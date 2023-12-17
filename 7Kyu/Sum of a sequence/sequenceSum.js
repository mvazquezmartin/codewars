const sequenceSum = (begin, end, step) => {
  let rta = 0;
  for (let i = begin; i <= end; i += step) {
    rta += i;
  }
  return rta;
};

console.log(sequenceSum(3, 2, 2));
