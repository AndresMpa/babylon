import React from "react";

import "@styles/components/Config.styl";

const TodoCounter = (todos) => {
  return (
    <p className="config--remainig">
      <span id="itemsLeft">{todos.length}</span> items left
    </p>
  );
};

export default TodoCounter;
