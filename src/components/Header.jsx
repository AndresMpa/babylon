import React, { useState, useContext, useLayoutEffect } from "react";

import AppContext from "@context/AppContext";

import MyOrder from "@containers/MyOrder";
import Menu from "@components/Menu";

import "@styles/Header.scss";

import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggleOrder, setToggleOrder] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { state } = useContext(AppContext);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 730) {
        setToogle(false);
      }
    });
  });

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={() => setToggle(!toggle)}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrder(!toggleOrder)}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>

      {toggleOrder && <MyOrder />}
      {toggle && <Menu />}
    </nav>
  );
};

export default Header;
