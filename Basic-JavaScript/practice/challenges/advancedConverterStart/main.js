(function () {
  "use strict";
  const result = document.querySelector("#answer");
  const paragraph = document.querySelector("p");
  const title = document.querySelector("h1");
  let distanceType = "miles";

  document.addEventListener("keydown", function (event) {
    if (event.code === "KeyK") {
      distanceType = "kilometers";
      title.innerHTML = `Kilometers to Miles Converter`;
      paragraph.innerHTML = `Type in a number of kilometers and click the button to convert the distance to miles.`;
    } else if (event.code === "KeyM") {
      distanceType = "miles";
      title.innerHTML = `Miles to Kilometers Converter`;
      paragraph.innerHTML = `Type in a number of miles and click the button to convert the distance to kilometers.`;
    }
  });

  document
    .querySelector("#convert")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const distance = parseFloat(document.querySelector("#distance").value);
      if (distance) {
        if (distanceType === "miles") {
          const convert = (distance * 1.609344).toFixed(3);
          result.innerHTML = `<h2>${distance} miles converted to kilometers is ${convert} Km</h2>`;
        } else if (distanceType === "kilometers") {
          const convert = (distance * 0.621371192).toFixed(3);
          result.innerHTML = `<h2>${distance} Km converted to miles is ${convert} M</h2>`;
        }
      } else {
        result.innerHTML = `<h2>Please write a number</h2>`;
      }
    });
})();
