function leapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return "leap year";
  } else {
    return "not leap year";
  }
}

console.log(leapYear(2024));
console.log(leapYear(2025));
