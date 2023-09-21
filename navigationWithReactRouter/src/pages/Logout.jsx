import React from "react";
import { useAuth } from "@util/auth";

const Logout = () => {
  const auth = useAuth();

  // Action creators
  const onLogout = (event) => {
    event.preventDefault();
    auth.logout();
  };

  return (
    <>
      <h2>Logout</h2>
      <form onSubmit={onLogout}>
        <label htmlFor="username">Goodbye, go back soon</label>
        <button type="submit">End session</button>
      </form>
    </>
  );
};

export default Logout;
