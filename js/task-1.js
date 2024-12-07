function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let totalPrice = 0;
  if (quantity * pricePerDroid > customerCredits) {
    return 'Insufficient funds!';
  } else {
    totalPrice += quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500, 8000)); // "You ordered 10 droids worth 5000 credits!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"