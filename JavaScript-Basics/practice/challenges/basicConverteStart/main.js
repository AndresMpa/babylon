(function () {
  "use strict";
  const result = document.querySelector("#answer");

  document
    .querySelector("#convert")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const distance = parseFloat(document.querySelector("#distance").value);

      if (distance) {
        const convert = (distance * 1.609344).toFixed(3);
        result.innerHTML = `<h2>${distance} miles converted to kilometers is ${convert} Km</h2>`;
      } else {
        result.innerHTML = `<h2>Please write a number</h2>`;
      }
    });
})();
