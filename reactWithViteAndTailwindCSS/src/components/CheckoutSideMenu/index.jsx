import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { XMarkIcon, BanknotesIcon } from "@heroicons/react/24/solid";

import { ShopingCardContext } from "../../context";
import OrderCard from "../OrderCard";

import { totalPrice } from "../../util";

const CheckoutSideMenu = () => {
  const shoppingContext = useContext(ShopingCardContext);
  const navigate = useNavigate();

  const deleteHandler = (id) => {
    const filteredProducts = shoppingContext.cartProducts.filter(
      (product) => product.id !== id,
    );
    shoppingContext.setCount(shoppingContext.count - 1);
    shoppingContext.setCartProducts(filteredProducts);
  };

  const onCheckout = () => {
    let date = new Date().toLocaleDateString();

    const orderToAdd = {
      date: date,
      product: shoppingContext.cartProducts,
      totalProducts: shoppingContext.cartProducts.length,
      totalPrice: totalPrice(shoppingContext.cartProducts),
    };

    shoppingContext.setOrder([...shoppingContext.order, orderToAdd]);
    shoppingContext.setCartProducts([]);
    shoppingContext.setCount(0);

    navigate("/my-order");
  };

  const productsToRender = shoppingContext.cartProducts.map((product) => (
    <OrderCard key={product.id} props={product} deleteHandler={deleteHandler} />
  ));

  return (
    <aside
      className={`${
        shoppingContext.showCheckoutMenu ? "flex" : "hidden"
      } flex-col fixed right-2 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-90px)] overflow-auto z-10`}
    >
      <article className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <button
          onClick={shoppingContext.closeShowCheckoutMenu}
          className="cursor-pointer"
        >
          <XMarkIcon className="h-6 w-6 text-black" />
        </button>
      </article>

      <div className="px-6 flex-1">{productsToRender}</div>

      <article className="flex flex-col items-center">
        <button
          className="flex justify-around mt-4 mb-6 py-3 w-11/12 rounded-lg border border-black bg-black text-center text-white z-10"
          onClick={onCheckout}
        >
          <span className="flex flex-row">
            <BanknotesIcon className="my-auto h-5 w-5 mx-2" /> Total
          </span>
          <span className="font-bold">
            ${totalPrice(shoppingContext.cartProducts)}
          </span>
        </button>
      </article>
    </aside>
  );
};

export default CheckoutSideMenu;
