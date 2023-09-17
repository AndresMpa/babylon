//Creating a random integer from min and max
function randomInt(min, max) {
  return Math.floor((max - min + 1) * Math.random()) + min;
}

const food = ["cheese", "fish", "luch", "dinner"];

console.log(food[randomInt(0, food.length - 1)]);
