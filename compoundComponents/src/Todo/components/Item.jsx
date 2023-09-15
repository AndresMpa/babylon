import React from "react";

import Icon from "@todo/components/Icon";

import checkIcon from "@assets/images/icon-check.svg";
import crossIcon from "@assets/images/icon-cross.svg";

import "@styles/components/Todo.styl";

const TodoItem = ({ task, completeTodo, deleteTodo }) => {
  return (
    <article className="todo">
      <Icon
        config={{
          class: {
            wrapper: "todo--icon",
            image: "todo--icon--image",
          },
          icon: checkIcon,
          alt: "Complete",
        }}
        clickHandler={completeTodo}
      />

      <p className="todo--description">{task.msg}</p>

      <Icon
        config={{
          class: {
            wrapper: "todo--cross",
            image: "todo--cross--image",
          },
          icon: crossIcon,
          alt: "Delete",
        }}
        clickHandler={deleteTodo}
      />
    </article>
  );
};

export default TodoItem;
