import React, { useState } from "react";

import { useAuth } from "@util/auth";

import "@styles/components/Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const auth = useAuth();

  // Action creators
  const onWrite = ({ target: { value } }) => setUsername(value);
  const onLogin = (event) => {
    event.preventDefault();
    auth.login(username);
  };

  return (
    <article className="login">
      <h2 className="login--title">Login</h2>
      <form className="login--form" onSubmit={onLogin}>
        <label className="login--form--label" htmlFor="username">
          Ingresa tu nombre de usuario
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
          Entrar
        </button>
      </form>
    </article>
  );
};

export default Login;
