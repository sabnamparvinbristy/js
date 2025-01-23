function checkNum(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "0";
  }
}
console.log(checkNum(10));
console.log(checkNum(-5));
console.log(checkNum(0));
