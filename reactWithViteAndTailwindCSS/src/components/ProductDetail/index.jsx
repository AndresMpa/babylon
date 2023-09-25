import { useContext } from "react";

import { ShopingCardContext } from "../../context";

const ProductDetail = () => {
  const shoppingContext = useContext(ShopingCardContext);
  return (
    <aside
      className={`${
        shoppingContext.showDetail ? "flex" : "hidden"
      } flex-col fixed right-2 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-90px)]`}
    >
      <article className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button onClick={shoppingContext.closeProductDetail}>X</button>
      </article>
    </aside>
  );
};

export default ProductDetail;
