import React from "react";

const Layout = (props) => {
  return (
    <div className={props.layout}>
      <ul className={props.container} id={props.id}></ul>
    </div>
  );
};

export default Layout;
