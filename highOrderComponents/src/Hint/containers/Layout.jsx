import React, { Children, cloneElement } from "react";

const Layout = (props) => {
  return (
    <div id={props.identifier} className={props.class}>
      {props.children}
    </div>
  );
};
export default Layout;
