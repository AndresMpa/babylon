import React from "react";
import { NavLink } from "react-router-dom";

import { useAuth } from "../util/auth";

import "@styles/components/Menu.scss";

const routePaths = [
  { name: "Home", path: "/", private: false },
  { name: "Blog", path: "/blog", private: false },
  { name: "Profile", path: "/profile", private: true },
  { name: "Login", path: "/login", private: false, publicOnly: true },
  { name: "Logout", path: "/logout", private: true },
];

const Menu = () => {
  const auth = useAuth();

  return (
    <nav className="menu">
      <ul className="menu--wrapper">
        {routePaths.map((item, index) => {
          if (item.publicOnly && auth.user) return null;
          if (!auth.user && item.private) {
            return null;
          } else {
            return (
              <li className="menu--item" key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Menu;
