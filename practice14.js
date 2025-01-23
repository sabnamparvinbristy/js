function login(email, password) {
  if (email == "user@example.com" && password == "123456") {
    return "Welcome User";
  } else if (email !== "user@example.com") {
    return "Invalid Email";
  } else {
    return "Invalid Password";
  }
}

console.log(login("user@example.com", "123456"));
console.log(login("user1@example.com", "123456"));
console.log(login("user@example.com", "12345678"));
