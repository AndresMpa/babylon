import React, { useState } from "react";

import Layout from "@todo/containers/Layout";
import LayoutToRender from "@todo/containers/LayoutToRender";

import Add from "@todo/components/Add";
import Item from "@todo/components/Item";
import Clear from "@todo/components/Clear";
import Counter from "@todo/components/Counter";
import Filters from "@todo/components/Filters";

import { useTodo } from "@todo/hooks/useTodo";

const App = () => {
  const {
    addTodo,
    clearTodo,
    deleteTodo,
    currentTodos,
    completeTodo,

    filterAll,
    filterActive,
    filterCompleted,
  } = useTodo();

  return (
    <>
      <Add addTodo={addTodo} />
      <LayoutToRender
        class=""
        id="todoList"
        todos={currentTodos}
        render={(task, index) => (
          <Item
            key={index}
            task={task}
            onComplete={() => completeTodo(task.msg)}
            onDelete={() => deleteTodo(task.msg)}
          />
        )}
      />
      <Layout id="" class="config">
        <Counter todoList={currentTodos} />
        <Filters
          filterAll={filterAll}
          filterActive={filterActive}
          filterCompleted={filterCompleted}
        />
        <Clear clearTodo={clearTodo} />
      </Layout>
    </>
  );
};

export default App;
