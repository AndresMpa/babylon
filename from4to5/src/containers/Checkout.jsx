import React from "react";

import "@styles/components/Checkout.styl";

const Checkout = () => {
  const cart = useContext(AppContext);

  const remove = (ref) => {
    cart.pop(ref);
  };

  const handleSumTotal = () => {
    cart.reduce((prev, current) => {
      return (prev += current);
    }, 0);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item) => (
          <div className="Checkout-item" key={item.title}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={remove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
        </div>
      )}
    </div>
  );
};

export default Checkout;
