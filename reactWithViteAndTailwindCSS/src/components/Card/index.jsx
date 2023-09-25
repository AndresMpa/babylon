import { useContext } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

import { ShopingCardContext } from "../../context";

const Card = ({ props }) => {
  const shoppingContext = useContext(ShopingCardContext);

  const onAddToCard = (event) => {
    event.stopPropagation();
    shoppingContext.setCartProducts([...shoppingContext.cartProducts, props]);
    shoppingContext.setCount(shoppingContext.count + 1);
    shoppingContext.openShowCheckoutMenu();
    shoppingContext.closeProductDetail();
  };

  const onSetProduct = () => {
    shoppingContext.openProductDetail();
    shoppingContext.closeShowCheckoutMenu();
    shoppingContext.setProductToShow(props);
  };

  return (
    <div className="bg-white cursor-pointer w-56 h-60" onClick={onSetProduct}>
      <figure className="relative mb-2 w-full h-4/5">
        <figcaption className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {props.category.name}
        </figcaption>
        <img
          src={props.images[0]}
          className="w-full h-full object-cover rounded-lg"
          alt="Produt loading"
        />
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={onAddToCard}
        >
          <PlusIcon className="h-6 w-6 text-black-500" />
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{props.title}</span>
        <span className="text-lg font-medium">${props.price}</span>
      </p>
    </div>
  );
};

export default Card;
