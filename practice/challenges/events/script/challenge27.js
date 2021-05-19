(function () {
  "use strict";
  const title = document.querySelector("h1");
  const number = document.querySelectorAll("input")[0];
  let numberValue;

  document
    .querySelectorAll("input")[1]
    .addEventListener("click", function (event) {
      event.preventDefault();
      numberValue = number.value;
      console.log(numberValue);

      title.style = `font-size: ${numberValue}px`;
    });
})();
