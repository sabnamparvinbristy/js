function monthYear(month, year) {
  if (
    month == "january" ||
    month == "march" ||
    month == "may" ||
    month == "july" ||
    month == "august" ||
    month == "october" ||
    month == "december"
  ) {
    return `${month} has 31 days`;
  } else if (
    month == "april" ||
    month == "june" ||
    month == "september" ||
    month == "november"
  ) {
    return `${month} has 30 days`;
  } else if (month == "february") {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      return "leap year & 29 days";
    } else {
      return "not leap year & 28 days";
    }
  } else {
    return "invalid month";
  }
}

console.log(monthYear("february", 2024));
console.log(monthYear("january", 2025));
