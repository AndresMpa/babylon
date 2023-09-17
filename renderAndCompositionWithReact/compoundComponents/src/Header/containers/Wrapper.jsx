import React from "react";

const Wrapper = ({ section, wrapper, children }) => {
  return (
    <section className={section}>
      <article className={wrapper}>{children}</article>
    </section>
  );
};

export default Wrapper;
