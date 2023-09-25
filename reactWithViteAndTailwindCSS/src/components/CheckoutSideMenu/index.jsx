import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { ShopingCardContext } from "../../context";

const CheckoutSideMenu = () => {
  const shoppingContext = useContext(ShopingCardContext);

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

      <article className="flex flex-col items-center">{}</article>
    </aside>
  );
};

export default CheckoutSideMenu;
