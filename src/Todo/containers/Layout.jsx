import React from "react";

// id="todoList"
const Layout = (props) => (
  <div id={props.identifier} className={props.class}>
    {props.children}
  </div>
);

export default Layout;
