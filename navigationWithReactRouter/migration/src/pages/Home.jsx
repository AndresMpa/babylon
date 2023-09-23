import React from "react";
import { useNavigate } from "react-router-dom";

import { useTodos } from "../hooks/useTodos";

import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoHeader } from "../components/TodoHeader";
import { TodoSearch } from "../components/TodoSearch";
import { TodosError } from "../components/TodosError";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodoCounter } from "../components/TodoCounter";
import { TodosLoading } from "../components/TodosLoading";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { ChangeAlert } from "../components/ChangeAlert";

function Home() {
  const navigate = useNavigate();

  const { state, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    totalTodos,
    searchValue,
    searchedTodos,
    completedTodos,
  } = state;

  const { deleteTodo, completeTodo, setSearchValue, sincronizeTodos } =
    stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onDelete={() => deleteTodo(todo.id)}
            onComplete={() => completeTodo(todo.id)}
            onEdit={() =>
              navigate(`/edit/${todo.id}`, {
                state: { todo },
              })
            }
          />
        )}
      </TodoList>

      <CreateTodoButton onCreateTodo={() => navigate("/new")} />

      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export default Home;
