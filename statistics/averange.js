const getAverange = (list) => {
  return list.reduce((count = 0, element) => count + element) / list.length;
};

console.log(getAverange([122, 233, 523, 214]));
