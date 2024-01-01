function all(arr, fun) {
  return arr.map((e) => fun(e)).every((e) => e == true);
}
