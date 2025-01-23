function checkNum(num) {
  if (num % 2 == 0 && num % 5 == 0) {
    return "Even and divisible by 5";
  } else {
    return "not both";
  }
}
console.log(checkNum(25));
console.log(checkNum(30));
