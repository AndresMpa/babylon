import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "@util/auth";

import "@styles/components/Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const auth = useAuth();

  if (auth.user) {
    return <Navigate to="/profile" replace />;
  }

  // Action creators
  const onWrite = ({ target: { value } }) => setUsername(value);
  const onLogin = (event) => {
    event.preventDefault();
    auth.login({ username });
  };

  return (
    <article className="login">
      <h2 className="login--title">Login</h2>
      <form className="login--form" onSubmit={onLogin}>
        <label className="login--form--label" htmlFor="username">
          Type your username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={onWrite}
          autoComplete="true"
          className="login--form--input"
        />

        <button className="login--form--button" type="submit">
          Submit
        </button>
      </form>
    </article>
  );
};

export default Login;
