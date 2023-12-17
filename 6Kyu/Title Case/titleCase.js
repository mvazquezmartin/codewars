function titleCase(title, minorWords = "") {
  const minorWordsArr = minorWords.toLowerCase().split(" ");
  const titleArr = title.toLowerCase().split(" ");

  return titleArr
    .map((word, index) => {
      return index === 0 || !minorWordsArr.includes(word)
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word.toLowerCase();
    })
    .join(" ");
}

console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
console.log(titleCase("the quick brown fox"));
