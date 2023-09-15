import React from "react";

const Layout = (props) => (
  <div id={props.identifier} className={props.class}>
    {props.render()}
  </div>
);

export default Layout;
