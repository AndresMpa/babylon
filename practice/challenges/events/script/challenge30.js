(function () {
  "use strict";
  const body = document.querySelector("body");
  let keyPressed;

  window.addEventListener("keydown", function (event) {
    console.log(event.key);
    keyPressed = event.key;
    switch (true) {
      case keyPressed == "a": {
        body.className = "one";
        break;
      }
      case keyPressed == "s": {
        body.className = "two";
        break;
      }
      case keyPressed == "d": {
        body.className = "three";
        break;
      }
      case keyPressed == "f": {
        body.className = "four";
        break;
      }
      case keyPressed == "g": {
        body.className = "five";
        break;
      }
      default: {
        body.removeAttribute("class");
        break;
      }
    }
  });
})();
