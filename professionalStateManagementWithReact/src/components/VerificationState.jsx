import React, { useState } from "react";

import "@styles/components/verification.scss";

const VerificationState = (props) => {
  const [error, setError] = useState(false);

  return (
    <article className="verification">
      <h2 className="verification--title">{props.title}</h2>
      <p className="verification--text">{props.text}</p>

      {error && (
        <p className="verification--text" onClick={() => useState(!error)}>
          Ups... There's an error, click here, please
        </p>
      )}

      <div className="verification--wrapper">
        <input
          className="verification--input"
          placeholder="Type here"
          name={props.name}
          type="text"
        />
        <button className="verification--button" disabled={error}>
          {props.button}
        </button>
      </div>
    </article>
  );
};

export { VerificationState };
