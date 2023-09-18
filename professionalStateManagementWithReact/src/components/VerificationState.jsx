import React from "react";

import "@styles/components/verification.scss";

const VerificationState = (props) => {
  return (
    <article className="verification">
      <h2 className="verification--title">{props.title}</h2>
      <p className="verification--text">{props.text}</p>
      <div className="verification--wrapper">
        <input
          className="verification--input"
          placeholder="Type here"
          name={props.name}
          type="text"
        />
        <button className="verification--button">{props.button}</button>
      </div>
    </article>
  );
};

export { VerificationState };
