(function () {
  "use strict";
  const box = document.querySelector("div");

  box.addEventListener("mouseover", function () {
    box.className = "big";
  });

  box.addEventListener("mouseout", function () {
    box.removeAttribute("class");
  });
})();
