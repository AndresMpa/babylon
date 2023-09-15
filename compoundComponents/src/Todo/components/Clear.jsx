import React from "react";

import "@styles/components/Config.styl";

const TodoClear = ({ clearTodo }) => {
  return (
    <button
      className="config--clear config--button"
      onClick={clearTodo}
    >
      Clear Completed
    </button>
  );
};

export default TodoClear;
