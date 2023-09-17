import React from "react";

import "@styles/components/Config.styl";

const TodoFilters = ({filterAll, filterActive, filterCompleted}) => {
  return (
    <ul className="config--filter" id="filters">
      <li className="config--filter--item">
        <button
          className="config--button config--button__active"
          onClick={filterAll}
        >
          All
        </button>
      </li>
      <li className="config--filter--item">
        <button className="config--button" onClick={filterActive}>
          Active
        </button>
      </li>
      <li className="config--filter--item">
        <button className="config--button" onClick={filterCompleted}>
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TodoFilters;
