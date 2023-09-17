import React, { useContext } from "react";

import AppContext from "@context/AppContext";

import "@styles/ProductItem.scss";

import add from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    console.log(`${item.title} added`)
    addToCart(item);
  };
  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={add} alt="add to cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
