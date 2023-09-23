import React from "react";

import { TodoForm } from "../components/TodoForm";

import { useTodos } from "../hooks/useTodos";

const New = () => {
  const {
    stateUpdaters: { addTodo },
  } = useTodos();

  return (
    <TodoForm
      title="Create a new to do item"
      buttonLabel="Add"
      submitEvent={(newTodo) => addTodo(newTodo)}
    />
  );
};

export default New;
