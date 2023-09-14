import React, { useState } from "react";

import { useLocalStorage } from "@todo/hooks/useLocalStorage";

const useTodo = () => {
  const {
    error,
    loading,
    items: todos,
    saveItem: saveTodos,
  } = useLocalStorage("TOODS", []);

  let currentTodos = [{ msg: "test", state: false }];

  const addTodo = (text) => {
    const newTodo = [...todos];
    newTodo.push({
      msg: text,
      state: false,
    });

    saveTodos(todos);
  };

  const clearTodo = () => {
    const todos = getItem(STORAGE);
    const clearedTodo = todos.filter((task) => !task.state);

    saveTodos(clearedTodo);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.msg === text);
    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;

    saveTodos(newTodos);
  };

  const filterAll = () => (currentTodos = todos);
  const filterActive = () =>
    (currentTodos = todos.filter((active) => !active.state));
  const filterCompleted = () =>
    (currentTodos = todos.filter((completed) => completed.state));

  return {
    addTodo,
    clearTodo,
    deleteTodo,
    currentTodos,
    completeTodo,

    filterAll,
    filterActive,
    filterCompleted,
  };
};

export { useTodo };
