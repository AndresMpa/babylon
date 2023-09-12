import React from "react";

import iconCheck from "@assets/images/icon-check.svg";

import "@styles/components/Todo.styl";

const AddTodo = () => {
  return (
    <nav className="addTodo">
      <figure className="addTodo--icon">
        <img className="addTodo--icon--image" src={iconCheck} alt="Check" />
      </figure>
      <input
        placeholder="Create a new todo..."
        className="addTodo--description"
        id="addTodo"
        name="todo"
        type="text"
      />
    </nav>
  );
};

export default AddTodo;
