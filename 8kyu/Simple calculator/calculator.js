function calculator(a, b, sign) {
  const mathSign = ["-", "+", "*", "/"];
  if (
    !mathSign.includes(sign) ||
    typeof a !== "number" ||
    typeof b !== "number"
  )
    return "unknown value";

  return eval(a + sign + b);
}

// function calculator(a,b,sign) {
//   try
//     { return eval(a+sign+b); }
//   catch(e)
//     { return "unknown value"; }
// }

console.log(calculator(1, 2, "+"));
