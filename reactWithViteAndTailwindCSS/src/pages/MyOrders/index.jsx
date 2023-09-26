import { useContext } from "react";
import { Link } from "react-router-dom";

import { ShopingCardContext } from "../../context";

import OrdersCard from "../../components/OrdersCard";

function MyOrders() {
  const shoppingContext = useContext(ShopingCardContext);

  const ordersToRender = shoppingContext.order.map((item, index) => (
    <Link className="w-11/12" key={index} to={`/my-orders/${index}`}>
      <OrdersCard props={item} />
    </Link>
  ));

  return (
    <>
      <div className="flex flex-col items-center justify-center relative w-80">
        <h2 className="text-black font-semibold">My orders</h2>
        {ordersToRender}
      </div>
    </>
  );
}

export default MyOrders;
