(function () {
  "use strict";
  const nextButton = document.querySelector("#next");
  const previousButton = document.querySelector("#previous");
  const divContainer = document.querySelector("#content");
  const gallery = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];
  let item = 0;

  function swapImg() {
    const imgTag = document.createElement("img");
    imgTag.setAttribute("src", `img/${gallery[item]}`);
    imgTag.className = "fadeinimg ";
    divContainer.appendChild(imgTag);

    if (divContainer.children.length > 2) {
      divContainer.removeChild(divContainer.children[0]);
    }
  }

  nextButton.addEventListener("click", function () {
    if (item === gallery.length - 1) {
      item = 0;
    } else {
      item += 1;
    }
    swapImg();
  });

  previousButton.addEventListener("click", function () {
    if (item === 0) {
      item = gallery.length - 1;
    } else {
      item -= 1;
    }
    swapImg();
  });
})();
