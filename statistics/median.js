const getAverange = (list) => {
  return list.reduce((count = 0, element) => count + element) / list.length;
};

const sortArray = (itemList) => itemList.sort((a, b) => a - b);

const removeRepetition = (itemList) => [...new Set(itemList)];

const isEven = (number) => number % 2;

const getMedian = (itemList) => {
  let listPrototype =
    isEven(itemList.length) === 0
      ? itemList.length / 2 - 1
      : Math.floor(itemList.length / 2);

  if (!isEven(itemList.length)) {
    return getAverange([itemList[listPrototype], itemList[listPrototype + 1]]);
  } else {
    return itemList[listPrototype];
  }
};

console.log(
  getMedian(sortArray(removeRepetition([3, 6, 12, 2, 1, 5, 3, 2, 1, 4])))
);
