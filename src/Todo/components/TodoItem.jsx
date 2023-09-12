import React from "react";

import checkIcon from "@assets/images/icon-check.svg";
import crossIcon from "@assets/images/icon-cross.svg";

import "@styles/components/Todo.styl";

const TodoItem = ({ task }) => {
  console.log(task)
  return (
    <article className="todo">
      <figure className="todo--icon">
        <img className="todo--icon--image" src={checkIcon} alt="Check" />
      </figure>
      <p className="todo--description">{task}</p>
      <figure className="todo--cross">
        <img className="todo--cross--image" src={crossIcon} alt="Check" />
      </figure>
    </article>
  );
};

export default TodoItem;
