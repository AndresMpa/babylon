const sortArray = (itemList) => itemList.sort((a, b) => a - b);

const removeRepetition = (itemList) => [...new Set(itemList)];

const getRepetition = (itemList, target) => {
  let count = 0;
  itemList.forEach((item) => {
    if (item === target) {
      count++;
    }
  });
  return count;
};

const getRepetitionList = (itemList) => {
  let orderList = sortArray(removeRepetition(itemList));
  let repetitionList = [];
  orderList.forEach((element) => {
    repetitionList.push([element, getRepetition(itemList, element)]);
  });
  return repetitionList;
};

const getMode = (itemList) => {
  let modeList = getRepetitionList(itemList);
  let mode = [0, []];
  modeList.forEach((item) => {
    if (item[1] > mode[0]) {
      mode = item;
    }
  });
  return mode;
};

let sample = [5, 5, 2, 7, 8, 5, 9, 3, 4, 5, 8, 1, 1, 6, 9];

console.log(getMode(sample));
