import React, { useContext } from "react";

import AppContext from "@context/AppContext";

import OrderItem from "@components/OrderItem";

import "@styles/MyOrder.scss";

import flechita from "@icons/flechita.svg";

const MyOrder = () => {
  const { state } = useContext(AppContext);

  // Util
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const total = state.cart.reduce(reducer, 0);
    return total
  };
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product) => (
          <OrderItem product={product} key={`order-item-${product.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
