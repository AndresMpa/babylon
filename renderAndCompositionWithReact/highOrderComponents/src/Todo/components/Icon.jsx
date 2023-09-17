import React from "react";

const Icon = ({ config, clickHandler }) => {
  return (
    <figure className={config.class.wrapper}>
      <img
        className={config.class.image}
        onClick={clickHandler}
        src={config.icon}
        alt={config.alt}
      />
    </figure>
  );
};

export default Icon;
