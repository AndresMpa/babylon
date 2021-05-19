let userName = prompt("What's your user name?: ", "User");
console.log(`Hello, ${userName}`);

let number = prompt("Write a number: ");
if (number > 10) {
  console.log("You entered a big number");
} else if (number === 10) {
  console.log(`That's equal to 10`);
} else if (number < 10) {
  console.log("You entered a number smaller than 10");
  for (let i = 0; i < 10; i++) {
    if (i == number) {
      console.log(`Here is a ${i} <--- This is your number`);
    } else {
      console.log(`Here is a ${i}`);
    }
  }
} else {
  console.log(`That's no a number`);
}
