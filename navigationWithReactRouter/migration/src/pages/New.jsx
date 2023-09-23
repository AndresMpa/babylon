import React from "react";
import { TodoForm } from "../components/TodoForm";

const New = () => {
  // Action creators

  return (
    <TodoForm
      title="Create a new to do item"
      buttonLabel="Add"
      submitEvent={() => console.log("adding")}
    />
  );
};

export default New;
