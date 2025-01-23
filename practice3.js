function grade(num) {
  if (num >= 80 && num <= 100) {
    return "A";
  } else if (num >= 60 && num <= 79) {
    return "B";
  } else if (num >= 40 && num <= 59) {
    return "C";
  } else if (num >= 0 && num <= 39) {
    return "F";
  } else {
    return "Invalid";
  }
}

console.log(grade(89));
console.log(grade(62));
