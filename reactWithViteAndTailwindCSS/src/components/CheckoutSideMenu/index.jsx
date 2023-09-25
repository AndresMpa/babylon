import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { ShopingCardContext } from "../../context";
import OrderCard from "../OrderCard";

const CheckoutSideMenu = () => {
  const shoppingContext = useContext(ShopingCardContext);

  const deleteHandler = (id) => {
    const filteredProducts = shoppingContext.cartProducts.filter(
      (product) => product.id !== id,
    );
    shoppingContext.setCartProducts(filteredProducts);
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
          onClick={shoppingContext.closeChechoutMenu}
          className="cursor-pointer"
        >
          <XMarkIcon />
        </button>
      </article>

      <article className="flex flex-col items-center">
        {productsToRender}
      </article>
    </aside>
  );
};

export default CheckoutSideMenu;
