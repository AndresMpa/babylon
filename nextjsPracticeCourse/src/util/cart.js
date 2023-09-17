module.exports = {
  sumTotal: (array) => {
    const reducer = (accumalator, currentValue) =>
      accumalator + currentValue.price;
    const sum = array.reduce(reducer, 0);
    return sum;
  },
  getDate: () => {
    const today = new Date();
    return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  },
};
