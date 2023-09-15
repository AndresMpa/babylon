import React from "react";

import "@styles/components/Config.styl";

const TodoCounter = ({ todoList }) => {
  return (
    <p className="config--remainig">
      <span id="itemsLeft">{todoList.length}</span> items left
    </p>
  );
};

export default TodoCounter;
