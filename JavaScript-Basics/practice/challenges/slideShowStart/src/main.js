(function () {
  "use strict";
  const previousButton = document.querySelector("#previous");
  const nextButton = document.querySelector("#next");
  const imgTag = document.querySelector("#myimage");
  let gallery = [
    "img/image1.jpg",
    "img/image2.jpg",
    "img/image3.jpg",
    "img/image4.jpg",
    "img/image5.jpg",
  ];
  let item = 0;

  nextButton.addEventListener("click", function () {
    if (item === gallery.length - 1) {
      item = 0;
    } else {
      item += 1;
    }
    imgTag.removeAttribute("src");
    imgTag.setAttribute("src", `${gallery[item]}`);
  });

  previousButton.addEventListener("click", function () {
    if (item === 0) {
      item = gallery.length - 1;
    } else {
      item -= 1;
    }
    imgTag.removeAttribute("src");
    imgTag.setAttribute("src", `${gallery[item]}`);
  });
})();
