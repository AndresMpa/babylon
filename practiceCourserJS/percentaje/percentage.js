const registeredCoupons = [
  {
    name: "Grandma day",
    discount: 50,
  },
  {
    name: "Halloween",
    discount: 30,
  },
  {
    name: "Mr Bond, no James Bond",
    discount: 20,
  },
];

const priceWithDiscount = (price, discount) => (price * (100 - discount)) / 100;

const getDiscount = (costumerCoupon) => {
  /*
  More conventional implementation
  try {
    let couponFound = registeredCoupons.find((avalibleCoupons) => {
      return avalibleCoupons.name === costumerCoupon;
    });

    return couponFound.discount;
  } catch (e) {
    console.log(e);
    return 0
  }
  */

  try {
    return registeredCoupons.find(
      (avalibleCoupons) => avalibleCoupons.name === costumerCoupon
    ).discount;
  } catch (e) {
    return 0;
  }
};

const getTotalPrice = (payment) => {
  let totalPrice = 0;
  payment.forEach((item) => {
    let avalibleDiscount = getDiscount(item[1]);
    totalPrice += priceWithDiscount(item[0], avalibleDiscount);
  });
  return totalPrice != NaN ? totalPrice : `One of your coupons is not valid`;
};

const example = [
  [100, "Grandma day"],
  [300, "Halloween"],
  [1000, "Mr Bond, no James Bond"],
];

console.log(getTotalPrice(example));
