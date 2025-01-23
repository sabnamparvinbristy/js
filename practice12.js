function checkPass(pass) {
  if (pass == "Admin@123") {
    return "login successful";
  } else if (!pass) {
    return "Password cannot be empty";
  } else {
    return "Incorrect Password";
  }
}
console.log(checkPass("Admin@123"));
console.log(checkPass("Admin@122"));
console.log(checkPass(""));