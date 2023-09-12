import React, { useState } from "react";

import TodoItem from "@todo/components/TodoItem";
import AddTodo from "@todo/components/AddTodo";
import TodoConfig from "@todo/components/TodoConfig";
import Layout from "@todo/containers/Layout";

const App = () => {
  const [taskState, setTaskState] = useState([
    {
      msg: "Holita",
      status: false,
    },
    {
      msg: "Holita",
      status: false,
    },
  ]);

  const todoList = taskState.map((task, index) => {
    console.log(task.msg);
    return (
      <TodoItem key={index} task={task.msg} toggleComplete={setTaskState} />
    );
  });

  return (
    <>
      <AddTodo></AddTodo>
      <Layout id="todoList" class="">
        {todoList}
      </Layout>
      <TodoConfig tasks={taskState}></TodoConfig>
    </>
  );
};

export default App;
