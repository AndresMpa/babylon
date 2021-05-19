let body = document.querySelector("body");
let scrollTop;

window.addEventListener("scroll", function () {
  scrollTop = window.pageYOffset;

  switch (true) {
    case scrollTop < 500: {
      body.className = "one";
      break;
    }
    case scrollTop < 1000: {
      body.className = "two";
      break;
    }
    case scrollTop < 1500: {
      body.className = "three";
      break;
    }
    case scrollTop < 2000: {
      body.className = "four";
      break;
    }
    case scrollTop < 2500: {
      body.className = "five";
      break;
    }
    default: {
      body.removeAttr("class");
      break;
    }
  }
});
