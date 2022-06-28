(function () {
  "use strict";
  const box = document.querySelector("div");
  let node;
  let text;

  document.querySelector("button").addEventListener("click", function (e) {
    e.preventDefault();
    node = document.createElement("p");
    text = document.createTextNode("You append a paragraph");
    node.appendChild(text);

    box.appendChild(node);
  });
})();
