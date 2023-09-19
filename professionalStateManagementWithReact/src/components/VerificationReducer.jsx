import React, { useEffect, useReducer } from "react";

import "@styles/components/verification.scss";

const initialState = {
  value: "",
  error: false,
  loading: false,
  confirmed: false,
  deleted: false,
};

const reducerObject = (state, payload) => ({
  CONFIRMED: { ...state, error: true, loading: false },
  ERROR: { ...state, deleted: true, error: false, loading: false },
  RETRY: { ...state, error: false },
  WRITE: { ...state, value: payload },
  CHECK: { ...state, loading: true },
  CONFIRM: { ...state, confirmed: true },
  RESET: { ...state, value: "", deleted: false, confirmed: false },
});

const reducer = (state, action) => {
  return reducerObject(state)[action.type]
    ? reducerObject(state, action.payload)[action.type]
    : state;
};

// Just an example, you know
const SECURITY_CODE = "papaya";

const VerificationReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        state.value !== SECURITY_CODE
          ? dispatch({ type: "CONFIRMED" })
          : dispatch({ type: "ERROR" });
      }, 2000);
    }
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <article className="verification">
        <h2 className="verification--title">{props.title}</h2>
        <p className="verification--text">{props.text}</p>

        {state.error && !state.loading && (
          <p
            className="verification--text"
            onClick={() => dispatch({ type: "RETRY" })}
          >
            Ups... There's an error, click here, please
          </p>
        )}

        {state.loading && <p className="verification--text">Loading...</p>}

        <div className="verification--wrapper">
          <input
            onChange={(event) =>
              dispatch({ type: "WRITE", payload: event.target.value })
            }
            className="verification--input"
            placeholder="Type here"
            name={props.name}
            value={state.value}
            type="text"
          />
          <button
            onClick={() => dispatch({ type: "CHECK" })}
            className="verification--button"
            disabled={state.error}
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
          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="verification--button"
          >
            No, get item back
          </button>
          <button
            onClick={() => dispatch({ type: "CONFIRM" })}
            className="verification--button"
          >
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
          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="verification--button"
          >
            Undone action, recover item
          </button>
        </div>
      </article>
    );
  }
};

export { VerificationReducer };
