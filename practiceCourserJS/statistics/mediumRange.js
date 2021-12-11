const sortArray = (itemList) => itemList.sort((a, b) => a - b);

const mediumRange = (itemList) => {
  return (itemList[0] + itemList[itemList.length - 1]) / 2;
};

let sample = [3, 1, 5, 8, 14, 7, 3, 1, 5];

console.log(mediumRange(sortArray(sample)));
