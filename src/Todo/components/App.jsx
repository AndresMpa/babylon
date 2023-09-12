import React from "react";

import Todo from "./Todo";
import AddTodo from "./AddTodo";
import TodoConfig from "./TodoConfig";
import Layout from "../containers/Layout";

const App = () => {
  return (
    <>
      <AddTodo></AddTodo>
      <Layout id="todoList">
        <Todo></Todo>
      </Layout>
      <TodoConfig></TodoConfig>
    </>
  );
};

export default App;
