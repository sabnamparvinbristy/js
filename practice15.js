function fizzGame(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz";
  } else if (num % 3 == 0) {
    return "Fizz";
  } else if (num % 5 == 0) {
    return "Buzz";
  } else {
    return num;
  }
}

console.log(fizzGame(3));
console.log(fizzGame(10));
console.log(fizzGame(30));
