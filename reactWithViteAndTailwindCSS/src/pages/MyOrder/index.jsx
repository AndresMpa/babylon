import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import { ShopingCardContext } from "../../context";

import OrderCard from "../../components/OrderCard";

function MyOrder() {
  const shoppingContext = useContext(ShopingCardContext);
  const params = useParams();

  const shoppingProducts =
    shoppingContext.order[Number(params.id)]?.products ||
    shoppingContext.order?.slice(-1)[0].products;

  const orderToRender = shoppingProducts.map((product) => (
    <OrderCard key={product.id} props={product} />
  ));

  return (
    <>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="w-6 h-6 text-black cursor-pointer"></ChevronLeftIcon>
        </Link>
        <h2 className="text-black font-semibold">My order</h2>
      </div>
      <div className="flex flex-col w-80">{orderToRender}</div>
    </>
  );
}

export default MyOrder;
