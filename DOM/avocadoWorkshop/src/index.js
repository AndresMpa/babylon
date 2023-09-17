/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app";
const products = [];

// Utilities
const internatinalizePrice = (price) => {
  const formatter = new window.Intl.NumberFormat(
    navigator.language || "en-EN",
    {
      style: "currency",
      currency: "USD",
    }
  );
  return formatter.format(price);
};

const getProducts = await fetch(url + "/api/avo")
  .then((res) => res.json())
  .then((rawData) => {
    return rawData.data;
  })
  .catch((error) => {
    return [];
  });

const getDetail = (attributes) => {
  const detail = document.createElement("div");
  const stock = document.createElement("div");

  const title = document.createElement("h2");
  const description = document.createElement("p");

  const close = document.createElement("button");
  const label = document.createElement("button");
  const buy = document.createElement("button");

  //console.log(attributes);

  detail.classList = "absolute bottom-0 left-0";

  stock.classList = "relative w-10/12";
  title.classList =
    "mt-2 text-1xl text-gray-900 sm:text-2xl";
  description.classList = "max-h-28 overflow-y-auto";

  label.classList = "rounded-lg bg-green-500 text-white py-0.5 px-2 mt-5";
  close.classList =
    "rounded-lg border-2 border-green-500 py-0.5 px-2 absolute bottom-0 left-0";
  buy.classList = "rounded-lg border-2 border-green-500 py-0.5 px-2";

  close.textContent = "Close details";
  label.textContent = "See details";
  buy.textContent = "Buy avocado";

  detail.append(label, buy);

  close.onclick = () => {
    const reference = close.parentNode;

    let item = 2;
    for (item; item < reference.childNodes.length; item++) {
      reference.removeChild(reference.childNodes[item]);
    }

    reference.childNodes[1].classList.remove("hidden");
    reference.removeChild(close)
  };

  label.onclick = () => {
    const reference = label.parentNode.parentNode;
    reference.classList.add("hidden");

    console.log(attributes);

    title.textContent = `${attributes.taste}`;
    description.textContent = attributes.description;

    stock.innerHTML = "";
    stock.append(...[title, description]);

    reference.parentElement.append(...[stock, close]);
  };

  buy.onclick = () => {
    const reference = buy.parentNode.parentNode;
    title.textContent = "No more avocados";

    stock.innerHTML = "";
    stock.append(title);
    reference.parentNode.append(stock);
    reference.classList.add("hidden");
  };

  return detail;
};

const fillStock = async (data) => {
  const stock = await getProducts;
  stock.forEach((item) => {
    // Creation
    const container = document.createElement("article");
    const image = document.createElement("img");
    const title = document.createElement("h2");
    const price = document.createElement("span");
    const characteristics = document.createElement("div");

    // Styling
    container.classList =
      "w-11/12 flex rounded-lg border-4 border-r-green-500 hover:border-r-8 relative min-h-[12rem]";
    image.classList = "my-5 ml-5 mr-2 rounded-full w-1/3 flex justify-center";
    title.classList =
      "mt-2 text-3xl leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-10";
    price.classList = "mt-14 text-xl leading-7 text-gray-700";
    characteristics.classList = "w-6/12";

    // Editing
    image.src = `${url}${item.image}`;
    title.textContent = item.name;
    price.textContent = internatinalizePrice(item.price);

    // Adding
    characteristics.append(title, price, getDetail(item.attributes));
    container.append(image, characteristics);
    products.push(container);
  });

  // Updating
  document.querySelector("#main").append(...products);
};

fillStock();
