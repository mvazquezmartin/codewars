function stockList(listOfArt, listOfCat) {
  const objBook = {};
  let rest = "";
  let isZero = 0
  for (const cat of listOfCat) {
    objBook[cat] = 0;
  }

  for (const book of listOfArt) {
    const [bookCode, bookQuantity] = book.split(" ");
    if (listOfCat.includes(bookCode[0])) {
      objBook[bookCode[0]] += Number(bookQuantity);
    }
  }

  for (const book in objBook) {
    isZero += objBook[book]
    rest += `(${book} : ${objBook[book]}) - `;
  }

  return isZero === 0 ? "" : rest.slice(0, rest.length - 3);
}

const b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
const c = ["A", "B", "C", "D"];

const d = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
const e = ["A", "B"];
// console.log(stockList(b, c)); //"(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
console.log(stockList(d, e)); // "(A : 200) - (B : 1140)"
