import React, { Children, cloneElement } from "react";

const Layout = (props) => {
  const renderFunction = props.render || props.children;

  Children.toArray(renderFunction).map((child) => {
    const loading = props.loading;

    cloneElement(child, { loading });
  });

  return (
    <div id={props.identifier} className={props.class}>
      {renderFunction()}
    </div>
  );
};
export default Layout;
