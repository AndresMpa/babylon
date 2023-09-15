import React from "react";

const LayoutToRender = (props) => (
  <div id={props.identifier} className={props.class}>
    {props.todos.map(props.render)}
  </div>
);

export default LayoutToRender;
