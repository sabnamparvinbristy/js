function checkBalance(balance, taka) {
  if (taka < 500) {
    return "Minimum withdrawal is 500";
  } else if (taka <= balance) {
    return "Transaction Successful";
  } else {
    return "Insufficient Balance";
  }
}

console.log(checkBalance(1000, 900));
console.log(checkBalance(1000, 200));
console.log(checkBalance(1000, 2000));
