function checkDay(day) {
  if (
    day == "monday" ||
    day == "tuesday" ||
    day == "wednesday" ||
    day == "thursday" ||
    day == "friday"
  ) {
    return `${day} is working day`;
  } else if (day == "saturday" || day == "sunday") {
    return `${day} is holiday`;
  } else {
    return "invalid";
  }
}

console.log(checkDay("monday"));
console.log(checkDay("saturday"));
