import React from "react";

const Wrapper = (props) => {
  return (
    <section className={props.section}>
      <article className={props.wrapper}>
        {props.renderTitle()}
        {props.renderIcon()}
      </article>
    </section>
  );
};

export default Wrapper;
