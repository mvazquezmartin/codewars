function encrypt(text, n) {
  if (!text || n <= 0) {
    return text;
  }
  let rta = text;

  for (let i = 0; i < n; i++) {
    const odd_index = rta
      .split("")
      .filter((e, index) => {
        if (index % 2 !== 0) return e;
      })
      .join("");
    const even_index = rta
      .split("")
      .filter((e, index) => {
        if (index % 2 === 0) return e;
      })
      .join("");
    rta = odd_index + even_index;
  }

  return rta;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join("");
  }
  return encryptedText;
}

const pw = "012345";

console.log(encrypt(pw, 1));
console.log(decrypt(pw, 1));
