import React from "react";
import { NavLink } from "react-router-dom";

import "@styles/components/Menu.scss";

const Menu = () => {
  const routePaths = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Profile", path: "/profile" },
    { name: "Login", path: "/login" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <nav className="menu">
      <ul className="menu--wrapper">
        {routePaths.map((item, index) => (
          <li className="menu--item" key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
