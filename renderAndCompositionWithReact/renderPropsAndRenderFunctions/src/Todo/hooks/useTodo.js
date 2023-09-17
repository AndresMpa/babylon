import React, { useState } from "react";

import { useLocalStorage } from "@todo/hooks/useLocalStorage";

const useTodo = () => {
  const {
    error,
    loading,
    item: todos,
    saveItem: saveTodos,
  } = useLocalStorage("TOODS", []);

  let currentTodos = todos;

  const addTodo = (text) => {
    const newTodo = [...todos];
    newTodo.push({
      msg: text,
      state: false,
    });

    currentTodos = newTodo;
    saveTodos(newTodo);
  };

  const clearTodo = () => {
    const clearedTodo = todos.filter((task) => !task.state);

    currentTodos = clearedTodo;
    saveTodos(clearedTodo);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.msg === text);
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);

    currentTodos = newTodos;
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    console.log(`Completing "${text}"`);

    const todoIndex = todos.findIndex((todo) => todo.msg === text);
    const newTodos = [...todos];

    newTodos[todoIndex].status = !newTodos[todoIndex].status;

    currentTodos = newTodos;
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
