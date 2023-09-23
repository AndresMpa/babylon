import React from "react";
import { TodoForm } from "../components/TodoForm";

const Edit = () => {
  return (
    <TodoForm
      title={`Editing todo`}
      buttonLabel="Edit"
      submitEvent={() => console.log("Editing")}
    />
  );
};

export default Edit;
