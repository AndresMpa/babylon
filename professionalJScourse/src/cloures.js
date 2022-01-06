/*
 * Son variables privadas desde el punto
 * de vista funcional, en realidad esto
 * se puede hacer con class pero esta
 * forma es más simple
 * */


const counterMaker = (number) => {
  let count = number;

  return {
    increase: () => count++,
    decrease: () => count--,
    getCount: () => count,
  };
};

let example = counterMaker(8);

example.decrease();
example.decrease();
example.decrease();
example.decrease();
console.log(example.getCount());
example.increase();
console.log(example.getCount());
