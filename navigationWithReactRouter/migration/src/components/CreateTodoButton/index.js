import React from 'react';

import '../../styles/CreateTodoButton.css';

function CreateTodoButton(props) {
  return (
    <button className="CreateTodoButton" onClick={props.onCreateTodo}>
      +
    </button>
  );
}

export { CreateTodoButton };
