import React from "react";

const MobileFilterItem = (props) => {
  return (
    <li className={props.classItem}>
      <button
        className={props.classButton + (props.active ? props.classActive : "")}
      >
        {props.title}
      </button>
    </li>
  );
};

export default MobileFilterItem;
