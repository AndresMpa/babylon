let title = document.querySelector("h1");
let paragraph = document.querySelector("p");

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  alert('${event.key}');
  p.innerHTML = `You presed ${event.key}`;
});
