const primary = ["red", "blue", "yellow"];
const secondary = ["orange", "green", "purple"];

let userColor = prompt("Write a color: ").toString().toLowerCase();

if (userColor == primary[0] || userColor == primary[1] || userColor == primary[2]) {
  console.log("You picked a primary color");
} else if (userColor == secondary[0] || userColor == secondary[1] || userColor == secondary[2]) {
  console.log("You picked a secondary color");
} else {
  console.log(`I don't know what color is that`);
}
