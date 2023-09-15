import React from "react";

import sunIcon from "@assets/images/icon-sun.svg";

import "@styles/components/Header.styl";

const Header = () => {
  return (
    <section className="header">
      <article className="header--wrapper">
        <h1 className="header--title">todo</h1>
        <figure className="header--icon">
          <img
            className="header--icon__image"
            id="themeSwitcher"
            src={sunIcon}
            alt="alt"
          />
        </figure>
      </article>
    </section>
  );
};

export default Header;
