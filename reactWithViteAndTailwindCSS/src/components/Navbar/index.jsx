import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

import { ShopingCardContext } from "../../context";

const navRoutes = () => {
  const categories = [
    { to: "/", text: "Home" },
    { to: "/clothes", text: "Clothes" },
    { to: "/furniture", text: "Furniture" },
    { to: "/toys", text: "Toys" },
  ];

  const paths = [
    { to: "/my-orders", text: "My Orders" },
    { to: "/my-account", text: "My Account" },
    { to: "/sign-in", text: "Sign In" },
  ];

  return { categories, paths };
};

const Navbar = () => {
  const shoppingContext = useContext(ShopingCardContext);

  const { categories, paths } = navRoutes();
  const activeStyle = "underline";

  const onSetNarrow = (newNarrow) => shoppingContext.setNarrow(newNarrow);

  const pathsToReder = (paths) =>
    paths.map((path, index) => (
      <li key={index}>
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => onSetNarrow(path.to.slice(1))}
          to={path.to}
        >
          {path.text}
        </NavLink>
      </li>
    ));

  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="text-lg font-semibold">
          <NavLink to="/">Shopi</NavLink>
        </li>
        {pathsToReder(categories)}
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">testman@testman.com</li>
        {pathsToReder(paths)}
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6 text-black-500" />
          <div>{shoppingContext.count}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
