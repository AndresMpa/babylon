/**
  Calculates total price to pay

  @param {Array} products: Objects array

  @return {Number} total
*/
const totalPrice = (products) =>
  products.reduce((prev, curr) => (prev += curr.price), 0);

export { totalPrice };
