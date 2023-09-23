import React from "react";
import { useLocation, useParams } from "react-router-dom";

import { TodoForm } from "../components/TodoForm";

import { useTodos } from "../hooks/useTodos";

const Edit = () => {
  const location = useLocation();
  const params = useParams();
  const id = Number(params.id);
  let todoItem;

  const { state, stateUpdaters } = useTodos();
  const { loading, getTodo } = state;
  const { editTodo } = stateUpdaters;

  if (location.state?.todo) {
    todoItem = location.state.todo;
  } else if (loading) {
    return <p>Loading</p>;
  } else {
    todoItem = getTodo(id);
  }

  return (
    <TodoForm
      title={`Editing todo ${id}`}
      buttonLabel="Edit"
      defaultTodoValue={todoItem.text}
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
};

export default Edit;
