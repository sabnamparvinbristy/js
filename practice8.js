function checkAge(age) {
  if (age >= 18) {
    return "eligible for driving license";
  } else {
    return "not eligible";
  }
}
console.log(checkAge(15));
console.log(checkAge(18));
