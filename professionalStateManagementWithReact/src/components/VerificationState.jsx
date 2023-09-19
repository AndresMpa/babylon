import React, { useEffect, useState } from "react";

import "@styles/components/verification.scss";

// Just an example, you know
const SECURITY_CODE = "papaya";

const VerificationState = (props) => {
  // Simple state
  const [value, setValue] = useState("");
  // Composed state
  const [request, setRequest] = useState({
    loading: false,
    error: false,
  });
  const [status, setStatus] = useState({
    confirmed: false,
    deleted: false,
  });

  // Fake backend behaviour
  const onValidate = () => {
    if (request.loading) {
      setTimeout(() => {
        if (value !== SECURITY_CODE) {
          setRequest({ ...request, error: true, loading: false });
        } else {
          setRequest({ ...request, error: false, loading: false });
          setStatus({ ...status, deleted: true });
        }
      }, 2000);
    }
  };
  const onWrite = (text) => {
    setValue(text);
  };
  const onConfirm = () => {
    setStatus({ ...status, confirmed: true });
  };
  const onCheck = () => {
    setRequest({ ...request, loading: true });
  };
  const onRetry = () => {
    setRequest({ ...request, error: false });
  };
  const onReset = () => {
    setStatus({ deleted: false, confirmed: false });
    setValue("");
  };

  useEffect(() => onValidate(), [request.loading]);

  if (!status.deleted && !status.confirmed) {
    return (
      <article className="verification">
        <h2 className="verification--title">{props.title}</h2>
        <p className="verification--text">{props.text}</p>

        {request.error && !request.loading && (
          <p className="verification--text" onClick={() => onRetry()}>
            Ups... There's an error, click here, please
          </p>
        )}

        {request.loading && <p className="verification--text">Loading...</p>}

        <div className="verification--wrapper">
          <input
            onChange={(event) => onWrite(event.target.value)}
            className="verification--input"
            placeholder="Type here"
            name={props.name}
            value={value}
            type="text"
          />
          <button
            className="verification--button"
            onClick={() => onCheck()}
            disabled={request.error}
          >
            {props.button}
          </button>
        </div>
      </article>
    );
  } else if (status.deleted && !status.confirmed) {
    return (
      <article className="verification">
        <h2 className="verification--title">Are you sure?</h2>
        <p className="verification--text">
          If you really want to delete this item, click confirme button
        </p>

        <div className="verification--wrapper">
          <button onClick={() => onReset()} className="verification--button">
            No, get item back
          </button>
          <button onClick={() => onCofirm()} className="verification--button">
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
          <button onClick={() => onReset()} className="verification--button">
            Undone action, recover item
          </button>
        </div>
      </article>
    );
  }
};

export { VerificationState };
