let paragrah = document.querySelector("p");
let button = document.querySelector("button");
let color = true;

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (color) {
    button.innerHTML = "Turn to black";
    paragrah.style = "color: green";
    color = false;
  } else {
    button.innerHTML = "Turn to green";
    paragrah.style = "color: black";
    color = true;
  }
});
