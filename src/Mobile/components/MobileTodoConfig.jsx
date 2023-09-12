import React from "react";

import "@styles/components/Config.styl";

const AltTodoConfig = () => {
  return (
    <ul className="alt-config--filter" id="altFilters">
      <li className="alt-config--filter--item">
        <button className="alt-config--button alt-config--button__active">
          All
        </button>
      </li>
      <li className="alt-config--filter--item">
        <button className="alt-config--button">Active</button>
      </li>
      <li className="alt-config--filter--item">
        <button className="alt-config--button">Completed</button>
      </li>
    </ul>
  );
};

export default AltTodoConfig;
