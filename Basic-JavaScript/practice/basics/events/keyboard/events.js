let title = document.querySelector("h1");

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  title.innerHTML = `You pressed ${event.key}`;
});
