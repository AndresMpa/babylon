import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/TodoForm.css';

function TodoForm(props) {
  const navigate = useNavigate();
  const [todoValue, setTodoValue] = React.useState(
    props.defaultTodoValue || '',
  );

  const onChange = ({ target: { value } }) => setTodoValue(value);
  const onCancel = () => navigate('/');
  const onSubmit = (event) => {
    event.preventDefault();

    props.submitEvent(todoValue);
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{props.title}</label>
      <textarea
        value={todoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla oara el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          {props.buttonLabel}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
