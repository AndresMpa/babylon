import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/TodoForm.css';

function TodoForm(props) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = ({ target: { value } }) => setNewTodoValue(value);
  const onCancel = () => navigate('/');
  const onSubmit = (event) => {
    event.preventDefault();

    navigate('/');
    props.submitEvent(newTodoValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{props.title}</label>
      <textarea
        value={newTodoValue}
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
