import React, { useState } from "react";

import Layout from "@todo/containers/Layout";

import Item from "@todo/components/Item";
import Add from "@todo/components/Add";

import Counter from "@todo/components/Counter";
import Filters from "@todo/components/Filters";
import Clear from "@todo/components/Clear";

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
      <Layout id="todoList" class="">
        {currentTodos.map((task, index) => {
          return (
            <Item
              key={index}
              task={task}
              completeTodo={() => completeTodo(task.msg)}
              deleteTodo={() => deleteTodo(task.msg)}
            />
          );
        })}
      </Layout>
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
