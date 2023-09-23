import React from "react";
import { useParams } from "react-router-dom";

import { TodoForm } from "../components/TodoForm";

import { useTodos } from "../hooks/useTodos";

const Edit = () => {
  const params = useParams();
  const id = Number(params.id);
  const { state, stateUpdaters } = useTodos();
  const { loading, getTodo } = state;
  const { editTodo } = stateUpdaters;

  if (loading) {
    return <p>Loading</p>;
  } else {
    const todoItem = getTodo(id);
    return (
      <TodoForm
        title={`Editing todo ${id}`}
        buttonLabel="Edit"
        defaultTodoValue={todoItem.text}
        submitEvent={(newText) => editTodo(id, newText)}
      />
    );
  }
};

export default Edit;
