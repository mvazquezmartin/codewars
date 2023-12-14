function likes(names) {
  const like = names.length <= 1 ? "likes" : "like";
  if (names.length === 0) return `no one ${like} this`;
  if (names.length === 1) return `${names[0]} ${like} this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} ${like} this`;
  if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} ${like} this`;
  return `${names[0]}, ${names[1]} and ${names.length - 2} others ${like} this`;
}

function likes2(names) {
  const length = names.length;
  const like = length === 1 ? "likes" : "like";

  switch (length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} ${like} this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} ${like} this`;
    default:
      return `${names[0]}, ${names[1]} and ${length - 2} others ${like} this`;
  }
}

console.log(likes2([]));
console.log(likes2(["Peter"]));
console.log(likes2(["Jacob", "Alex"]));
console.log(likes2(["Max", "John", "Mark"]));
console.log(likes2(["Alex", "Jacob", "Mark", "Max"]));
