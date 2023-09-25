import { useContext } from "react";

import { ShopingCardContext } from "../../context";

import OrderCard from "../../components/OrderCard";

function MyOrder() {
  const shoppingContext = useContext(ShopingCardContext);

  const orderToRender = shoppingContext.order
    ?.slice(-1)[0]
    .products.map((product) => <OrderCard key={product.id} props={product} />);

  return (
    <div className="flex flex-col w-80">
      <h2 className="text-black font-semibold">My order</h2>
      {orderToRender}
    </div>
  );
}

export default MyOrder;
