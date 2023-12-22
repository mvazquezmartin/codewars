function diamond(n) {
  if (n % 2 === 0 || n < 0) return null;

  let result = "";

  // Upper half of the diamond
  for (let i = 1; i <= n; i += 2) {
    const spaces = " ".repeat((n - i) / 2);
    const stars = "*".repeat(i);
    result += spaces + stars + "\n";
  }

  // Lower half of the diamond
  for (let i = n - 2; i >= 1; i -= 2) {
    const spaces = " ".repeat((n - i) / 2);
    const stars = "*".repeat(i);
    result += spaces + stars + "\n";
  }

  return result;
}

console.log(diamond(7));

