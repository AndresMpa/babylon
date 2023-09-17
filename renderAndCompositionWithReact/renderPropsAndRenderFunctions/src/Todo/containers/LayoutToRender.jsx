import React from "react";

const LayoutToRender = (props) => {
  const renderFunction = props.render || props.children;

  return (
    <div id={props.identifier} className={props.class}>
      {props.todos.map(renderFunction)}
    </div>
  );
};
export default LayoutToRender;
