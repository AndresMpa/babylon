import React, { setState } from "react";

function App() {
  const [state, setState] = setState(initialState);

  return <TodoHeader state={state} setState={setState} />;
}

function TodoHeader({ state, setState }) {
  return (
    <header>
      <TodoCounter state={state} setState={setState} />
    </header>
  );
}
