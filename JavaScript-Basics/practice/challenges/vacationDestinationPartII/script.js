(function () {
  //"use strict";
  const detailsForm = document.querySelector("#destination_details_form");

  detailsForm.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements['name'].value;
    const location = event.target.elements['location'].value;
    const photo = event.target.elements['photo'].value;
    const description = event.target.elements['description'].value;

    for (let i = 0; i < detailsForm.length; i++) {
      detailsForm.elements[i].value = "";
    }

    const destincationCard = cardCreator(name, location, photo, description);
    const wishListContainer = document.querySelector("#destinations_container");

    if (wishListContainer.children.length === 0) {
      document.querySelector("#title").innerHTML = `My wish list`;
    }

    wishListContainer.appendChild(destincationCard);
  }

  function cardCreator(name, location, photo, desc) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.setAttribute("alt", name);

    if (photo.length === 0) {
      img.setAttribute("src", "images/signpost.jpg");
    } else {
      img.setAttribute("src", photo);
    }

    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h3");
    cardTitle.innerHTML = name;
    cardBody.appendChild(cardTitle);

    const cardSubtitle = document.createElement("h4");
    cardSubtitle.innerHTML = location;
    cardBody.appendChild(cardSubtitle);

    if (desc.length !== 0) {
      const cardText = document.createElement("p");
      cardText.className = "card-text";
      cardText.innerHTML = desc;
      cardBody.appendChild(cardText);
    } else {
      desc.innerHTML = ``;
    }

    const cardDeleteButton = document.createElement("button");
    cardDeleteButton.innerHTML = "Remove";

    cardDeleteButton.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeleteButton);

    card.appendChild(cardBody);

    return card;
  }

  function removeDestination(event) {
    const card = event.target.parentElement.parentElement;
    card.remove();
  }
})();
