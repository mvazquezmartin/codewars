function domainName(url) {
  const withoutProtocolAndWww = url.replace(/(https?:\/\/)?(www\.)?/, "");

  const dotPosition = withoutProtocolAndWww.indexOf(".");

  const domain =
    dotPosition !== -1
      ? withoutProtocolAndWww.substring(0, dotPosition)
      : withoutProtocolAndWww;

  return domain;
}

console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));
console.log(domainName("http://www.zombie-bites.com"));
