let content = document.querySelectorAll("p");
let button = document.querySelector("button");
let color = true;

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (color) {
    button.innerHTML = "Turn to black";
    for (let paragrah = 0; paragrah < content.length; paragrah++) {
      content[paragrah].style = "color: green";
    }
    color = false;
  } else {
    button.innerHTML = "Turn to green";
    for (let paragrah = 0; paragrah < content.length; paragrah++) {
      content[paragrah].style = "color: black";
    }
    color = true;
  }
});
