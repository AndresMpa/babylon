(function () {
  "use strict";
  const box = document.querySelector("div");
  let count = 1;
  let node;
  let text;

  document.querySelector("#add").addEventListener("click", function (e) {
    e.preventDefault();
    count++;
    node = document.createElement("p");
    text = document.createTextNode(`Paragraph #${count}`);
    node.appendChild(text);

    box.appendChild(node);
  });

  document.querySelector("#remove").addEventListener("click", function (e) {
    e.preventDefault();
    if (count > 1) {
      count--;
      box.removeChild(box.lastChild);
    } else {
      alert("Don't delete last paragraph");
    }
  });
})();
