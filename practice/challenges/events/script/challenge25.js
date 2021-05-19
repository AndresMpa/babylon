let box = document.querySelector("div");
let node;
let text;

document.querySelector("#add").addEventListener("click", function (e) {
  e.preventDefault();
  node = document.createElement("p");
  text = document.createTextNode("You append a paragraph");
  node.appendChild(text);

  box.appendChild(node);
});

document.querySelector("#remove").addEventListener("click", function (e) {
  e.preventDefault();
  box.removeChild(box.lastChild);
});
