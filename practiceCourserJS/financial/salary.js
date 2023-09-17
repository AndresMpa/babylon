import { ds } from "./dataset.js";

// Utility
const sortArray = (itemList) => itemList.sort((a, b) => a - b);

const isEven = (number) => number % 2;

// Statistical information

const getAverange = (list) => {
  return list.reduce((count = 0, element) => count + element) / list.length;
};

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

// General sample

let sample = ds.map((item) => {
  return item.salary;
});

console.group("Global stats")
console.log(getMedian(sortArray(sample)));
console.groupEnd()

// Top 10% sample

let top10p = sample.splice(
  Math.floor((sample.length * 90) / 100),
  sample.length - Math.floor((sample.length * 90) / 100)
);

console.group("Top 10 stats")
console.log(getMedian(sortArray(top10p)));
console.groupEnd()
