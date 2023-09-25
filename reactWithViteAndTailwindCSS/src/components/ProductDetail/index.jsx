import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { ShopingCardContext } from "../../context";

const ProductDetail = () => {
  const shoppingContext = useContext(ShopingCardContext);
  const product = shoppingContext.productToShow;

  return (
    <aside
      className={`${
        shoppingContext.showDetail ? "flex" : "hidden"
      } flex-col fixed right-2 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-90px)] overflow-auto`}
    >
      <article className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button
          onClick={shoppingContext.closeProductDetail}
          className="cursor-pointer"
        >
          <XMarkIcon />
        </button>
      </article>

      <article className="flex flex-col items-center">
        <figure className="flex justify-around">
          <img
            className="w-11/12 h-11/12 rounded-lg"
            src={product.images ? product.images[0] : ""}
            alt={product.title}
          />
        </figure>
        <p className="flex flex-col p-6">
          <span className="font-medium text-2xl mb-2">${product.price}</span>
          <span className="font-medium text-md">{product.title}</span>
          <span className="font-light text-sm">{product.description}</span>
        </p>
      </article>
    </aside>
  );
};

export default ProductDetail;
