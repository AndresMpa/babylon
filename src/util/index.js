module.exports = {
  arrayFromNumber: (array, limit = 1) =>
    Array(Math.ceil(array.length / limit))
      .fill()
      .map((_, item) => item + 1),
};
