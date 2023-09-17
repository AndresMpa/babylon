import React, { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "@assets/logo.png";
import "@styles/components/Header.styl";
import AppContext from "@context/AppContext";
import Title from "@components/Title";

const Header = () => {
  const cart = useContext(AppContext);

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">
          <img src={logo} alt="Logo" width="32" />
          <Title title="Example store"></Title>
        </Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
