import React from "react";

import "@styles/components/Config.styl";

const MobileFilter = () => {
  return (
    <div className="alt-config">
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
    </div>
  );
};

export default MobileFilter;
