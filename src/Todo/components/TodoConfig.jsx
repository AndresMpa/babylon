import React from "react";

import "@styles/components/Config.styl";

const TodoConfig = () => {
  return (
    <article className="config">
      <p className="config--remainig">
        <span id="itemsLeft">0</span> items left
      </p>
      <ul className="config--filter" id="filters">
        <li className="config--filter--item">
          <button className="config--button config--button__active">All</button>
        </li>
        <li className="config--filter--item">
          <button className="config--button">Active</button>
        </li>
        <li className="config--filter--item">
          <button className="config--button">Completed</button>
        </li>
      </ul>
      <button className="config--clear config--button" id="clear">
        Clear Completed
      </button>
    </article>
  );
};

export default TodoConfig;
