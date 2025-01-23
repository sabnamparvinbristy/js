/*
var num = 7;

if (num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
*/
function checkOddEven(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkOddEven(7));
console.log(checkOddEven(36));
