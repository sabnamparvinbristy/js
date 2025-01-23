function PriceDiscount(price) {
  let totalPrice;
  let discount;

  if (price > 500) {
    discount = price * (20 / 100);
  } else if (price >= 200 && price <= 500) {
    discount = price * (10 / 100);
  } else {
    discount = 0;
  }

  totalPrice = price - discount;
  return `You get ${discount.toFixed(
    2
  )}tk discount. your price is ${totalPrice.toFixed(2)}tk.`;
}
console.log(PriceDiscount(600));
console.log(PriceDiscount(300));
console.log(PriceDiscount(150));
