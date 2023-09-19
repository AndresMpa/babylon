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

  useEffect(() => {
    // Fake backend behaviour
    if (request.loading) {
      setTimeout(() => {
        if (value !== SECURITY_CODE) {
          setRequest({ ...request, error: true, loading: false });
        } else {
          setRequest({ ...request, error: false, loading: false });
        }
      }, 2000);
    }
  }, [request.loading]);

  return (
    <article className="verification">
      <h2 className="verification--title">{props.title}</h2>
      <p className="verification--text">{props.text}</p>

      {request.error && !request.loading && (
        <p
          className="verification--text"
          onClick={() => setRequest({ ...request, error: false })}
        >
          Ups... There's an error, click here, please
        </p>
      )}

      {request.loading && <p className="verification--text">Loading...</p>}

      <div className="verification--wrapper">
        <input
          className="verification--input"
          placeholder="Type here"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          name={props.name}
          value={value}
          type="text"
        />
        <button
          className="verification--button"
          disabled={request.error}
          onClick={() => setRequest({ ...request, loading: true })}
        >
          {props.button}
        </button>
      </div>
    </article>
  );
};

export { VerificationState };
