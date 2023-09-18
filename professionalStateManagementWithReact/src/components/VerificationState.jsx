import React, { useEffect, useState } from "react";

import "@styles/components/verification.scss";

const VerificationState = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fake backend behaviour
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return (
    <article className="verification">
      <h2 className="verification--title">{props.title}</h2>
      <p className="verification--text">{props.text}</p>

      {error && (
        <p className="verification--text" onClick={() => setError(!error)}>
          Ups... There's an error, click here, please
        </p>
      )}

      {loading && <p className="verification--text">Loading...</p>}

      <div className="verification--wrapper">
        <input
          className="verification--input"
          placeholder="Type here"
          name={props.name}
          type="text"
        />
        <button
          className="verification--button"
          disabled={error}
          onClick={() => setLoading(!loading)}
        >
          {props.button}
        </button>
      </div>
    </article>
  );
};

export { VerificationState };
