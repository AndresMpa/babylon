import React from "react";

const Login = () => {
  return (
    <section className="login">
      <article className="login-container">
        <img
          src="../assets/logos/logo_yard_sale.svg"
          className="logo"
          alt="logo"
        />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>
        <form className="form">
          <label htmlFor="email" className="">
            Email address
          </label>
          <input
            id="email"
            type="text"
            className="input email-input"
            placeholder="example@email.com"
          ></input>
          <label htmlFor="password" className="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            className="input input-password"
          ></input>

          <input
            type="button"
            value="Confirm"
            className="primary-button login-button"
          ></input>

          <a href="/" className="form-anchor">
            Forgot my password
          </a>
        </form>

        <button
          type="button"
          value="Confirm"
          className="secondary-button signup-button"
        >
          Sign up
        </button>
      </article>
    </section>
  );
};

export default Login;
