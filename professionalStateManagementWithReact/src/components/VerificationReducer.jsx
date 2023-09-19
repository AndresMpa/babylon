import React, { useEffect, useReducer } from "react";

import { initialState, reducer } from "./reducer";

import "@styles/components/verification.scss";

// Just an example, you know
const SECURITY_CODE = "papaya";

const VerificationReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action creators

  const onError = () => dispatch({ type: actionTypes.error });
  const onRetry = () => dispatch({ type: actionTypes.retry });
  const onCheck = () => dispatch({ type: actionTypes.check });
  const onReset = () => dispatch({ type: actionTypes.reset });
  const onConfirm = () => dispatch({ type: actionTypes.confirm });
  const onConfirmed = () => dispatch({ type: actionTypes.confirmed });
  const onWrite = ({ target: { value } }) =>
    dispatch({ type: actionTypes.write, payload: value });

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        state.value !== SECURITY_CODE ? onConfirmed() : onError();
      }, 2000);
    }
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <article className="verification">
        <h2 className="verification--title">{props.title}</h2>
        <p className="verification--text">{props.text}</p>

        {state.error && !state.loading && (
          <p className="verification--text" onClick={onRetry}>
            Ups... There's an error, click here, please
          </p>
        )}

        {state.loading && <p className="verification--text">Loading...</p>}

        <div className="verification--wrapper">
          <input
            className="verification--input"
            placeholder="Type here"
            value={state.value}
            onChange={onWrite}
            name={props.name}
            type="text"
          />
          <button
            className="verification--button"
            disabled={state.error}
            onClick={onCheck}
          >
            {props.button}
          </button>
        </div>
      </article>
    );
  } else if (state.deleted && !state.confirmed) {
    return (
      <article className="verification">
        <h2 className="verification--title">Are you sure?</h2>
        <p className="verification--text">
          If you really want to delete this item, click confirme button
        </p>

        <div className="verification--wrapper">
          <button onClick={onReset} className="verification--button">
            No, get item back
          </button>
          <button onClick={onConfirm} className="verification--button">
            Yes, Confirme
          </button>
        </div>
      </article>
    );
  } else {
    return (
      <article className="verification">
        <h2 className="verification--title">Item deleted successfully</h2>
        <p className="verification--text">
          This action can be undone in following 30d
        </p>

        <div className="verification--wrapper">
          <button onClick={onReset} className="verification--button">
            Undone action, recover item
          </button>
        </div>
      </article>
    );
  }
};

export { VerificationReducer };
